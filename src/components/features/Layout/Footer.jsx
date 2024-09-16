import React from "react";
import styled from "styled-components";
import sursim2 from "../../../assets/images/sursim2.png";

export const Footer = () => {
  return (
    <Container>
      <LeftWrapper>
        <Logo src={sursim2} alt="sursim 로고" />
      </LeftWrapper>
      <RightWrapper>
        <Description>이경서@naver.com</Description>
        <Description>Copyright 2024.이경서 All Rights Reserved.</Description>
      </RightWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 180px;
  background-color: #06070c;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftWrapper = styled.div`
  display: flex;
  margin-left: 320px;
`;

const Logo = styled.img`
  width: 168px;
  height: 42px;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 600px;
`;

const Description = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: rgba(197, 197, 197, 0.7);
  margin: 0;
  line-height: 1.5;
`;
