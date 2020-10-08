import { createUseStyles } from 'react-jss';

import { ITheme as DefaultTheme, TStyles, IWithStyleOptions, TClassNameMap } from '../../types';
import { useTheme } from '../../hooks';
import { theme as defaultTheme } from '../../themes';

function makeStyles<
  Theme = DefaultTheme,
  Props extends object = {},
  ClassKey extends string = string
>(
  styles: TStyles<Theme, Props, ClassKey>,
  options?: Omit<IWithStyleOptions<Theme>, 'withTheme'>
): (props?: Props) => TClassNameMap<ClassKey> {
  const useStyles = (props: Props): TClassNameMap<ClassKey> => {
    const _theme = useTheme() || options?.defaultTheme;
    const theme: any = Object.keys(_theme).length ? _theme : defaultTheme;
    if (typeof styles === 'function') return createUseStyles(styles(theme) as any)(props);
    return createUseStyles(styles as any)(props);
  };

  return useStyles;
}

export { makeStyles };
