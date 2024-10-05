import React, { useState } from "react";
import styled from "styled-components";

export const Survey = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleButtonClick = (value) => {
    setSelectedOption(value);
  };

  return (
    <Container>
      <QuestionContainer>
        <Title>질문 1</Title>
        <Box>
          <QuestionTitle>
            당신이 최근에 본 가짜 뉴스는 어떤 내용입니까?
          </QuestionTitle>
          <Underline />
          <Input />
        </Box>
      </QuestionContainer>
      <QuestionContainer>
        <Title>질문 2</Title>
        <Box>
          <QuestionTitle>당신은 가짜 뉴스를 믿습니까?</QuestionTitle>
          <Underline />
          <MainContainer>
            {[
              "전혀 그렇지 않다",
              "그렇지 않다",
              "보통이다",
              "그렇다",
              "매우 그렇다",
            ].map((label, index) => (
              <ButtonContainer
                key={index}
                onClick={() => handleButtonClick(label)}
              >
                <CircleButton selected={selectedOption === label} />
                <Text2>{label}</Text2>
              </ButtonContainer>
            ))}
          </MainContainer>
        </Box>
      </QuestionContainer>
      <QuestionContainer>
        <Title>질문 3</Title>
        <Box2>
          <QuestionTitle>
            경품 추첨을 위해 전화번호를 작성해주세요.
          </QuestionTitle>
          <Underline />
          <InputContainer>
            <Input2 />
            <Text>-</Text>
            <Input3 />
            <Text>-</Text>
            <Input3 />
          </InputContainer>
        </Box2>
      </QuestionContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const Title = styled.h2`
  font-size: 27px;
  font-weight: 800;
  color: #06070c;
  margin-left: 80px;
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const Box = styled.div`
  width: 960px;
  height: 260px;
  margin-left: 50px;
  border-radius: 30px;
  border: none;
  background-color: #fafafa;
`;

const Box2 = styled.div`
  width: 960px;
  height: 200px;
  margin-left: 50px;
  border-radius: 30px;
  border: none;
  background-color: #fafafa;
`;

const QuestionTitle = styled.p`
  font-size: 24px;
  font-weight: 800;
  color: #06070c;
  margin-left: 30px;
`;

const Underline = styled.hr`
  width: 88%;
  border: none;
  border-top: 1px solid #cecece;
  border-color: #cecece;
  margin-left: 30px;
  margin-top: -20px;
`;

const Input = styled.input`
  width: 845px;
  height: 122px;
  border: none;
  border-radius: 17px;
  background-color: #f2f2f2;
  margin-left: 30px;
  margin-top: 20px;
  &:focus {
    outline: none;
    border: 1px solid #019a13;
  }
`;

const Input2 = styled.input`
  width: 132px;
  height: 50px;
  border: none;
  border-radius: 17px;
  background-color: #f2f2f2;
  &:focus {
    outline: none;
    border: 1px solid #019a13;
  }
`;

const Input3 = styled.input`
  width: 176px;
  height: 50px;
  border: none;
  border-radius: 17px;
  background-color: #f2f2f2;
  &:focus {
    outline: none;
    border: 1px solid #019a13;
  }
`;

const Text = styled.p`
  font-size: 28px;
  font-weight: 700;
  color: #383838;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 30px;
  margin-top: 20px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin-top: 60px;
  margin-left: 180px;
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

const Text2 = styled.span`
  margin-top: 8px;
  font-size: 15px;
  font-weight: 700;
  color: #383838;
`;
