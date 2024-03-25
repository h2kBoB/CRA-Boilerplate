import { Navigate, Route } from 'react-router-dom';
import Home from '../pages/Home';

const publicPaths = [
  { path: '*', component: <Navigate to="/" /> },
  {
    path: '/',
    component: <Home />,
  },
];

export default function publicRoutes() {
  return publicPaths.map((page) => {
    return <Route path={page.path} element={page.component} key={page.path} />;
  });
}
