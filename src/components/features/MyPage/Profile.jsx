import React, { useState } from "react";
import styled from "styled-components";
import { LoginModal } from "../../common/Modal/LoginModal";
import mypage from "../../../assets/images/mypage.png";

export const Profile = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleLoginButtonClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Container>
      <MyPageContainer>
        <LoginContainer>
          <LoginButton onClick={handleLoginButtonClick}>
            로그인 하기 &gt;
          </LoginButton>
          <LoginText>로그인을 먼저 해주세요.</LoginText>
        </LoginContainer>
        <Underline />
        <SecondContainer>
          <ProfileContainer>
            <Title>프로필 설정</Title>
            <ProfileButton>수정</ProfileButton>
            <Image src={mypage} alt="mypage" />
            <Text>로그인을 먼저 해주세요.</Text>
          </ProfileContainer>
          <Underline2 />
          <AlarmContainer>
            <AlarmTitle>알림 설정</AlarmTitle>
            <AlarmImage src={mypage} alt="mypage" />
            <AlarmText>로그인을 먼저 해주세요.</AlarmText>
          </AlarmContainer>
        </SecondContainer>
      </MyPageContainer>
      {isModalOpen && <LoginModal isOpen={isModalOpen} onClose={closeModal} />}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const MyPageContainer = styled.div`
  width: 1100px;
  height: 550px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 200px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 100px;
`;

const LoginButton = styled.button`
  background-color: #ffffff;
  border: none;
  font-size: 36px;
  font-weight: 800;
  color: #019a13;
  cursor: pointer;
  margin-top: 50px;
  margin-left: -8px;
  display: inline-block;
`;

const LoginText = styled.p`
  font-size: 25px;
  font-weight: 400;
  color: #383838;
  margin-top: 5px;
  margin-bottom: 50px;
`;

const SecondContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 20px;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const AlarmContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #383838;
  margin-left: 100px;
`;

const AlarmTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #383838;
  margin-left: -500px;
`;

const ProfileButton = styled.button`
  width: 80px;
  height: 35px;
  margin-left: 400px;
  margin-top: -65px;
  border-radius: 39px;
  background-color: #ffffff;
  border: 2px solid rgba(0, 0, 0, 0.15);
  padding: 0;
  line-height: 35px;
  font-size: 18px;
  font-weight: 700;
  color: #c5c5c5;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100px;
  height: 95px;
  margin-left: 220px;
  margin-top: 50px;
`;

const AlarmImage = styled.img`
  width: 100px;
  height: 95px;
  margin-left: -340px;
  margin-top: 20px;
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #c5c5c5;
  margin-left: 200px;
  margin-top: 8px;
`;

const AlarmText = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #c5c5c5;
  margin-left: -350px;
  margin-top: 8px;
`;

const Underline = styled.hr`
  width: 88%;
  border: none;
  border-top: 1px solid #cecece;
  border-color: #cecece;
  margin-left: 45px;
  margin-top: -15px;
`;

const Underline2 = styled.hr`
  height: 110%;
  width: 1px;
  border: none;
  border-left: 1px solid #cecece;
  border-color: #cecece;
  margin-left: 45px;
  margin-top: 10px;
`;
