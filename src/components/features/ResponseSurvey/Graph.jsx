import React, { useState } from "react";
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

const data3 = [
  "주변 사람들에게 가짜 뉴스에 대해 정확한 정보 출처를 공유하려고 노력합니다.",
  "가짜 뉴스가 퍼질 때마다 그 정보를 확인하고, 잘못된 내용을 친구들에게 알려주며 공유하지 않도록 주의합니다.",
  "믿을 수 있는 출처에서만 뉴스를 소비하려고 노력합니다.",
  "큰 노력은 기울이지 않는 것 같습니다.",
  "주기적으로 언론 매체의 신뢰성에 대한 정보를 찾아봅니다.",
  "소셜 미디어에서 정보를 공유하기 전에 사실 여부를 확인합니다.",
  "언론의 보도 방식에 대해 비판적으로 분석하려고 합니다.",
  "가짜 뉴스가 의심스러운 경우, 여러 출처를 비교하여 확인합니다.",
  "가족과 친구들에게 가짜 뉴스의 위험성을 교육하려고 합니다.",
  "가짜 뉴스와 관련된 교육 자료를 찾아보고 공부합니다.",
  "SNS에서 의심스러운 콘텐츠를 발견하면 신고합니다.",
  "가짜 뉴스에 대한 기사나 영상을 공유하여 경각심을 높입니다.",
  "인기 있는 뉴스 앱에서 사실 확인 기능을 활용합니다.",
  "뉴스를 소비할 때, 출처와 작성자를 항상 확인합니다.",
  "가짜 뉴스를 피하기 위해 뉴스 소비 시간을 제한합니다.",
];

const itemsPerPage = 5;

export const Graph = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data3.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentResponses = data3.slice(startIndex, startIndex + itemsPerPage);

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

      <QuestionContainer>
        <Title>질문 3 통계</Title>
        <Box>
          <QuestionTitle>
            가짜 뉴스에 대응하기 위한 개인적인 노력이나 방법이 있다면
            무엇인가요?
          </QuestionTitle>
          <ResponseList>
            {currentResponses.map((response, index) => (
              <ResponseItem key={index}>
                <Circle />
                {response}
              </ResponseItem>
            ))}
          </ResponseList>
          <Pagination>
            {[...Array(totalPages)].map((_, index) => (
              <PageButton
                key={index}
                onClick={() => handlePageChange(index + 1)}
                active={currentPage === index + 1}
              >
                {index + 1}
              </PageButton>
            ))}
          </Pagination>
          <ResponseCount2>응답 수: 15</ResponseCount2>
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

const ResponseCount2 = styled.p`
  margin-top: -470px;
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

const ResponseList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  padding-left: 20px;
`;

const ResponseItem = styled.li`
  display: flex;
  margin-left: 30px;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 500;
  color: #06070c;
`;

const Circle = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: #000000;
  margin-top: 5px;
  margin-right: 10px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const PageButton = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  color: ${({ active }) => (active ? "#019A13" : "#C5C5C5")};
  text-decoration: ${({ active }) => (active ? "underline" : "none")};
  text-decoration-color: ${({ active }) => (active ? "#019A13" : "#C5C5C5")};
  border: none;
  cursor: pointer;
  background: none;
  font-size: 25px;
  font-weight: 500;

  &:hover {
    color: #019a13;
  }
`;
