import React from 'react';
import s from './s.scss';
import $ from 'classnames';

interface Props extends React.HTMLProps<HTMLDivElement> {
  color: 'blue' | 'green' | 'red';
}

export const Badge = ({ children, color, type, ...props }: Props) => (
  <div
    className={$(
      s.badge,
      { [s.blue]: color === 'blue' },
      { [s.green]: color === 'green' },
      { [s.red]: color === 'red' }
    )}
    {...props}
  >
    {children}
  </div>
);
