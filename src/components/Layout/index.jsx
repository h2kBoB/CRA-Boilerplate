// Layout.jsx
import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Sidebar from '../common/Sidebar';
import TopBar from '../common/Topbar';

const sidebarWidth = '280px';

function Layout() {
  return (
    <>
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
  background-color: #e9e9e9;
`;

export default Layout;
