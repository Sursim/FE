import React from "react";
import styled from "styled-components";
import { Header } from "../../components/features/Layout/Header";
// import { Profile } from "../../components/features/MyPage/Profile";
import { LoggedInProfile } from "../../components/features/MyPage/LoggedInProfile";
import { Footer } from "../../components/features/Layout/Footer";

export default function PublicSurveysPage() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLoginSuccess = () => {
  //   setIsLoggedIn(true);
  // };

  return (
    <Container>
      <Header />
      <ProfileContainer>
        {/* {isLoggedIn ? (
          <LoggedInProfile />
        ) : (
          <Profile onLoginSuccess={handleLoginSuccess} />
        )} */}
        <LoggedInProfile />
      </ProfileContainer>
      <Button>서비스 탈퇴하기</Button>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileContainer = styled.div`
  margin-top: 80px;
`;

const Button = styled.button`
  font-size: 24px;
  font-weight: 700;
  color: #c5c5c5;
  border: none;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -10px;
  margin-bottom: 50px;
`;
