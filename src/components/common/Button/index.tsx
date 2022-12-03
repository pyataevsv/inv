import React from 'react';
import s from './s.scss';

export enum ButtonType {
  largefilled = 'largefilled',
  largeoutline = 'largeoutline',
  mediumoutline = 'mediumoutline',
  mediumfilled = 'mediumfilled',
  smalloutline = 'smalloutline',
  smallfilled = 'smallfilled',
  mediumgrey = 'mediumgrey',
}

interface Props extends React.HTMLProps<HTMLButtonElement> {
  type: ButtonType;
}

export const Button = ({ children, type, ...props }: Props) => (
  <button className={(s as any)[type]} {...props}>
    {children}
  </button>
);
