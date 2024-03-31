import React, { useState, useMemo } from 'react';
import MembershipChart from '../../../components/common/Chart/index';
import {
  sampleData,
  sampleData2,
  sampleData3,
} from '../../../data/memberStatusData';
import ActivityStats from './activityStats';

const calculateFilteredData = (data, period) => {
  const endDate = new Date();
  const startDate = new Date();

  switch (period) {
    case '최근 1주':
      startDate.setDate(endDate.getDate() - 7);
      break;
    case '최근 30일':
      startDate.setDate(endDate.getDate() - 30);
      break;
    case '최근 60일':
      startDate.setDate(endDate.getDate() - 60);
      break;
    case '최근 6개월':
      startDate.setMonth(endDate.getMonth() - 6);
      break;
    default:
      // 기본값 혹은 일치하는 경우가 없는 경우 처리
      break;
  }

  return data.filter((item) => {
    const itemDate = new Date(item.date);
    return itemDate >= startDate && itemDate <= endDate;
  });
};

const MemberStatus = () => {
  // 각 차트의 선택된 기간을 독립적으로 관리하는 상태
  const [selectedPeriodForMembership, setSelectedPeriodForMembership] =
    useState('최근 1주');
  const [selectedPeriodForSignup, setSelectedPeriodForSignup] =
    useState('최근 1주');

  const filteredDataForMembership = useMemo(
    () => calculateFilteredData(sampleData, selectedPeriodForMembership),
    [selectedPeriodForMembership],
  );
  const filteredDataForSignup = useMemo(
    () => calculateFilteredData(sampleData2, selectedPeriodForSignup),
    [selectedPeriodForSignup],
  );

  // 첫 번째 차트의 기간 선택 핸들러
  const handlePeriodChangeForMembership = (period) => {
    setSelectedPeriodForMembership(period);
  };

  // 두 번째 차트의 기간 선택 핸들러
  const handlePeriodChangeForSignup = (period) => {
    setSelectedPeriodForSignup(period);
  };

  // 첫 번째 차트를 위한 툴팁 포맷터 함수
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  // 첫 번째 차트의 툴팁 포맷터 함수
  const tooltipFormatterForMembership = (date, value) => {
    const formattedDate = formatDate(date);
    return `${formattedDate} 회원수\n${value}명 \n 남 ${value * 0.4} / 여 ${
      value * 0.6
    }`;
  };

  // 두 번째 차트를 위한 툴팁 포맷터 함수
  const tooltipFormatterForSignup = (data) => {
    const { value: signupValue, value2: withdrawalValue } = data;
    // TODO: 증감률 계산을 위한 로직 추가 필요
    const newMembersIncreaseRate = 10; // 예시값
    const leftMembersDecreaseRate = 5; // 예시값
    return `신규가입: ${signupValue}명 (+${newMembersIncreaseRate}%)\n탈퇴: ${withdrawalValue}명 (-${leftMembersDecreaseRate}%)`;
  };

  // 세 번째 차트의 툴팁 포맷터 함수
  const tooltipFormatterForAge = (age, value) => {
    return `${age}세 : ${value} 명`;
  };

  return (
    <>
      <div
        className="Frame2610446"
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: 10,
          display: 'inline-flex',
          flexDirection: 'inline-flex',
        }}
      >
        <MembershipChart
          // TODO: 해당 부분 실제 데이터 바인딩 하시면 됩니다.
          title="총 회원수 현황"
          subtitle="누적 회원수 : 1,500명 (지난주 대비 +30%)"
          data={filteredDataForMembership}
          xAxisKey="date"
          yAxisKey="value"
          tooltipFormatter={tooltipFormatterForMembership}
          period={selectedPeriodForMembership}
          onPeriodChange={handlePeriodChangeForMembership}
          showDropdown
          dateFormat="MM.DD"
        />
        <MembershipChart
          // TODO: 해당 부분 실제 데이터 바인딩 하시면 됩니다.
          title="신규가입 / 탈퇴 현황"
          subtitle="오늘 신규 회원수 : 100명 / 탈퇴수 : 40명"
          data={filteredDataForSignup}
          xAxisKey="date"
          yAxisKey="value"
          tooltipFormatter={tooltipFormatterForSignup}
          period={selectedPeriodForSignup}
          onPeriodChange={handlePeriodChangeForSignup}
          showDropdown
          dateFormat="MM.DD"
        />
      </div>
      <div
        className="Frame2610446"
        style={{
          width: '100%',
          height: '180px',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: 10,
          display: 'inline-flex',
          flexDirection: 'inline-flex',
          marginTop: '20px',
        }}
      >
        <ActivityStats />

        <MembershipChart
          // TODO: 해당 부분 실제 데이터 바인딩 하시면 됩니다.
          title="연령대별 사용자 현황"
          data={sampleData3}
          xAxisKey="age"
          yAxisKey="value"
          tooltipFormatter={tooltipFormatterForAge}
          chartHeight={100}
          hideYAxis="true"
          containerStyle={{ height: '174.09px' }}
        />
      </div>
    </>
  );
};

export default MemberStatus;
