import React from "react";
import styled from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

const data1 = [
  { name: "전혀 그렇지 않다", value: 60 },
  { name: "그렇지 않다", value: 40 },
  { name: "보통이다", value: 20 },
  { name: "그렇다", value: 15 },
  { name: "매우 그렇다", value: 1 },
];

const data2 = [
  { name: "전혀 그렇지 않다", value: 60 },
  { name: "그렇지 않다", value: 80 },
  { name: "보통이다", value: 10 },
  { name: "그렇다", value: 15 },
  { name: "매우 그렇다", value: 8 },
];

export const Graph = () => {
  return (
    <Container>
      <QuestionContainer>
        <Title>질문 1 통계</Title>
        <Box>
          <QuestionTitle>당신은 가짜 뉴스를 보십니까?</QuestionTitle>
          <GraphContainer>
            <BarChart width={600} height={300} data={data1}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#4caf50" />
            </BarChart>
          </GraphContainer>
          <ResponseCount>응답 수: 108</ResponseCount>
        </Box>
      </QuestionContainer>

      <QuestionContainer>
        <Title>질문 2 통계</Title>
        <Box>
          <QuestionTitle>당신은 가짜 뉴스를 믿습니까?</QuestionTitle>
          <GraphContainer>
            <BarChart width={600} height={300} data={data2}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#4caf50" />
            </BarChart>
          </GraphContainer>
          <ResponseCount>응답 수: 108</ResponseCount>
        </Box>
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
  height: 460px;
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

const ResponseCount = styled.p`
  margin-top: -380px;
  margin-left: 810px;
  align-self: flex-end;
  font-size: 24px;
  font-weight: 400;
  color: #06070c;
`;

const GraphContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
