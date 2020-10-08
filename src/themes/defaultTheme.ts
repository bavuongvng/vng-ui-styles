import { ITheme } from '../types';

const theme: ITheme = {
  palette: {
    type: 'light',
    common: {
      black: '#000',
      white: '#fff'
    },
    primary: {
      main: '#394B80',
      dark: '#223771',
      light: '#4E5F8D',
      contrastText: '#fff'
    },
    secondary: {
      main: '#F47539',
      dark: '#F26522',
      light: '#F5844E',
      contrastText: '#fff'
    },
    text: {
      primary: '#25282b',
      secondary: '#515355',
      placeholder: '#7c7e80',
      textField: '#d3d4d5'
    }
  },
  spacing: (unit = 1) => unit * 8,
  divider: '#eaeaea',
  background: {
    default: '#fafafa',
    paper: '#fff'
  },
  zIndex: {
    mobileStepper: 1000,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    tooltip: 1500
  },
  action: {
    active: 'rgba(0,0,0,0.54)',
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  },
  typography: {
    h1: {
      fontFamily: 'Montserrat',
      style: 'normal',
      fontSize: '52px',
      fontWeight: 400,
      lineHeight: '64px',
      letterSpacing: '0.2px'
    },
    h2: {
      fontFamily: 'Montserrat',
      style: 'normal',
      fontSize: '44px',
      fontWeight: 600,
      lineHeight: '54px',
      letterSpacing: '0px'
    },
    h3: {
      fontFamily: 'Montserrat',
      style: 'normal',
      fontSize: '32px',
      fontWeight: 600,
      lineHeight: '40px',
      letterSpacing: '0.1px'
    },
    h4: {
      fontFamily: 'Montserrat',
      style: 'normal',
      fontSize: '24px',
      fontWeight: 600,
      lineHeight: '32px',
      letterSpacing: '0.2px'
    },
    h5: {
      fontFamily: 'Montserrat',
      style: 'normal',
      fontSize: '20px',
      fontWeight: 600,
      lineHeight: '26px',
      letterSpacing: '0.2px'
    },
    h6: {
      fontFamily: 'Montserrat',
      style: 'normal',
      fontSize: '18px',
      fontWeight: 600,
      lineHeight: '24px',
      letterSpacing: '0.2px'
    },
    subtitle1: {
      fontFamily: 'Roboto',
      style: 'italic',
      fontSize: '18px',
      fontWeight: 600,
      lineHeight: '24px',
      letterSpacing: '0.2px'
    },
    subtitle2: {
      fontFamily: 'Roboto',
      style: 'italic',
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '18px',
      letterSpacing: '0.1px'
    },
    body1: {
      fontFamily: 'Roboto',
      style: 'normal',
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px',
      letterSpacing: '0.1px'
    },
    body2: {
      fontFamily: 'Roboto',
      style: 'italic',
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '18px',
      letterSpacing: '0.1px'
    }
  }
};

export default theme;
