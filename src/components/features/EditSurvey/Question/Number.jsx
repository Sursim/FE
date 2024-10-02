import React from "react";
import styled from "styled-components";

export const Number = ({ question = { options: [] }, setQuestions }) => {
  const handleQuestionChange = (e) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === question.id ? { ...q, question: e.target.value } : q
      )
    );
  };

  return (
    <Container>
      <Input
        type="text"
        placeholder="질문을 작성해주세요."
        value={question.question}
        onChange={handleQuestionChange}
      />
      <AnswerContainer>
        <InputAnswer text="text" />
        <Text>-</Text>
        <InputAnswer2 text="text" />
        <Text>-</Text>
        <InputAnswer2 text="text" />
      </AnswerContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 80px;
  width: 830px;
  height: 200px;
  border-radius: 30px;
  border: 1px solid #cecece;
  background-color: #ffffff;
`;

const Input = styled.input`
  width: 700px;
  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: 30px;
  border: none;
  border-bottom: 1px solid #cecece;
  padding: 10px 0;
  &:focus {
    outline: none;
    border-bottom: 1px solid #019a13;
  }
`;

const InputAnswer = styled.input`
  width: 80px;
  height: 30px;
  margin-left: 30px;
  background-color: #fafafa;
  border: none;
  border-radius: 12px;
  padding-top: 10px;
  padding-left: 30px;
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

const InputAnswer2 = styled.input`
  width: 120px;
  height: 30px;
  margin-left: 30px;
  background-color: #fafafa;
  border: none;
  border-radius: 12px;
  padding-top: 10px;
  padding-left: 30px;
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

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Text = styled.p`
  font-size: 28px;
  font-weight: 700;
  color: #383838;
  margin-left: 20px;
  margin-right: -5px;
  margin-top: 5px;
`;
