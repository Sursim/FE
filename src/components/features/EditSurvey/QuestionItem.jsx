import React, { useState, useRef } from "react";
import styled from "styled-components";
import AI from "../../../assets/images/buttons/ai.png";
import checkbox from "../../../assets/images/checkbox/checkbox.png";
import circle from "../../../assets/images/circle.png";
import addbtn from "../../../assets/images/buttons/addbtn.png";
import { CheckboxModal } from "../../common/Modal/CheckboxModal";

export const QuestionItem = ({ question, setQuestions }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [options, setOptions] = useState([...question.options]);
  const checkboxContainerRef = useRef(null);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleQuestionChange = (e) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === question.id ? { ...q, question: e.target.value } : q
      )
    );
  };

  const handleAddOption = () => {
    const newOption = `응답 ${options.length + 1}`;
    setOptions((prev) => [...prev, newOption]);
  };

  return (
    <Container>
      <TitleContainer>
        <Title>질문 {question.id}</Title>
        <AIButton>
          <AIImage src={AI} alt="AI봇" />
        </AIButton>
        <CheckboxContainer ref={checkboxContainerRef} onClick={handleOpenModal}>
          <CheckboxText>체크박스</CheckboxText>
          <CheckboxImage src={checkbox} alt="체크박스 이미지" />
        </CheckboxContainer>
      </TitleContainer>
      <DescriptionContainer height={options.length * 50 + 150}>
        <Input
          type="text"
          placeholder="질문을 작성해주세요."
          value={question.question}
          onChange={handleQuestionChange}
        />
        {options.map((option, index) => (
          <OptionContainer key={index}>
            <OptionImage src={circle} alt="응답" />
            <OptionText>{option}</OptionText>
          </OptionContainer>
        ))}
        <AddOptionButton onClick={handleAddOption}>
          <AddButtonImage src={addbtn} alt="응답 추가" />
        </AddOptionButton>
      </DescriptionContainer>

      {isModalOpen && (
        <CheckboxModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          anchorRef={checkboxContainerRef}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 100px;
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: 800;
  color: #000000;
`;

const AIButton = styled.button`
  margin-left: 480px;
  margin-top: -5px;
  border: none;
  background-color: #ffffff;
  cursor: pointer;
`;

const AIImage = styled.img`
  width: 96px;
  height: 30px;
`;

const CheckboxContainer = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  cursor: pointer;
`;

const CheckboxText = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #000000;
`;

const CheckboxImage = styled.img`
  width: 21px;
  height: 24px;
  margin-top: 20px;
`;

const DescriptionContainer = styled.div`
  width: 830px;
  height: ${(props) => props.height}px;
  margin-top: -10px;
  margin-left: 80px;
  background-color: #fafafa;
  border: none;
  border-radius: 24px;
`;

const Input = styled.input`
  width: 800px;
  height: 10px;
  border: none;
  border-radius: 24px;
  background-color: #fafafa;
  padding-top: 50px;
  padding-left: 30px;
  margin-bottom: 20px;
  &::placeholder {
    font-size: 25px;
    font-weight: 600;
    color: #c5c5c5;
    text-align: flex-start;
  }
  &:focus {
    outline: none;
    border: 1px solid #019a13;
  }
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 30px;
  gap: 10px;
`;

const OptionImage = styled.img`
  width: 30px;
  height: 30px;
`;

const OptionText = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #c5c5c5;
  margin-top: 0px;
`;

const AddOptionButton = styled.button`
  margin-top: 10px;
  margin-left: 25px;
  border: none;
  background-color: #fafafa;
  cursor: pointer;
`;

const AddButtonImage = styled.img`
  width: 30px;
  height: 30px;
`;
