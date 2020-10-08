import * as React from 'react';
import styles from './styles.module.css';

interface Props {
  text: string;
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>;
};

export * from './context';
export * from './hooks';
export * from './styles';
export * from './themes';
export * from './types';
export * from './utils';
