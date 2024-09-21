import React from "react";
import styled from "styled-components";

export const SurveyObjective = () => {
  return (
    <Container>
      <Title>조사 목표</Title>
      <Input placeholder="조사 목표를 작성해주세요." />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 800;
  color: #06070c;
  margin-left: 100px;
`;

const Input = styled.input`
  width: 800px;
  height: 80px;
  margin-left: 80px;
  background-color: #fafafa;
  border: none;
  border-radius: 24px;
  padding-top: 10px;
  padding-left: 30px;
  &::placeholder {
    font-size: 25px;
    font-weight: 600;
    color: #c5c5c5;
    text-align: flex-start;
  }
`;
