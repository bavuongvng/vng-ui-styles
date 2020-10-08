import React from 'react';

import {
  ExampleComponent,
  createStyles,
  ITheme,
  makeStyles,
  WithStyles,
  withStyles
} from '@pss-ui/styles';
import '@pss-ui/styles/dist/index.css';

const styles = (theme: ITheme) => {
  console.log({ theme });

  return createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      outline: 'none',
      border: 'none',
      padding: theme.spacing(2),
      borderRadius: 4,
      color: theme.palette.primary.contrastText
    }
  });
};
const useStyles = makeStyles(styles);
const MyButton = () => {
  const classes = useStyles();
  return <button className={classes.root}>This is my button</button>;
};

interface IProps extends WithStyles<typeof styles> {
  color?: 'primary' | 'secondary';
  name: string;
}

class MyButtonClass extends React.Component<IProps> {
  render() {
    const { classes } = this.props;
    return <button className={classes.root}>My button Class</button>;
  }
}

const BtnClass = withStyles(styles)(MyButtonClass);

const App = () => {
  return (
    <div>
      <ExampleComponent text='Create React Library Example 😄' />
      <MyButton />
      <BtnClass name='sd' />
    </div>
  );
};

export default App;
