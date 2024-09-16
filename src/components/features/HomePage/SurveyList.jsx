import React from "react";
import styled from "styled-components";
import point from "../../../assets/images/point.png";

export const SurveyList = () => {
  return (
    <Container>
      <Title>네이버 웹툰 사용자 조사</Title>
      <DescriptionContainer>
        <Subtitle>조사 대상: </Subtitle>
        <Description>10~30대</Description>
      </DescriptionContainer>
      <DescriptionContainer>
        <Subtitle>리워드: </Subtitle>
        <Image src={point} alt="포인트" />
        <Description>500</Description>
      </DescriptionContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 413px;
  height: 294px;
  border-radius: 30px;
  background-color: #ffffff;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #000000;
  margin-top: 36px;
  margin-left: 36px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Subtitle = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #000000;
`;

const Image = styled.img`
  width: 18px;
  height: 18px;
`;

const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #000000;
`;
