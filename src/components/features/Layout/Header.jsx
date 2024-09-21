import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate, useLocation } from "react-router-dom";
import sursim from "../../../assets/images/sursim.png";
import login from "../../../assets/icons/LoginIcon.png";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeButton, setActiveButton] = useState("");

  const handleLogin = () => {
    navigate(login());
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    const routes = {
      "나의 설문": "/mySurveys",
      "공개된 설문": "/publicSurveys",
      "리워드 교환": "/rewards",
    };
    navigate(routes[buttonName]);
  };

  useEffect(() => {
    const routes = {
      "/mySurveys": "나의 설문",
      "/publicSurveys": "공개된 설문",
      "/rewards": "리워드 교환",
    };

    setActiveButton(routes[location.pathname] || "");
  }, [location.pathname]);

  return (
    <Wrapper>
      <Container>
        <Link to="/home">
          <Logo src={sursim} alt="sursim 로고" />
        </Link>
        <LeftWrapper>
          {["나의 설문", "공개된 설문", "리워드 교환"].map((button) => (
            <Button key={button} onClick={() => handleButtonClick(button)}>
              <Text active={activeButton === button}>{button}</Text>
            </Button>
          ))}
        </LeftWrapper>
        <RightWrapper>
          <Button2 onClick={handleLogin}>
            <Icon src={login} alt="로그인" />
          </Button2>
        </RightWrapper>
      </Container>
    </Wrapper>
  );
};

export const Wrapper = styled.header`
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 80px;
  background-color: #fff;
  padding: 0 16px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 168px;
  height: 42px;
  margin-left: 100px;
  margin-top: 20px;x
`;

const LeftWrapper = styled.div`
  margin-top: 20px;
  margin-right: 700px;
  display: flex;
  flex-direction: row;
`;

const Button = styled.button`
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
  margin: 0 10px;
  display: flex;
  justify-content: center;
`;

const Text = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: ${({ active }) => (active ? "#019A13" : "#06070c")};
  text-align: center;
  text-decoration: ${({ active }) => (active ? "underline" : "none")};
`;

const RightWrapper = styled.div`
  margin-right: 50px;
  margin-top: 10px;
`;

const Button2 = styled.button`
  align-items: center;
  display: flex;
  justify-content: center;
  border: none;
  background: none;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
`;
