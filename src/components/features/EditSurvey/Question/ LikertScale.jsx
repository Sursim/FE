import React, { useState } from "react";
import styled from "styled-components";

export const LikertScale = ({ question = { options: [] }, setQuestions }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleQuestionChange = (e) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === question.id ? { ...q, question: e.target.value } : q
      )
    );
  };

  const handleButtonClick = (value) => {
    setSelectedOption(value);
  };

  return (
    <Container>
      <Input
        type="text"
        placeholder="질문을 작성해주세요."
        value={question.question}
        onChange={handleQuestionChange}
      />
      <MainContainer>
        {[
          "전혀 그렇지 않다",
          "그렇지 않다",
          "보통이다",
          "그렇다",
          "매우 그렇다",
        ].map((label, index) => (
          <ButtonContainer key={index} onClick={() => handleButtonClick(label)}>
            <CircleButton selected={selectedOption === label} />
            <Text>{label}</Text>
          </ButtonContainer>
        ))}
      </MainContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 80px;
  width: 830px;
  height: 270px;
  border-radius: 30px;
  border: 1px solid #cecece;
  background-color: #ffffff;
`;

const Input = styled.input`
  width: 700px;
  margin-bottom: 20px;
  margin-top: 30px;
  margin-left: 60px;
  border: none;
  border-bottom: 1px solid #cecece;
  padding: 10px 0;
  &:focus {
    outline: none;
    border-bottom: 1px solid #019a13;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin-top: 50px;
  margin-left: 80px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  width: 100px;
`;

const CircleButton = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid ${({ selected }) => (selected ? "#019a13" : "#383838")};
  background-color: ${({ selected }) => (selected ? "#019a13" : "transparent")};
`;

const Text = styled.span`
  margin-top: 8px;
  font-size: 15px;
  font-weight: 700;
  color: #383838;
`;
