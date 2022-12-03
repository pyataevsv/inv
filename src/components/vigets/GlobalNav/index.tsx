import React, {
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import s from './s.scss';
import $ from 'classnames';
import { Route, useNavigate } from 'react-router';
import { NavIcon, NavItemType } from '../../common/NavIcon';
import { useLocation } from 'react-router-dom';

export enum MainRoute {
  dashboard = 'dashboard',
  strategy = 'strategy',
  portfolio = 'portfolio',
  profile = 'profile',
}

const itemConfig: NavItem[] = [
  {
    name: 'Дашборд',
    type: NavItemType.dashboard,
    rout: MainRoute.dashboard,
  },
  {
    name: 'Стратегии',
    type: NavItemType.strategy,
    rout: MainRoute.strategy,
  },
  {
    name: 'Портфель',
    type: NavItemType.portfolio,
    rout: MainRoute.portfolio,
  },
  {
    name: 'Профиль',
    type: NavItemType.profile,
    rout: MainRoute.profile,
  },
];

type NavItem = {
  name: string;
  type: NavItemType;
  rout: MainRoute;
  ref?: RefObject<HTMLDivElement>;
};

export const GlobalNav = () => {
  const [markerLeftOffset, setMarkerOffset] = useState(0);
  const path = useLocation().pathname;
  const refsItemConfig = itemConfig.map((i) => ({
    ...i,
    ref: useRef<HTMLDivElement>(null),
  }));
  const [item, setItem] = useState<NavItem | null>(refsItemConfig[0]);
  let navigate = useNavigate();

  const onClick = (i: NavItem) => {
    if (i !== item) {
      navigate(i.rout);
    }
  };

  useEffect(() => {
    if (item && item.ref && item.ref.current && item.ref.current.offsetParent) {
      setMarkerOffset(item.ref.current.offsetLeft);
    }
  }, [item?.ref?.current?.offsetLeft]);

  useEffect(() => {
    const currentRoute = Object.entries(MainRoute)
      .map((i) => i[1])
      .filter((i) => path.match(i))[0];

    const currentNavItem = refsItemConfig.filter(
      (i) => i.rout === currentRoute
    )[0];

    setItem(currentNavItem);
  }, [path]);

  return (
    <div className={s.footer}>
      <div>
        <div className={s.markerContainer}>
          <div className={s.marker} style={{ left: markerLeftOffset }}></div>
        </div>
        <div className={s.itemsbox}>
          {refsItemConfig.map((i, key) => (
            <div key={key} className={s.item} onClick={() => onClick(i)}>
              <NavIcon
                type={i.type}
                active={i.name === item?.name}
                inRef={i.ref}
              />
              <div className={$(s.name, { [s.active]: i.name === item?.name })}>
                {i.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
