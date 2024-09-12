import React from "react";
import styled from "styled-components";
import starbucksImage from "../../assets/images/starbucks.png";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  width: 500px;
  max-width: 90%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalTitle = styled.h2`
  margin-bottom: 10px;
`;

const ModalText = styled.p`
  margin-top: 0;
`;

const ModalButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
`;

const ModalImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const ModalImage = styled.img`
  width: auto;
  height: auto;
`;

export const RewardInfoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalButton onClick={onClose}>X</ModalButton>
        <ModalTitle>스타벅스 아메리카노 커피 쿠폰</ModalTitle>
        <ModalText>100명 랜덤 추첨</ModalText>
        <ModalImageContainer>
          <ModalImage src={starbucksImage} alt="스타벅스 이미지" />
        </ModalImageContainer>
      </ModalContent>
    </ModalOverlay>
  );
};
