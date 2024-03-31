// StatsComponent.jsx
import React from 'react';
import DropdownButton from '../DropDown/index';
import {
  StatsContainer,
  StatsHeader,
  StatsTitle,
  StatsDescription,
  StatsItemsContainer,
  StatsItemContainer,
  StatsItem,
  StatsLabel,
  StatsCount,
  StatsChange,
  ChangeIndicator,
  ChangeValue,
  StatsItemSkeleton,
} from './styles';

const StatsComponent = ({
  title,
  description,
  data,
  isLoading,
  timeRangeOptions,
  selectedTimeRange,
  onTimeRangeChange,
}) => {
  return (
    <StatsContainer>
      <StatsHeader>
        <div>
          <StatsTitle>{title}</StatsTitle>
          <StatsDescription>{description}</StatsDescription>
        </div>
        <DropdownButton
          options={timeRangeOptions}
          initialOption={selectedTimeRange}
          onOptionChange={onTimeRangeChange}
        />
      </StatsHeader>
      <StatsItemsContainer>
        {isLoading ? (
          <>
            <StatsItemSkeleton />
            <StatsItemSkeleton />
            <StatsItemSkeleton />
          </>
        ) : (
          data.map((item) => (
            <StatsItemContainer key={item.label}>
              <StatsItem>
                <StatsLabel>{item.label}</StatsLabel>
                <StatsCount>{item.count}</StatsCount>
                <StatsChange>
                  <ChangeIndicator $isPositive={item.change.includes('+')}>
                    {item.change}
                  </ChangeIndicator>
                  <ChangeValue>{item.changeValue}</ChangeValue>
                </StatsChange>
              </StatsItem>
            </StatsItemContainer>
          ))
        )}
      </StatsItemsContainer>
    </StatsContainer>
  );
};

export default StatsComponent;
