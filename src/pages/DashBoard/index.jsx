import React, { useState } from 'react';
import Header from './header';
import TodayTasks from './todayTasks';
import KpiStats from './kpiStats';
import MemberStatus from './MemberStatus/index';
import PostStatus from './PostStatus/postStatus';
import { Contents, TabContainer, Tab } from './styles';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('member');

  return (
    <>
      <Header />
      <Contents>
        <TodayTasks />
        <KpiStats />
      </Contents>
      <div>
        <TabContainer>
          <Tab
            $isActive={activeTab === 'member'}
            onClick={() => setActiveTab('member')}
          >
            회원 현황
          </Tab>
          <Tab
            $isActive={activeTab === 'post'}
            onClick={() => setActiveTab('post')}
          >
            게시물 현황
          </Tab>
        </TabContainer>
        {activeTab === 'member' && <MemberStatus />}
        {activeTab === 'post' && <PostStatus />}
      </div>
    </>
  );
};

export default Dashboard;
