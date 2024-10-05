import React from "react";
import styled from "styled-components";

export const ShortAnswer = ({ question = { options: [] }, setQuestions }) => {
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
      <InputAnswer text="text" />
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
  width: 670px;
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
