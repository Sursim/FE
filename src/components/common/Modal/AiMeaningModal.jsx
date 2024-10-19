import React from "react";
import styled from "styled-components";
import clearbtn from "../../../assets/images/buttons/clearbtn.png";

export const AiMeaningModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalButton onClick={onClose}>
          <ButtonImage src={clearbtn} alt="clearbtn" />
        </ModalButton>
        <ModalText>
          의미 분별 척도의 경우 상반된 두가지의 응답 중 하나를 선택하는
          것입니다.
          <br />
          ‘거의’,’글쎄’의 경우보다 ‘그렇다’, ‘아니다’가 적절합니다.
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
  font-size: 17px;
  font-weight: 400;
  color: #383838;
  text-align: center;
`;
