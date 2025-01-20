import React from 'react';
import { ModalsProvider } from './modals';

interface IProps {
  children: any;
}

const AppProvider = (props: IProps) => {
  const { children } = props;

  return (
    <ModalsProvider>
      {children}
    </ModalsProvider>
  );
};

export { AppProvider };
