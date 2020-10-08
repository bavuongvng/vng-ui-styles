import { ITheme } from '../types';
import defaultTheme from './defaultTheme';

export default function createTheme(theme: Partial<ITheme> = {}): ITheme {
  return {
    ...defaultTheme,
    ...theme
  };
}
