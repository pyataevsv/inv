import React from 'react';
import s from './s.scss';
import $ from 'classnames';

import { BrowserRouter, Link, useParams, Routes } from 'react-router-dom';
import { Route, useNavigate } from 'react-router';
import { Book } from './components/pages/book';
import { GlobalNav, MainRoute } from './components/vigets/GlobalNav';
import { Dashboard } from './components/pages/Dashboard';
import { Strats } from './components/pages/Strats';
import { Header } from './components/common/Header';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className={s.container}>
          <GlobalNav />
          <div className={s.content}>
            <Header />
            <div className={s.page}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="strategy" element={<Strats />} />
                <Route path="portfolio" element={<h1>Portfolio</h1>} />
                <Route path="profile" element={<h1>Profile</h1>} />
                <Route path="book" element={<Book />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};
