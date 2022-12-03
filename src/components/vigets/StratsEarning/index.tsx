import React, { useState } from 'react';
import s from './s.scss';
import $ from 'classnames';
import { Link } from '../../common/Link';
import { Table } from '../../common/Table';
import { Column } from '../../common/Table/Column';
import { Row } from '../../common/Table/Row';
import { faker } from '@faker-js/faker';

interface Props extends React.HTMLProps<HTMLDivElement> {}

const data1 = new Array(6).fill(1).map((i) => ({
  name: faker.commerce.productName(),
  value: faker.datatype.float({ min: 0, max: 25, precision: 0.01 }),
  diff: faker.datatype.float({ min: -5, max: 5, precision: 0.01 }),
}));
const data2 = new Array(6).fill(1).map((i) => ({
  name: faker.commerce.productName(),
  value: faker.datatype.float({ min: 0, max: 25, precision: 0.01 }),
  diff: faker.datatype.float({ min: -5, max: 5, precision: 0.01 }),
}));

export const StratsEarning = ({ ...props }: Props) => {
  const [scale, setScale] = useState(1);
  return (
    <div {...props} className={$(s.container, props.className)}>
      <div className={s.links}>
        <Link active={scale == 1} onClick={() => setScale(1)}>
          За сегодня
        </Link>
        <Link active={scale == 2} onClick={() => setScale(2)}>
          За все время
        </Link>
      </div>
      <Table>
        {(scale == 1 ? data1 : data2).map((item) => (
          <Row>
            <Column className={s.name} alignItems={'center'}>
              {item.name}
            </Column>
            <Column>
              <div className={s.value}>{item.value} USDT</div>
              <div
                className={s.diff}
                style={{ color: item.diff > 0 ? '#4CAF50' : '#E35141' }}
              >
                {item.diff} USDT ({(item.diff / item.value).toFixed(2)}%)
              </div>
            </Column>
          </Row>
        ))}
      </Table>
    </div>
  );
};
