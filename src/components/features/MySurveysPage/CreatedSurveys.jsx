import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SurveyData = [
  {
    id: 1,
    title: "네이버 웹툰 사용자 조사",
    date: "24/04/23",
    state: "마감",
  },
  {
    id: 2,
    title: "온라인 쇼핑 이용 실태 조사",
    date: "24/05/3",
    state: "마감",
  },
  {
    id: 3,
    title: "게임 이용 행태 조사",
    date: "24/06/2",
    state: "진행중",
  },
  {
    id: 4,
    title: "소셜 미디어 사용 조사",
    date: "24/02/24",
    state: "마감",
  },
  {
    id: 5,
    title: "전통 시장 이용 경험 조사",
    date: "24/03/13",
    state: "마감",
  },
  {
    id: 6,
    title: "헬스케어 앱 사용 조사",
    date: "24/07/23",
    state: "진행중",
  },
  {
    id: 7,
    title: "네이버 웹툰 사용자 조사",
    date: "24/05/2",
    state: "진행중",
  },
];

const itemsPerPage = 4;

export const CreatedSurveys = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(SurveyData.length / itemsPerPage);
  const navigate = useNavigate();

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const displayedRewards = SurveyData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <Container>
      <SurveyGrid>
        {displayedRewards.map((survey) => (
          <SurveyCard key={survey.id}>
            <CardContainer>
              <TitleContainer>
                <SurveyTitle>{survey.title}</SurveyTitle>
                <ResponseButton onClick={() => navigate("/mySurveysPage")}>
                  응답보기
                </ResponseButton>
              </TitleContainer>
              <Underline />
              <DateContainer>
                <DateText>생성 날짜:</DateText>
                <Date>{survey.date}</Date>
              </DateContainer>
              <StateContainer>
                <StateText>상태:</StateText>
                <State state={survey.state}>{survey.state}</State>
              </StateContainer>
            </CardContainer>
          </SurveyCard>
        ))}
      </SurveyGrid>
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
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -10px;
`;

const SurveyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 570px);
  justify-content: center;
  grid-row-gap: 30px;
  margin-left: 50px;
`;

const SurveyCard = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardContainer = styled.div`
  display: flex;
  width: 530px;
  height: 150px;
  border-radius: 25px;
  background-color: #ffffff;
  border: 0.4px solid #ccc;
  box-shadow: 0px 0px 2px 0px #00000040;
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SurveyTitle = styled.h2`
  font-size: 23px;
  font-weight: 700;
  color: #000000;
  margin-left: 30px;
  margin-bottom: -3px;
  margin-top: 20px;
`;

const ResponseButton = styled.button`
  width: 100px;
  height: 35px;
  border-radius: 40px;
  background-color: #019a13;
  margin-top: 20px;
  margin-right: 60px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 17px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
`;

const Underline = styled.div`
  width: 83%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 30px;
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 30px;
`;

const DateText = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #000000;
`;

const Date = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #000000;
  margin-left: 5px;
`;

const StateContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-left: 30px;
  margin-top: -30px;
`;

const StateText = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #000000;
`;

const State = styled.p`
  color: ${(props) => (props.state === "진행중" ? "purple" : "red")};
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
