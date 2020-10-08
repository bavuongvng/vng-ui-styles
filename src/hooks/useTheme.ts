import { useContext } from 'react';

import { ThemeContext } from '../context';
import { ITheme } from '../types';

const useTheme = (): ITheme => {
  return useContext(ThemeContext) as ITheme;
};

export { useTheme };
