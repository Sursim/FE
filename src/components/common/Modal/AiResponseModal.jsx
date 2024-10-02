import React from "react";
import styled from "styled-components";

export const AiResponseModal = ({ response, onClose }) => {
  return (
    <ModalContainer>
      <ModalContent>{response}</ModalContent>
      <ModalButton onClick={onClose}>x</ModalButton>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  width: 300px;
`;

const ModalContent = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: #383838;
  margin: 10px 0;
`;

const ModalButton = styled.button`
  background-color: #019a13;
  color: #c0c0c0;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
`;
