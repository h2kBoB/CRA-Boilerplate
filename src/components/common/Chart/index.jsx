/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import DropdownButton from '../DropDown';
import {
  TooltipContainer,
  ChartContainer,
  Frame,
  FrameHeader,
  TitleWrapper,
  Title,
  Subtitle,
  FrameContent,
} from './styles';

const CustomDot = (props) => {
  const { cx, cy } = props;
  return (
    <circle
      cx={cx}
      cy={cy}
      r={6}
      stroke="#412CAB"
      strokeWidth={4}
      fill="white"
    />
  );
};

const CustomTooltip = ({ active, payload, label, formatter }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload; // 현재 활성화된 데이터 포인트의 정보
    const formattedText = formatter(label, data.value, data); // 추가 정보를 포맷터 함수에 전달

    return (
      <TooltipContainer>
        {formattedText.split('\n').map((line, index) => (
          // 줄의 내용과 인덱스를 결합하여 고유한 key를 생성합니다.
          <div key={`${line}-${index}`}>{line}</div>
        ))}
      </TooltipContainer>
    );
  }
  return null;
};

const Chart = ({
  title,
  subtitle,
  data,
  xAxisKey,
  yAxisKey,
  tooltipFormatter,
  period,
  onPeriodChange,
  showDropdown,
  dateFormat,
  chartHeight = '100%',
  hideYAxis = false,
  containerStyle,
}) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // 데이터는 상위 컴포넌트로부터 필터링된 상태로 전달됨을 가정
    setChartData(data);
  }, [data, period]); // period 의존성 추가

  const renderTooltip = (props) => (
    <CustomTooltip
      active={props.active}
      payload={props.payload}
      label={props.label}
      formatter={tooltipFormatter}
    />
  );

  const formatDate = (tickItem) => {
    const date = new Date(tickItem);
    const day = `${date.getDate()}일`;
    const monthDay = `${date.getMonth() + 1}.${date.getDate()}`;

    switch (dateFormat) {
      case 'DD':
        return day;
      case 'MM.DD':
        return monthDay;
      default:
        return tickItem; // 기본적으로는 전달받은 형식을 그대로 사용
    }
  };

  const hasSecondLine =
    data[0] && Object.prototype.hasOwnProperty.call(data[0], 'value2');

  return (
    <ChartContainer style={containerStyle}>
      <Frame>
        <FrameHeader>
          <TitleWrapper>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
          </TitleWrapper>
          {showDropdown && (
            <div style={{ marginLeft: 'auto' }}>
              <DropdownButton
                options={['최근 1주', '최근 30일', '최근 60일', '최근 6개월']}
                initialOption={period}
                onOptionChange={(newPeriod) => onPeriodChange(newPeriod)}
              />
            </div>
          )}
        </FrameHeader>
        <FrameContent>
          <ResponsiveContainer width="100%" height={chartHeight}>
            <LineChart
              data={chartData}
              margin={{ top: 10, right: 20, left: -20, bottom: -10 }}
            >
              <XAxis
                dataKey={xAxisKey}
                tick={{ fontSize: 12 }}
                tickFormatter={formatDate}
              />
              <YAxis
                hide={hideYAxis}
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
              />
              <Tooltip content={renderTooltip} cursor={false} />
              <CartesianGrid
                strokeDasharray="3 3"
                horizontal
                vertical={false}
              />
              <Line
                type="monotone"
                dataKey={yAxisKey}
                stroke="#412CAB"
                strokeWidth={3}
                dot={false}
                activeDot={<CustomDot />}
              />
              {hasSecondLine && (
                <Line
                  type="monotone"
                  dataKey="value2"
                  stroke="#00CA80"
                  strokeWidth={3}
                  dot={false}
                  activeDot={<CustomDot />}
                />
              )}
            </LineChart>
          </ResponsiveContainer>
        </FrameContent>
      </Frame>
    </ChartContainer>
  );
};

export default Chart;
