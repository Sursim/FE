import React from "react";
import styled from "styled-components";
import { Header } from "../../components/features/Layout/Header";
import { HomeBanner } from "../../components/features/HomePage/HomeBanner";
import { SurveyList } from "../../components/features/HomePage/SurveyList";
import { Footer } from "../../components/features/Layout/Footer";

export default function HomePage() {
  return (
    <Container>
      <Header />
      <HomeBanner />
      <Title>진행중인 서베이</Title>
      <SurveyList />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 800;
  color: #06070c;
  margin-top: 81px;
  margin-left: 200px;
`;
