import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '../components/Layout';

import { createPrivateRoutes, createPublicRoutes } from './pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route> {createPublicRoutes()}</Route>
        <Route element={<Layout />}>{createPrivateRoutes()}</Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
