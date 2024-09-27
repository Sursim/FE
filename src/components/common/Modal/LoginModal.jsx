import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import clearbtn from "../../../assets/images/buttons/clearbtn.png";
import sursim from "../../../assets/images/sursim.png";
import password from "../../../assets/icons/password.png";
import kakao from "../../../assets/icons/kakao.png";
import { RegisterModal } from "./RegisterModal";
import { KakaoLoginModal } from "./KakaoLoginModal";

export const LoginModal = ({ isOpen, onClose }) => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isKakaoLoginModalOpen, setIsKakaoLoginModalOpen] = useState(false);

  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init("afbd1f55b52798b8aebb6aeb679e3259");
    } else {
      console.error("카카오 SDK가 로드되지 않았거나 이미 초기화되었습니다.");
    }
  }, []);

  if (!isOpen) return null;

  const handleKakaoLogin = () => {
    window.Kakao.Auth.login({
      success: async (authObj) => {
        const accessToken = authObj.access_token;
        console.log("액세스 토큰:", accessToken);

        const baseURL = "http://13.125.238.177:8080/api/auth/login/kakao";

        try {
          const response = await axios.post(
            baseURL,
            {
              access_token: accessToken,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          console.log("서버 응답:", response.data);
          //   const { access_token } = response.data;
          //   const cookie = document.cookie
          //     .split("; ")
          //     .find((row) => row.startsWith("Authorization="));

          const cookies = response.headers["set-cookie"];

          const access_token = cookies;

          //   if (!access_token) {
          //     throw new Error("서버에서 액세스 토큰을 가져오지 못했습니다.");
          //   }
          console.log("서버에서 받은 액세스 토큰:", access_token);
          //   console.log("로그인 성공:", response.data);
          if (response.data.content === "INCOMPLETE") {
            setIsKakaoLoginModalOpen(true);
          }
        } catch (error) {
          console.error(
            "로그인 실패:",
            error.response ? error.response.data : error.message
          );
        }
      },
    });
  };

  const handleRegisterClick = () => {
    setIsRegisterModalOpen(true);
  };

  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  const closeKakaoLoginModal = () => {
    setIsKakaoLoginModalOpen(false);
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalButton onClick={onClose}>
          <ButtonImage src={clearbtn} alt="clearbtn" />
        </ModalButton>
        <TitleContainer>
          <TitleImage src={sursim} alt="sursim" />
          <Title>에 또 오셨네요!</Title>
        </TitleContainer>
        <EmailContainer>
          <DescriptionTitle>이메일</DescriptionTitle>
          <DescriptionInput placeholder="example.mail.com" />
        </EmailContainer>
        <PasswordContainer>
          <DescriptionTitle>비밀번호</DescriptionTitle>
          <DescriptionInput placeholder="numbers" />
          <PasswordImage src={password} alt="password" />
        </PasswordContainer>
        <LoginButton>로그인</LoginButton>
        <KakaoLoginButton onClick={handleKakaoLogin}>
          <KakaoImage src={kakao} alt="kakao" />
          <KakaoLoginButtonText>카카오 로그인</KakaoLoginButtonText>
        </KakaoLoginButton>
        <RegisterButton onClick={handleRegisterClick}>
          처음이신가요?
        </RegisterButton>
      </ModalContent>
      {isRegisterModalOpen && (
        <RegisterModal
          isOpen={isRegisterModalOpen}
          onClose={closeRegisterModal}
        />
      )}
      {isKakaoLoginModalOpen && (
        <KakaoLoginModal
          isOpen={isKakaoLoginModalOpen}
          onClose={closeKakaoLoginModal}
        />
      )}
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  width: 400px;
  height: 430px;
  max-width: 90%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalButton = styled.button`
  margin-left: 350px;
  margin-top: 5px;
  border: none;
  cursor: pointer;
  background-color: #ffffff;
`;

const ButtonImage = styled.img`
  width: 20px;
  height: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: -10px;
`;

const TitleImage = styled.img`
  width: 100px;
  height: 27px;
  margin-top: -10px;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #06070c;
  margin-left: 5px;
`;

const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-top: -20px;
`;

const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-top: -5px;
`;

const DescriptionTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #06070c;
`;

const DescriptionInput = styled.input`
  width: 300px;
  height: 17px;
  margin-top: -10px;
  border: 1px solid #c5c5c5;
  border-radius: 10px;
  padding: 10px;
  &:focus {
    outline: none;
    border-color: #019a13;
  }
`;

const PasswordImage = styled.img`
  width: 25px;
  height: 19px;
  margin-left: 280px;
  margin-top: -30px;
  z-index: 10;
  cursor: pointer;
`;

const LoginButton = styled.button`
  width: 320px;
  height: 40px;
  padding: 10px 0;
  border-radius: 30px;
  border: none;
  margin-top: 40px;
  background-color: #019a13;
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
`;

const KakaoLoginButton = styled.button`
  width: 320px;
  height: 40px;
  padding: 10px 0;
  border: none;
  border-radius: 50px;
  margin-top: 10px;
  background-color: #ffd200;
  cursor: pointer;
  display: flex;
  flex-direction: row;
`;

const KakaoImage = styled.img`
  width: 23px;
  height: 23px;
  margin-left: 100px;
  margin-right: -20px;
`;

const KakaoLoginButtonText = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #381e1f;
  text-align: center;
  margin-left: 30px;
  margin-top: 2px;
`;

const RegisterButton = styled.button`
  border: none;
  background-color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  color: #c5c5c5;
  text-align: center;
  text-decoration: none;
  position: relative;
  margin-top: 10px;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    height: 0.8px;
    background-color: #c5c5c5;
    position: absolute;
    left: 0;
    right: 0;
    width: 87%;
    margin-left: 5px;
  }
`;
