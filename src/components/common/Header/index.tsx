import React from 'react';
import s from './s.scss';
import $ from 'classnames';
import { NavIcon, NavItemType } from '../NavIcon';

interface Props extends React.HTMLProps<HTMLDivElement> {}

export const Header = ({ ...props }: Props) => {
  return (
    <div {...props} className={$(s.container, props.className)}>
      {props.children}
      <div>Добрый день, Александр</div>
      <div>
        <NavIcon type={NavItemType.profile} />
      </div>
    </div>
  );
};
