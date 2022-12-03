import React, { useEffect } from 'react';
import s from './s.scss';
import $ from 'classnames';
import { Container } from '../../common/Container';
import { Header } from '../../common/Header';
import { Banner } from '../../vigets/Banner';
import { Portfolio } from '../../vigets/Porfolio';
import { useLocation, useNavigate } from 'react-router';
import { MainRoute } from '../../vigets/GlobalNav';
import { PortfolioDynamics } from '../../vigets/PortfolioDynamics';
import { AvtiveBalance } from '../../vigets/ActiveBalance';
import { StratsEarning } from '../../vigets/StratsEarning';
import { LastTraids } from '../../vigets/LastTraids';
import { faker } from '@faker-js/faker';

export const Dashboard = () => {
  const path = useLocation().pathname;
  const navigate = useNavigate();
  console.log(path);

  useEffect(() => {
    if (path == '/') {
      navigate(MainRoute.dashboard);
    }
  }, [path]);

  return (
    <>
      <Header />
      <div className={s.container}>
        <div className={s.title}>
          <h1>Дашборд</h1>
        </div>
        <Banner marginTop autoRoll={20000} />
        <Container>
          <Portfolio />
        </Container>
        <Container className={s.dynamics} h2="Динамика по портфелю">
          <PortfolioDynamics />
        </Container>

        <Container h2="Баланс активов">
          <AvtiveBalance />
        </Container>
        <Container h2="Доходность стратегий">
          <StratsEarning />
        </Container>
        <Container className={s.lasttraids} h2="Последний трейды">
          <LastTraids />
        </Container>
      </div>
    </>
  );
};
