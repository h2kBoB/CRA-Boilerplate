// src/router/PublicRoutes.jsx
import { Navigate, Route, Outlet } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import DashBoard from '../pages/DashBoard';
import AccountManagement from '../pages/AccountManagement';
import Faq from '../pages/CustomerService/faq';
import Inquiries from '../pages/CustomerService/inquiries';
import Notices from '../pages/CustomerService/notices';
import PostManagement from '../pages/PostManagement';
import SystemManagement from '../pages/SystemManagement';
import UserManagement from '../pages/UserManagement';

// TODO: 추가 페이지 라우터 설정 여기서 해주세요!
const privateRoutes = [
  { path: '/dashboard', element: <DashBoard /> },
  { path: '/accountmanagement', element: <AccountManagement /> },
  { path: '/customerService/faq', element: <Faq /> },
  { path: '/customerService/inquiries', element: <Inquiries /> },
  { path: '/customerService/notices', element: <Notices /> },
  { path: '/postManagement', element: <PostManagement /> },
  { path: '/systemManagement', element: <SystemManagement /> },
  { path: '/userManagement', element: <UserManagement /> },
];

const publicRoutes = [
  {
    path: '/',
    element: <LoginPage />,
  },
];

const ProtectRoute = () => {
  const isLoggedIn = !!localStorage.getItem('isLoggedIn');
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export const createPublicRoutes = () => {
  return publicRoutes.map((route) => {
    return <Route key={route.path} path={route.path} element={route.element} />;
  });
};

export const createPrivateRoutes = () => {
  return privateRoutes.map((route) => {
    return (
      <Route key={route.path} element={<ProtectRoute />}>
        <Route path={route.path} element={route.element} />
      </Route>
    );
  });
};
