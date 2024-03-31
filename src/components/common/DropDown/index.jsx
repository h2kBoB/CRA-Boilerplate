// DropdownButton.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { MdExpandMore } from 'react-icons/md';

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  right: 0;
  background-color: #f9f9f9;
  min-width: 180px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  padding: 8px;
  border-radius: 4px;
  border: 0.5px solid #f1f2f4;
  z-index: 1;
  ${Dropdown}:hover & {
    display: block;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  color: #262626;
  padding: 5px 8px 5px 12px;
  font-size: 14px;
  font-family: 'Pretendard';
  font-weight: 500;
  line-height: 22px;
  border: 1px solid #dddfe3;
  border-radius: 4px;
  cursor: pointer;
  min-width: 120px;
`;

const PopoverCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  padding: 10px 8px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #efefef;
  }
`;

const DropdownButton = ({ options, initialOption, onOptionChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    initialOption || options[0],
  );

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onOptionChange(option);
  };

  const handleKeyDown = (event, option) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleOptionClick(option);
    }
  };

  return (
    <Dropdown onMouseLeave={() => setIsOpen(false)}>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {selectedOption}
        <MdExpandMore size={16} color="#262626" />
      </Button>
      {isOpen && (
        <DropdownContent role="listbox">
          {options.map((option) => (
            <PopoverCell
              key={option}
              role="option"
              tabIndex={0}
              aria-selected={selectedOption === option}
              onClick={() => handleOptionClick(option)}
              onKeyDown={(event) => handleKeyDown(event, option)}
            >
              <div className="Text">{option}</div>
              {selectedOption === option && (
                <div className="Check">
                  <div className="Vector" />
                </div>
              )}
            </PopoverCell>
          ))}
        </DropdownContent>
      )}
    </Dropdown>
  );
};

export default DropdownButton;
