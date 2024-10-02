import React, { useState } from "react";
import styled from "styled-components";

export const MeaningDistinctionScale = ({
  question = { options: [] },
  setQuestions,
}) => {
  const handleQuestionChange = (e) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === question.id ? { ...q, question: e.target.value } : q
      )
    );
  };

  const [selectedOption, setSelectedOption] = useState("");

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
        <TextInput placeholder="텍스트1" />
        {["", "", "", "", ""].map((_, index) => (
          <ButtonContainer key={index} onClick={() => handleButtonClick(index)}>
            <CircleButton selected={selectedOption === index} />
          </ButtonContainer>
        ))}
        <TextInput2 placeholder="텍스트2" />
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
  margin-left: 30px;
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
  gap: 50px;
  margin-top: 50px;
`;

const TextInput = styled.input`
  width: 100px;
  padding: 5px;
  margin-right: 10px;
  margin-left: 30px;
  border: none;
  border-bottom: 1px solid #cecece;
  text-align: center;
  &:focus {
    outline: none;
    border-bottom: 1px solid #019a13;
  }
`;

const TextInput2 = styled.input`
  width: 100px;
  padding: 5px;
  margin-left: 10px;
  border: none;
  border-bottom: 1px solid #cecece;
  text-align: center;
  &:focus {
    outline: none;
    border-bottom: 1px solid #019a13;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const CircleButton = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid ${({ selected }) => (selected ? "#019a13" : "#383838")};
  background-color: ${({ selected }) => (selected ? "#019a13" : "transparent")};
`;
