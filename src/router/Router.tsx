import { Route, Routes } from 'react-router-dom';
import { navigationConfig } from '../constants/navigationConfig';
import Layout from '../components/Layout/Layout';
import CarsList from '../pages/CarsList/CarsList';
import DriversList from '../pages/DriversList/DriversList';
import Main from '../pages/Main/Main';

const Router = () => (
  <Routes>
    <Route
      path={navigationConfig.main.path}
      element={<Layout />}
    >
      <Route
        index
        element={<Main />}
      />
      <Route
        path={navigationConfig.drivers.path}
        element={<DriversList />}
      />
      <Route
        path={navigationConfig.cars.path}
        element={<CarsList />}
      />
    </Route>
  </Routes>
);

export default Router;
