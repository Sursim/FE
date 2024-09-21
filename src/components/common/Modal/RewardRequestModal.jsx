import React from "react";
import styled from "styled-components";
import clearbtn from "../../../assets/images/buttons/clearbtn.png";
import point from "../../../assets/images/point.png";

export const RewardRequestModal = ({ isOpen, onClose, reward }) => {
  if (!isOpen) return null;

  const rewardPoints = reward ? reward.points : 0;
  const rewardImage = reward
    ? reward.image
    : "../../../assets/images/starbucks.png";

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalButton onClick={onClose}>
          <ButtonImage src={clearbtn} alt="clearbtn" />
        </ModalButton>
        <ModalTitleContainer>
          <ModalPoint>{rewardPoints}</ModalPoint>
          <PointImage src={point} alt="포인트" />
          <ModalTitle>가 차감됩니다.</ModalTitle>
        </ModalTitleContainer>
        <ModalSubtitle>교환하시겠습니까?</ModalSubtitle>
        <RewardImage src={rewardImage} alt="리워드 이미지" />
        <ModalButtonContainer>
          <CancelButton onClick={onClose}>
            <CancelText>취소하기</CancelText>
          </CancelButton>
          <ExchangeButton>
            <ExchangeText>교환하기</ExchangeText>
          </ExchangeButton>
        </ModalButtonContainer>
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
  height: 380px;
  max-width: 90%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalButton = styled.button`
  margin-left: 350px;
  margin-top: 5px;
  border: none;
  cursor: pointer;
  background-color: #ffffff;
`;

const ButtonImage = styled.img`
  width: 30px;
  height: 30px;
`;

const ModalTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3px;
`;

const ModalPoint = styled.p`
  font-size: 25px;
  font-weight: 400;
  color: #06070c;
  margin-top: 25px;
`;

const PointImage = styled.img`
  width: 25px;
  height: 25px;
  margin-top: 27px;
`;

const ModalTitle = styled.p`
  font-size: 25px;
  font-weight: 700;
  color: #06070c;
`;

const ModalSubtitle = styled.p`
  font-size: 25px;
  font-weight: 700;
  color: #019a13;
  margin-top: -20px;
`;

const RewardImage = styled.img`
  width: 250px;
  height: 150px;
  margin-top: -10px;
`;

const ModalButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  gap: 5px;
`;

const ExchangeButton = styled.button`
  margin-left: 10px;
  width: 150px;
  height: 40px;
  border-radius: 10px;
  background-color: #019a13;
  border: none;
  cursor: pointer;
`;

const ExchangeText = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: white;
  margin-top: 10px;
`;

const CancelButton = styled.button`
  margin-left: 10px;
  width: 150px;
  height: 40px;
  border-radius: 10px;
  background-color: #eeeeee;
  border: none;
  cursor: pointer;
`;

const CancelText = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #c5c5c5;
  margin-top: 10px;
`;
