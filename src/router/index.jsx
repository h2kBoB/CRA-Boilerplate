import { BrowserRouter, Routes } from 'react-router-dom';

import publicRoutes from './PublicRoutes';

function Router() {
  return (
    <BrowserRouter>
      <Routes>{publicRoutes()}</Routes>
    </BrowserRouter>
  );
}

export default Router;
