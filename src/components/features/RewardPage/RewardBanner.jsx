import React from "react";
import styled from "styled-components";
import RewardLogo from "../../../assets/images/logos/RewardLogo.png";

export const RewardBanner = () => {
  return (
    <Container>
      <LeftWrapper>
        <Title>이제는 설테크다!</Title>
        <Text>
          설문조사 참여로 적립한 리워드를 <br />
          인기 아이템들로 교환하세요.
        </Text>
      </LeftWrapper>
      <RightWrapper>
        <BannerImage src={RewardLogo} alt="배너 이미지" />
      </RightWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 500px;
  background-color: #f8f8f8;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 200px;
  gap: 5;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 800;
  color: #06070c;
  margin-top: 50px;
`;

const Text = styled.span`
  font-size: 30px;
  font-weight: 400;
  color: #06070c;
`;

const RightWrapper = styled.div`
  margin-top: 91px;
  margin-left: 150px;
`;

const BannerImage = styled.img`
  width: 480px;
  height: 330px;
`;
