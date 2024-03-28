// src/router/PublicRoutes.jsx
import { Navigate, Route } from 'react-router-dom';
import Layout from '../components/Layout/index';
import Home from '../pages/Home';

const publicPaths = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '*', element: <Navigate to="/" /> },
    ],
  },
];

export default function publicRoutes() {
  return publicPaths.map((route) => {
    return (
      <Route key={route.path} path={route.path} element={route.element}>
        {route.children &&
          route.children.map((child) => (
            <Route key={child.path} path={child.path} element={child.element} />
          ))}
      </Route>
    );
  });
}
