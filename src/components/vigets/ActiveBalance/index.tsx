import React, { useState } from 'react';
import s from './s.scss';
import $ from 'classnames';
import { Select, SelectOption } from '../../common/Select';
import { Button, ButtonType } from '../../common/Button';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Table } from '../../common/Table';
import { TableHeader } from '../../common/Table/TableHeader';
import { Column } from '../../common/Table/Column';
import { Row } from '../../common/Table/Row';
import { faker } from '@faker-js/faker';
import { currencies } from '../../../helpers';

ChartJS.register(ArcElement, Tooltip, Legend);

let item = {
  name: 'One-btc Pums',
  summ: 10,
  percent: 10,
};

const byStratData = new Array(10).fill(1).map((i) => ({
  name: faker.commerce.productName(),
  summ: faker.datatype.float({ max: 100, precision: 0.001 }),
  percent: faker.datatype.float({ max: 100 }),
}));

const chartStrat = {
  datasets: [
    {
      label: byStratData.map((i) => i.name),
      data: byStratData.map((i) => i.summ),
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
    },
  ],
};

const byActiveData = new Array(10).fill(1).map((i) => ({
  name: faker.helpers.arrayElement(currencies),
  summ: faker.datatype.float({ max: 100, precision: 0.001 }),
  percent: faker.datatype.float({ max: 100 }),
}));

const chartActiveData = {
  datasets: [
    {
      label: byActiveData.map((i) => i.name),
      data: byActiveData.map((i) => i.summ),
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
    },
  ],
};

const options: SelectOption[] = [
  {
    name: 'По криптовалюте',
    value: 'crypto',
  },
  {
    name: 'По стретегии',
    value: 'strat',
  },
];

interface Props extends React.HTMLProps<HTMLDivElement> {}

export const AvtiveBalance = ({ ...props }: Props) => {
  const [open, setOpen] = useState(false);
  const [option, setOption] = useState(options[0]);
  return (
    <div {...props} className={$(s.container, props.className)}>
      <div>
        <div>
          <Select
            options={options}
            primalOption={option}
            onChange={(option) => setOption(option!)}
          />
        </div>
        <div className={s.data}>
          <div>
            <div className={s.chart}>
              <Doughnut
                style={{ zIndex: 2 }}
                data={option.value == 'strat' ? chartStrat : chartActiveData}
                width={250}
              />
              <div className={s.balance}>$23.7k</div>
            </div>
          </div>
          <div className={s.table}>
            <Table>
              <TableHeader>
                <Column flexBasis={'60%'}>
                  {option.value == 'strat' ? 'Стратегия' : 'Актив'}
                </Column>
                <Column flexBasis={'20%'} justify={'center'}>
                  USDT
                </Column>
                <Column flexBasis={'20%'} justify={'center'}>
                  Портф.%
                </Column>
              </TableHeader>
              {(option.value == 'strat' ? byStratData : byActiveData)
                .filter((i, ind) => (open ? ind < 10 : ind < 5))
                .map((i) => (
                  <Row>
                    <Column flexBasis={'60%'}>{i.name}</Column>
                    <Column flexBasis={'20%'} justify={'center'}>
                      {i.summ}
                    </Column>
                    <Column flexBasis={'20%'} justify={'center'}>
                      {i.percent}
                    </Column>
                  </Row>
                ))}
            </Table>
          </div>
        </div>
      </div>
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
