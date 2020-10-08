import React from 'react';
import {
  IWithStyleOptions,
  TStyles,
  TStyleRules,
  TStyleRulesCallback,
  TClassNameMap
} from '../../types';
import { makeStyles } from '../';

type TThemeOfStyles<StyleType> = StyleType extends TStyles<any, infer Props> ? Props : {};
type TClassKeyInferable<Theme, Props extends object> = string | TStyles<Theme, Props>;
type TPropsOfStyles<StylesType> = StylesType extends TStyles<any, infer Props> ? Props : {};

type TClassKeyOfStyles<StylesOrClassKey> = StylesOrClassKey extends string
  ? StylesOrClassKey
  : StylesOrClassKey extends TStyleRulesCallback<any, any, infer ClassKey>
  ? ClassKey
  : StylesOrClassKey extends TStyleRules<any, infer ClassKey>
  ? ClassKey
  : never;
type TConsistentWith<DecorationTargetProps, InjectedProps> = {
  [P in keyof DecorationTargetProps]: P extends keyof InjectedProps
    ? InjectedProps[P] extends DecorationTargetProps[P]
      ? DecorationTargetProps[P]
      : InjectedProps[P]
    : DecorationTargetProps[P];
};

export type WithStyles<
  StyleType extends TClassKeyInferable<any, any>,
  IncludeTheme extends boolean | undefined = false
> = (IncludeTheme extends true ? { theme: TThemeOfStyles<StyleType> } : {}) & {
  classes: TClassNameMap<TClassKeyOfStyles<StyleType>>;
  innerRef?: React.Ref<any>;
} & TPropsOfStyles<StyleType>;

export interface IStyledComponentProps<ClassKey extends string = string> {
  classes?: Partial<TClassNameMap<ClassKey>>;
  innerRef?: React.Ref<any>;
}
function withStyles<
  StyleType extends TStyles<any, any>,
  Options extends IWithStyleOptions<TThemeOfStyles<StyleType>>,
  InjectedProps extends WithStyles<StyleType, Options['withTheme']>,
  AdditionalProps extends IStyledComponentProps<TClassKeyOfStyles<StyleType>> &
    TPropsOfStyles<StyleType>
>(styles: StyleType, options?: Options) {
  function HOC<
    C extends React.ComponentType<TConsistentWith<React.ComponentProps<C>, InjectedProps>>
  >(
    Component: C
  ): React.ComponentType<
    Omit<JSX.LibraryManagedAttributes<C, React.ComponentProps<C>>, keyof InjectedProps> &
      AdditionalProps
  > {
    const useStyles = makeStyles(styles, options);
    return function (props: any) {
      const classes = useStyles(props);
      return <Component classes={classes} {...props} />;
    };
  }

  return HOC;
}

export { withStyles };
