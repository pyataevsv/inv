import React, { useState } from 'react';
import s from './s.scss';
import $ from 'classnames';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { Link } from '../../common/Link';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

export const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  tooltips: {
    enabled: false,
  },
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  scales: {
    y: {
      type: 'linear' as const,
      display: true,
      position: 'left' as const,
    },
  },
};

const labelsDay = [
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
];
const labelsWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sut', 'Sun'];
const labelsMonth = ['Jun', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

enum Scales {
  day,
  week,
  month,
}

const labels = labelsDay;

export const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    },
  ],
};

const data1 = {
  [Scales.day]: {
    labels: labelsDay,
    datasets: [
      {
        data: labelsWeek.map(() =>
          faker.datatype.float({ min: -3, max: 3, precision: 0.001 })
        ),
        borderColor: '#a337ff',
        backgroundColor: '#a337ff',
        cubicInterpolationMode: 'monotone',
        tension: 0.4,
      },
    ],
  },
  [Scales.week]: {
    labels: labelsWeek,
    datasets: [
      {
        data: labelsWeek.map(() =>
          faker.datatype.float({ min: -3, max: 3, precision: 0.001 })
        ),
        borderColor: '#a337ff',
        backgroundColor: '#a337ff',
        cubicInterpolationMode: 'monotone',
        tension: 0.4,
      },
    ],
  },

  [Scales.month]: {
    labels: labelsMonth,
    datasets: [
      {
        data: labelsMonth.map(() =>
          faker.datatype.float({ min: -3, max: 3, precision: 0.001 })
        ),
        borderColor: '#a337ff',
        backgroundColor: '#a337ff',
        cubicInterpolationMode: 'monotone',
        tension: 0.4,
      },
    ],
  },
};

interface Props extends React.HTMLProps<HTMLDivElement> {}

export const PortfolioDynamics = ({ ...props }: Props) => {
  const [scale, setScale] = useState<Scales>(Scales.day);

  return (
    <div {...props} className={$(s.container, props.className)}>
      <div></div>
      <div>
        <Line options={options} data={data1[scale]} height={250} />
      </div>
      <div className={s.links}>
        <div>
          <Link
            active={scale === Scales.day}
            onClick={() => setScale(Scales.day)}
          >
            День
          </Link>
        </div>
        <div>
          <Link
            active={scale === Scales.week}
            onClick={() => setScale(Scales.week)}
          >
            Неделя
          </Link>
        </div>
        <div>
          <Link
            active={scale === Scales.month}
            onClick={() => setScale(Scales.month)}
          >
            Месяц
          </Link>
        </div>
      </div>
    </div>
  );
};
