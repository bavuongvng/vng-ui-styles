/* eslint-disable no-unused-vars */
import { Property } from 'csstype';

export type TColor = 'primary' | 'secondary';
export type TPalette = 'light';
export type TBackground = 'paper' | 'default';
export type TZIndex =
  | 'mobileStepper'
  | 'appBar'
  | 'drawer'
  | 'modal'
  | 'tooltip';
export type TSpacing = (unit?: number) => number;
export type TAction =
  | 'active'
  | 'hover'
  | 'selected'
  | 'disabled'
  | 'disabledBackground'
  | 'focus';
export type TActionOpacity =
  | 'hoverOpacity'
  | 'selectedOpacity'
  | 'disabledOpacity'
  | 'focusOpacity'
  | 'activatedOpacity';
export type TTypography =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2';
export type TTextColor = 'primary' | 'secondary' | 'placeholder' | 'textField';
export interface IColor {
  light: string;
  dark: string;
  main: string;
  contrastText: string;
}
export interface ICommon {
  black: string;
  white: string;
}
export interface IPalette extends Record<TColor, IColor> {
  type: TPalette;
  common: ICommon;
  text: Record<TTextColor, string>;
}
export interface ITypography {
  fontFamily: string;
  fontWeight: Property.FontWeight;
  fontSize: string;
  letterSpacing: Property.LetterSpacing;
  style: Property.FontStyle;
  lineHeight: Property.LineHeight;
}

export interface ITheme {
  palette: IPalette;
  spacing: TSpacing;
  divider: string;
  background: Record<TBackground, string>;
  zIndex: Record<TZIndex, number>;
  action: Record<TAction, string> & Record<TActionOpacity, number>;
  typography: Record<TTypography, ITypography>;
}
