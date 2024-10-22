import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useAuth } from "../../../routes/AuthProvider";

export const LoggedInProfile = () => {
  const [emailAlert, setEmailAlert] = useState(false);
  const [kakaoAlert, setKakaoAlert] = useState(false);
  const [userData, setUserData] = useState(null);

  const { setUser } = useAuth();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("/api/user/profile", {
          withCredentials: true,
        });

        const userData = response.data.content;
        setUserData(userData);
        setUser({
          name: userData.name,
          email: userData.email,
          birth_date: userData.birth_date,
          gender: userData.gender,
          phone_number: userData.phone_number,
          image_url: userData.image_url,
        });
      } catch (error) {
        console.error(
          "사용자 프로필을 조회하는 중 오류 발생:",
          error.response ? error.response.data : error.message
        );
      }
    };

    fetchUserProfile();
  }, [setUser]);

  const toggleEmailAlert = () => {
    setEmailAlert((prev) => !prev);
  };

  const toggleKakaoAlert = () => {
    setKakaoAlert((prev) => !prev);
  };

  const displayName = userData?.name || "이름이 없습니다.";
  const displayEmail = userData?.email || "이메일이 없습니다.";
  const displayGender = userData?.gender || "성별이 없습니다.";
  const displayBirthDate = userData?.birth_date || "생년월일이 없습니다.";
  const displayPhoneNumber = userData?.phone_number || "연락처가 없습니다.";

  return (
    <Container>
      <MyPageContainer>
        <LoginContainer>
          <TitleContainer>
            <LoginTitle>{displayName}</LoginTitle>
            <LoginSubtitle>님, 안녕하세요!</LoginSubtitle>
          </TitleContainer>
          <LoginText>{displayEmail}</LoginText>
        </LoginContainer>
        <Underline />
        <SecondContainer>
          <ProfileContainer>
            <Title>프로필 설정</Title>
            <ProfileButtonContainer>
              <ProfileButton>수정</ProfileButton>
            </ProfileButtonContainer>
            <ProfileTextContainer>
              <ProfileTitle>이름:</ProfileTitle>
              <ProfileSubtitle>{displayName}</ProfileSubtitle>
            </ProfileTextContainer>
            <ProfileTextContainer>
              <ProfileTitle>성별:</ProfileTitle>
              <ProfileSubtitle>{displayGender}</ProfileSubtitle>
            </ProfileTextContainer>
            <ProfileTextContainer>
              <ProfileTitle>생년월일:</ProfileTitle>
              <ProfileSubtitle>{displayBirthDate}</ProfileSubtitle>
            </ProfileTextContainer>
            <ProfileTextContainer>
              <ProfileTitle>연락처:</ProfileTitle>
              <ProfileSubtitle>{displayPhoneNumber}</ProfileSubtitle>
            </ProfileTextContainer>
          </ProfileContainer>
          <Underline2 />
          <AlarmContainer>
            <AlarmTitle>알림 설정</AlarmTitle>
            <EmailContainer>
              <EmailText>이메일 알림:</EmailText>
              <EmailButtonContainer
                $isActive={emailAlert}
                onClick={toggleEmailAlert}
              >
                <EmailButton
                  $isActive={emailAlert}
                  onClick={toggleEmailAlert}
                />
              </EmailButtonContainer>
            </EmailContainer>
            <KakaoContainer>
              <KakaoText>카카오톡 알림:</KakaoText>
              <KakaoButtonContainer
                $isActive={kakaoAlert}
                onClick={toggleKakaoAlert}
              >
                <KakaoButton
                  $isActive={kakaoAlert}
                  onClick={toggleKakaoAlert}
                />
              </KakaoButtonContainer>
            </KakaoContainer>
          </AlarmContainer>
        </SecondContainer>
      </MyPageContainer>
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

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const LoginTitle = styled.h2`
  font-size: 36px;
  font-weight: 800;
  color: #019a13;
  margin-top: 50px;
  margin-left: -8px;
`;

const LoginSubtitle = styled.h2`
  font-size: 36px;
  font-weight: 500;
  color: #383838;
  margin-top: 50px;
  margin-left: 5px;
`;

const LoginText = styled.p`
  font-size: 25px;
  font-weight: 400;
  color: #383838;
  margin-top: -25px;
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
  margin-bottom: 70px;
`;

const AlarmTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #383838;
`;

const ProfileButtonContainer = styled.div`
  margin-top: -109px;
  margin-bottom: 50px;
`;

const ProfileButton = styled.button`
  width: 80px;
  height: 35px;
  margin-left: 400px;
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

const ProfileTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: -20px;
  margin-left: 100px;
`;

const ProfileTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #000000;
`;

const ProfileSubtitle = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: #383838;
  margin-left: 5px;
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
  height: 105%;
  width: 1px;
  border: none;
  border-left: 1px solid #cecece;
  border-color: #cecece;
  margin-left: 45px;
  margin-top: 10px;
`;

const EmailContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;
`;

const EmailText = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #000000;
`;

const EmailButtonContainer = styled.div`
  position: relative;
  width: 70px;
  height: 30px;
  border-radius: 60px;
  background-color: ${(props) => (props.$isActive ? "#B3E1B8" : "#F2F2F2")};
  cursor: pointer;
  margin-left: 10px;
  margin-top: 20px;
`;

const EmailButton = styled.div`
  position: absolute;
  left: ${(props) => (props.$isActive ? "40px" : "0")};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => (props.$isActive ? "#019A13" : "#D2D2D2")};
  transition: left 0.2s;
`;

const KakaoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: -10px;
  margin-right: 200px;
  gap: 82px;
`;

const KakaoText = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #000000;
`;

const KakaoButtonContainer = styled.div`
  position: relative;
  width: 70px;
  height: 30px;
  border-radius: 60px;
  background-color: ${(props) => (props.$isActive ? "#B3E1B8" : "#F2F2F2")};
  cursor: pointer;
  margin-left: 10px;
  margin-top: 20px;
`;

const KakaoButton = styled.div`
  position: absolute;
  left: ${(props) => (props.$isActive ? "40px" : "0")};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => (props.$isActive ? "#019A13" : "#D2D2D2")};
  transition: left 0.2s;
`;
