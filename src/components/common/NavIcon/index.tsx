import React, { RefObject } from 'react';
import s from './s.scss';
import $ from 'classnames';

export enum NavItemType {
  dashboard = 'dashboard',
  strategy = 'strategy',
  portfolio = 'portfolio',
  profile = 'profile',
}

interface Props extends React.HTMLProps<HTMLDivElement> {
  type: NavItemType;
  active?: boolean;
  inRef?: RefObject<HTMLDivElement>;
}

export const NavIcon = ({ type, active, inRef }: Props) => (
  <div
    className={$(
      s.icon,
      { [s.active]: !!active },
      { [s.dashboard]: 'dashboard' === type },
      { [s.strategy]: 'strategy' === type },
      { [s.portfolio]: 'portfolio' === type },
      { [s.profile]: 'profile' === type }
    )}
    ref={inRef}
  ></div>
);
