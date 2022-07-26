import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import classes from './Layout.module.scss';
import Header from '../Header/Header';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';

const Layout: FC = () => (
  <div className={classes.layout}>
    <Header />
    <BreadCrumbs />
    <Outlet />
  </div>
);

export default Layout;
