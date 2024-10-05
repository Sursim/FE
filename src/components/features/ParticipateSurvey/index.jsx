import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Header } from "../Layout/Header";
import { Footer } from "../Layout/Footer";
import rewardbtn from "../../../assets/images/buttons/rewardbtn.png";
import { RewardInfoModal } from "../../common/Modal/RewardInfoModal";
import { Survey } from "./Survey";

export const ParticipateSurvey = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleRewardButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    alert("설문 제출이 완료되었습니다.");
    navigate("/home");
  };

  return (
    <Container>
      <Header />
      <UpContainer>
        <BoxContainer>
          <Title>가짜 뉴스 인식 조사</Title>
          <SubtitleContainer>
            <Subtitle>조사 목표:</Subtitle>
            <SubtitleText>가짜 뉴스에 대한 인식 및 대응 방법 파악</SubtitleText>
          </SubtitleContainer>
          <SubtitleContainer>
            <Subtitle>설문 조사 대상:</Subtitle>
            <SubtitleText>남성, 만 20세 ~ 만 30세</SubtitleText>
          </SubtitleContainer>
        </BoxContainer>
        <RewardButton onClick={handleRewardButtonClick}>
          <DownImage src={rewardbtn} alt="reward" />
        </RewardButton>
        <Survey />
        <SubmitButton onClick={handleSubmit}>설문 제출하기</SubmitButton>
      </UpContainer>
      <Footer />
      {isModalOpen && (
        <RewardInfoModal isOpen={isModalOpen} onClose={handleModalClose} />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const UpContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 1100px;
  height: 1400px;
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  margin-bottom: 30px;
  margin-left: 200px;
  background-color: #ffffff;
  border: 2px solid rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 35px;
  font-weight: 800;
  color: #06070c;
  margin-left: 50px;
  margin-top: 70px;
  text-decoration: none;
  position: relative;

  &::after {
    content: "";
    display: block;
    height: 1px;
    background-color: #06070c;
    position: absolute;
    left: 0;
    right: 0;
    width: 25%;
    margin-left: 0px;
  }
`;

const SubtitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-left: 50px;
  margin-bottom: -40px;
`;

const Subtitle = styled.p`
  font-size: 23px;
  font-weight: 700;
  color: #000000;
`;

const SubtitleText = styled.p`
  font-size: 23px;
  font-weight: 400;
  color: #000000;
`;

const RewardButton = styled.button`
  margin-left: 870px;
  margin-top: -140px;
  cursor: pointer;
  border: none;
  background-color: #ffffff;
  width: 130px;
  height: 130px;
`;

const DownImage = styled.img`
  width: 130px;
  height: 130px;
`;

const SubmitButton = styled.button`
  width: 270px;
  height: 70px;
  border: none;
  border-radius: 12px;
  padding: 10px 0;
  background-color: #019a13;
  margin-left: 740px;
  margin-top: 40px;
  cursor: pointer;
  font-size: 30px;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
`;
