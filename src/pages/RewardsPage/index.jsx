import React from "react";
import styled from "styled-components";
import { Header } from "../../components/features/Layout/Header";
import { RewardBanner } from "../../components/features/RewardPage/RewardBanner";
import { RewardList } from "../../components/features/RewardPage/RewardList";
import { Footer } from "../../components/features/Layout/Footer";
import point from "../../assets/images/point.png";

export default function RewardsPage() {
  return (
    <Container>
      <Header />
      <RewardBanner />
      <RewardContainer>
        <Title>교환할 수 있는 아이템 목록</Title>
        <PointContainer>
          <Text>보유 리워드:</Text>
          <Point>15000</Point>
          <PointImage src={point} alt="포인트" />
        </PointContainer>
      </RewardContainer>
      <RewardList />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const RewardContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 530px;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 800;
  color: #06070c;
  margin-left: 200px;
  margin-top: 50px;
  margin-bottom: 30px;
`;

const PointContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

const Text = styled.p`
  font-size: 26px;
  font-weight: 500;
  color: #019a13;
`;

const Point = styled.p`
  font-size: 26px;
  font-weight: 400;
  color: #06070c;
  margin-left: 10px;
`;

const PointImage = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 5px;
`;
