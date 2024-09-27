import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import point from "../../../assets/images/point.png";

const SurveyData = [
  {
    id: 1,
    title: "가짜 뉴스 인식 조사",
    target: "20~30대",
    points: 500,
    duration: "24/04/23~24/04/30",
  },
  {
    id: 2,
    title: "온라인 쇼핑 이용 실태 조사",
    target: "20~40대",
    points: 700,
    duration: "24/05/01 ~ 24/05/07",
  },
  {
    id: 3,
    title: "게임 이용 행태 조사",
    target: "10~25대",
    points: 600,
    duration: "24/05/08 ~ 24/05/15",
  },
  {
    id: 4,
    title: "소셜 미디어 사용 조사",
    target: "15~35대",
    points: 400,
    duration: "24/05/16 ~ 24/05/23",
  },
  {
    id: 5,
    title: "전통 시장 이용 경험 조사",
    target: "30~50대",
    points: 300,
    duration: "24/05/24 ~ 24/05/31",
  },
  {
    id: 6,
    title: "헬스케어 앱 사용 조사",
    target: "20~40대",
    points: 800,
    duration: "24/06/01 ~ 24/06/07",
  },
  {
    id: 7,
    title: "네이버 웹툰 사용자 조사",
    target: "10~30대",
    points: 500,
    duration: "24/04/23~24/04/30",
  },
];

const itemsPerPage = 6;

export const SurveyList = () => {
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
              <SurveyTitle>{survey.title}</SurveyTitle>
              <TargetContainer>
                <TargetText>조사 대상:</TargetText>
                <Target>{survey.target}</Target>
              </TargetContainer>
              <PointContainer>
                <PointText>리워드:</PointText>
                <PointImage src={point} alt="포인트" />
                <Points>{survey.points}</Points>
              </PointContainer>
              <Underline />
              <Duration>{survey.duration}</Duration>
              <ParticipateButton onClick={() => navigate("/participateSurvey")}>
                참여하기
              </ParticipateButton>
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
`;

const SurveyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 380px);
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
  width: 350px;
  height: 250px;
  border-radius: 25px;
  background-color: #ffffff;
  border: 0.4px solid #ccc;
  box-shadow: 0px 0px 2px 0px #00000040;
  display: flex;
  flex-direction: column;
`;

const SurveyTitle = styled.h2`
  font-size: 25px;
  font-weight: 700;
  color: #000000;
  margin-left: 30px;
  margin-bottom: -3px;
  margin-top: 30px;
`;

const TargetContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 30px;
`;

const TargetText = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #000000;
`;

const Target = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #000000;
  margin-left: 5px;
`;

const PointContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-left: 30px;
  margin-top: -25px;
`;

const PointText = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #000000;
`;

const PointImage = styled.img`
  width: 20px;
  height: 20px;
  margin-top: 18px;
`;

const Points = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #06070c;
  margin-top: 18px;
`;

const Underline = styled.div`
  width: 83%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 30px;
`;

const Duration = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: #000000;
  margin-left: 30px;
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

const ParticipateButton = styled.button`
  width: 110px;
  height: 38px;
  border-radius: 12px;
  background-color: #019a13;
  margin-top: -10px;
  margin-left: 210px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 19px;
  font-weight: 700;
  color: #ffffff;
`;
