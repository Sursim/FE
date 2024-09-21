import React from "react";
import styled from "styled-components";
import { QuestionItem } from "./QuestionItem";

export const QuestionList = ({ questions, setQuestions }) => {
  return (
    <Container>
      {questions.map((question) => (
        <QuestionItem
          key={question.id}
          question={question}
          setQuestions={setQuestions}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
