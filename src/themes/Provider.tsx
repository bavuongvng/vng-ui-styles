import React from 'react';
import { ITheme } from '../types';
import defaultTheme from './defaultTheme';
import { ThemeContext } from '../context';

interface IThemeProvider {
  theme?: ITheme;
}

const ThemeProvider: React.FC<IThemeProvider> = ({
  theme = defaultTheme,
  children
}) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
