import React from "react";
import styled from "styled-components";
import sursim from "../../../assets/images/sursim.png";
import banner from "../../../assets/images/logos/BannerLogo.png";
import { useNavigate } from "react-router-dom";

export const HomeBanner = () => {
  const navigate = useNavigate();

  const handleSetClick = () => {
    navigate("/editSurvey");
  };

  return (
    <Container>
      <LeftWrapper>
        <Logo src={sursim} alt="sursim 로고" />
        <Title>모든 설문을 쉽고 간편하게</Title>
        <Button onClick={handleSetClick}>설문조사 만들기</Button>
      </LeftWrapper>
      <RightWrapper>
        <BannerImage src={banner} alt="배너 이미지" />
      </RightWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 550px;
  background-color: #f8f8f8;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 200px;
`;

const Logo = styled.img`
  width: 400px;
  height: 100px;
  margin-top: 100px;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 400;
  color: #06070c;
  margin-top: 20px;
`;

const Button = styled.button`
  width: 200px;
  height: 50px;
  background-color: #06070c;
  color: #f8f8f8;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  margin-top: 24px;
`;

const RightWrapper = styled.div`
  margin-top: 91px;
  margin-left: 87px;
`;

const BannerImage = styled.img`
  width: 600px;
  height: 350px;
`;
