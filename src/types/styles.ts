import * as CSS from 'csstype';
import * as JSS from 'jss';
import { DefaultTheme } from 'react-jss';

type JSSNormalCssProperties = CSS.Properties<number | string>;
type JSSFontface = CSS.AtRule.FontFace & {
  fallbacks?: CSS.AtRule.FontFace[];
};
type PropsFunc<Props extends object, T> = (props: Props) => T;

interface BaseCSSProperties extends JSSNormalCssProperties {
  '@font-face'?: JSSFontface | JSSFontface[];
}
interface CSSProperties extends BaseCSSProperties {
  [k: string]: unknown | CSSProperties;
}
type BaseCreateCSSProperties<Props extends object = {}> = {
  [P in keyof BaseCSSProperties]: BaseCSSProperties[P] | PropsFunc<Props, BaseCSSProperties[P]>;
};
interface CreateCSSProperties<Props extends object = {}> extends BaseCreateCSSProperties<Props> {
  [k: string]:
    | BaseCreateCSSProperties<Props>[keyof BaseCreateCSSProperties<Props>]
    | CreateCSSProperties<Props>;
}
export type TStyleRules<Props extends object = {}, ClassKey extends string = string> = Record<
  ClassKey,
  CSSProperties | CreateCSSProperties<Props> | PropsFunc<Props, CreateCSSProperties<Props>>
>;
export type TStyleRulesCallback<Theme, Props extends object, ClassKey extends string = string> = (
  theme: Theme
) => TStyleRules<Props, ClassKey>;
export type TStyles<Theme, Props extends object, ClassKey extends string = string> =
  | TStyleRules<Props, ClassKey>
  | TStyleRulesCallback<Theme, Props, ClassKey>;

export interface IWithStyleOptions<Theme = DefaultTheme> extends JSS.StyleSheetFactoryOptions {
  defaultTheme?: Theme;
  withTheme?: boolean;
  name?: string;
}

export type TClassNameMap<ClassKey extends string = string> = Record<ClassKey, string>;
