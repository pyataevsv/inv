import React, { useState } from 'react';
import s from './s.scss';
import $ from 'classnames';
import { Button, ButtonType } from '../../common/Button';
import { Table } from '../../common/Table';
import { Column } from '../../common/Table/Column';
import { Row } from '../../common/Table/Row';
import { faker } from '@faker-js/faker';
import { currencies } from '../../../helpers';
import { Badge } from '../../common/Badge';
import { item } from '../GlobalNav/s.scss';

interface Props extends React.HTMLProps<HTMLDivElement> {}

const data = new Array(10).fill(1).map((i) => ({
  pair: `${faker.helpers.arrayElement(
    currencies
  )} / ${faker.helpers.arrayElement(currencies)}`,
  action: faker.helpers.arrayElement(['buy', 'sell']),
  date: faker.date.recent(10),
  name: faker.finance.accountName(),
  value: faker.datatype.float({ min: -0.1, max: 0.1, precision: 0.0001 }),
}));

export const LastTraids = ({ ...props }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <div {...props} className={$(s.container, props.className)}>
      <Table>
        {data
          .filter((i, index) => (open ? index < 10 : index < 5))
          .map((i) => (
            <Row>
              <Column flexGrow={3} innerClassName={s.left}>
                <div className={s.pair}>
                  <div>{i.pair}</div>
                  <div className={s.badge}>
                    <Badge color={i.action === 'buy' ? 'green' : 'red'}>
                      {i.action}
                    </Badge>
                  </div>
                </div>
                <div className={s.time}>{i.date.toISOString()}</div>
                <div className={s.name}>{i.name}</div>
              </Column>
              <Column alignItems={'center'} className={s.value}>
                {i.value} BTC
              </Column>
            </Row>
          ))}
      </Table>
      <div>
        {!open && (
          <Button onClick={() => setOpen(true)} type={ButtonType.largeoutline}>
            Смотреть все
          </Button>
        )}
      </div>
    </div>
  );
};
