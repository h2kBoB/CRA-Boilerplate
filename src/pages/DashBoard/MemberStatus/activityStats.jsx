// KpiStats.jsx
import React, { useState, useEffect } from 'react';
import activityStatsData from '../../../data/activityStatsData';
import StatsComponent from '../../../components/common/StatusCard';

const ActivityStats = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('최근 1주');
  const [kpiData, setKpiData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(selectedTimeRange);
  }, [selectedTimeRange]);

  const fetchData = (timeRange) => {
    // TODO: API 호출 시 해당 부분 수정해주세요!
    setLoading(true);
    setTimeout(() => {
      const data = activityStatsData[timeRange];
      setKpiData(data);
      setLoading(false);
    }, 2000); // 2초의 네트워크 지연 상정
  };

  const handleOptionChange = (option) => {
    setSelectedTimeRange(option);
  };

  // 공통 컴포넌트에 전달할 props 준비
  const description = `지난 주 대비${kpiData[1]?.change} 줄었어요 ( +30% )`;

  return (
    <StatsComponent
      title="활동 현황"
      description={description}
      data={kpiData}
      isLoading={isLoading}
      timeRangeOptions={['최근 1주', '최근 30일', '최근 60일', '최근 6개월']}
      selectedTimeRange={selectedTimeRange}
      onTimeRangeChange={handleOptionChange}
    />
  );
};

export default ActivityStats;
