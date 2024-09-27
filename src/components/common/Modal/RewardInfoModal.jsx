import React from "react";
import styled from "styled-components";
import starbucks from "../../../assets/icons/Reward/4.png";
import clearbtn from "../../../assets/images/buttons/clearbtn.png";

export const RewardInfoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalButton onClick={onClose}>
          <ButtonImage src={clearbtn} alt="clearbtn" />
        </ModalButton>
        <ModalTitle>스타벅스 아메리카노 커피 쿠폰</ModalTitle>
        <ModalImageContainer>
          <ModalImage src={starbucks} alt="스타벅스 이미지" />
        </ModalImageContainer>
        <ModalText>100명, 랜덤 추첨</ModalText>
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  width: 100vw;
  height: 100vh;
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
  border-radius: 20px;
  width: 400px;
  height: 430px;
  max-width: 90%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
  color: #06070c;
`;

const ModalText = styled.p`
  font-size: 30px;
  font-weight: 400;
  color: #06070c;
`;

const ModalButton = styled.button`
  margin-left: 380px;
  margin-top: 5px;
  border: none;
  cursor: pointer;
  background-color: #ffffff;
`;

const ButtonImage = styled.img`
  width: 18px;
  height: 18px;
`;

const ModalImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const ModalImage = styled.img`
  width: 100px;
  height: 200px;
`;
