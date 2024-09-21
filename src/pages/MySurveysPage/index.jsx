import React from "react";
import styled from "styled-components";
import { Header } from "../../components/features/Layout/Header";
import { Footer } from "../../components/features/Layout/Footer";
import { CreatedSurveys } from "../../components/features/MySurveysPage/CreatedSurveys";
import { ParticipatedSurveys } from "../../components/features/MySurveysPage/ParticipatedSurveys";

export default function MySurveysPage() {
  return (
    <Container>
      <Header />
      <Title1>내가 만든 설문</Title1>
      <CreatedSurveys />
      <Title2>내가 참여한 설문</Title2>
      <ParticipatedSurveys />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title1 = styled.h2`
  font-size: 40px;
  font-weight: 800;
  color: #06070c;
  margin-top: 130px;
  margin-left: 200px;
`;

const Title2 = styled.h2`
  font-size: 40px;
  font-weight: 800;
  color: #06070c;
  margin-top: -30px;
  margin-left: 200px;
`;
