import React, { useState } from "react";
import styled from "styled-components";

export const RespondentModal = ({ isOpen, onClose }) => {
  const [selected, setSelected] = useState([]);
  if (!isOpen) return null;

  const options = [
    "무관",
    "서울 특별시",
    "부산 광역시",
    "대구 광역시",
    "인천 광역시",
    "광주 광역시",
    "대전 광역시",
    "울산 광역시",
    "세종 특별 자치시",
    "경기도",
    "강원도",
    "충청북도",
    "충청남도",
    "전라북도",
    "전라남도",
    "경상북도",
    "경상남도",
    "제주 특별 자치도",
  ];

  const toggleSelect = (option) => {
    if (selected.includes(option)) {
      setSelected(selected.filter((item) => item !== option));
    } else {
      setSelected([...selected, option]);
    }
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer>
        <OptionList>
          {options.map((option) => (
            <Option
              key={option}
              onClick={() => toggleSelect(option)}
              selected={selected.includes(option)}
            >
              {option}
            </Option>
          ))}
        </OptionList>
      </ModalContainer>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0);
`;

const ModalContainer = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-top: -30px;
  margin-left: 850px;
  width: 350px;
  height: 450px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const OptionList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin: 20px 0;
`;

const Option = styled.div`
  padding: 10px;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? "#B3E1B8" : "#FFFFFF")};
`;
