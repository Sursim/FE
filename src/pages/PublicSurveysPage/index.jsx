import React from "react";
import styled from "styled-components";
import { Header } from "../../components/features/Layout/Header";
import { Footer } from "../../components/features/Layout/Footer";
import { PublicSurveysList } from "../../components/features/PublicSurveysPage/PublicSurveysList";

export default function PublicSurveysPage() {
  return (
    <Container>
      <Header />
      <Title>공개된 설문</Title>
      <PublicSurveysList />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 800;
  color: #06070c;
  margin-top: 100px;
  margin-left: 200px;
`;
