import React from "react";
import styled from "styled-components";
import clearbtn from "../../../assets/images/buttons/clearbtn.png";

export const AiLikertModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalButton onClick={onClose}>
          <ButtonImage src={clearbtn} alt="clearbtn" />
        </ModalButton>
        <ModalText>
          리커트 척도는 특정 질문에 대해 사용자가 동의하는 정도를 선택하는
          방식입니다.
          <br />
          일반적으로 1부터 5까지의 점수로 표현되며, '매우 그렇다'에서 '전혀
          그렇지 않다'까지의 다양한 응답 옵션이 포함됩니다.
        </ModalText>
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
  background-color: none;
  border: 8px #00000026;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  margin-top: 10px;
  margin-left: -50px;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 8px 0px #00000026;
  width: 500px;
  height: 100px;
  max-width: 90%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ModalButton = styled.button`
  margin-left: 480px;
  margin-top: -5px;
  border: none;
  cursor: pointer;
  background-color: #ffffff;
`;

const ButtonImage = styled.img`
  width: 15px;
  height: 15px;
`;

const ModalText = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: #383838;
  text-align: center;
`;
