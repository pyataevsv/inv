import React from 'react';
import s from './s.scss';
import $ from 'classnames';

interface Props extends React.HTMLProps<HTMLButtonElement> {
  active?: boolean;
}

export const Link = ({ children, active, type, ...props }: Props) => (
  <button className={$(s.link, { [s.active]: active })} {...props}>
    {children}
  </button>
);
