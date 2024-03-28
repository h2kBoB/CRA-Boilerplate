// Layout.jsx
import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import TopBar from '../Topbar';

const sidebarWidth = '250px';

function Layout() {
  return (
    <>
      {' '}
      <TopBar />
      <Sidebar width={sidebarWidth} />
      <LayoutWrapper>
        <ContentWrapper>
          <MainContent>
            <Outlet />
          </MainContent>
        </ContentWrapper>
      </LayoutWrapper>
    </>
  );
}

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  padding-top: 64px;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  margin-left: ${sidebarWidth};
`;

export default Layout;
