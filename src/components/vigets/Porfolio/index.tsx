import React, { useState } from 'react';
import s from './s.scss';
import $ from 'classnames';
import { Icon, IconType } from '../../common/Icon';
import { Link } from '../../common/Link';
import { Button, ButtonType } from '../../common/Button';

interface Props extends React.HTMLProps<HTMLDivElement> {}

enum Currency {
  btc,
  usd,
}
enum Scale {
  day,
  week,
  month,
}

interface State {
  currency: Currency;
  scale: Scale;
}

export const Portfolio = ({ ...props }: Props) => {
  const [state, setState] = useState<State>({
    currency: Currency.btc,
    scale: Scale.day,
  });

  return (
    <div {...props} className={$(s.container, props.className)}>
      <div className={s.portficon}>
        <div>
          <Icon type={IconType.portfolio} />
        </div>
      </div>
      <div className={s.portftitle}>Портфель</div>
      <div className={s.value}>13,123</div>
      <div className={s.diffvalue}>+74,29 (12,34%)</div>
      <div className={s.difficon}>
        <Icon type={IconType.portfolio} />
      </div>
      <div className={s.difftitle}>Изменение</div>
      <div className={s.links}>
        <Link active>За все время</Link>
      </div>
      <div className={s.buttons}>
        <div>
          <Button
            type={
              state.currency === Currency.btc
                ? ButtonType.mediumfilled
                : ButtonType.mediumoutline
            }
            onClick={() =>
              setState((state) => ({ ...state, currency: Currency.btc }))
            }
          >
            BTC
          </Button>
        </div>
        <div>
          <Button
            type={
              state.currency === Currency.usd
                ? ButtonType.mediumfilled
                : ButtonType.mediumoutline
            }
            onClick={() =>
              setState((state) => ({ ...state, currency: Currency.usd }))
            }
          >
            USD
          </Button>
        </div>
      </div>
    </div>
  );
};
