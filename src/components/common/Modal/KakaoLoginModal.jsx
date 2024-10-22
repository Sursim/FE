import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../routes/AuthProvider";
import styled from "styled-components";
import clearbtn from "../../../assets/images/buttons/clearbtn.png";

export const KakaoLoginModal = ({ accessToken }) => {
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();
  const { login, setUser } = useAuth();

  const handleSignUp = async () => {
    if (!gender) {
      alert("성별을 선택해주세요.");
      return;
    }

    if (!/^\d{8}$/.test(birthDate)) {
      alert("생년월일은 8자리 숫자로 입력해야 합니다. 형식: YYYYMMDD");
      return;
    }

    if (!/^\d{11}$/.test(phoneNumber)) {
      alert("전화번호는 11자리 숫자로만 입력해야 합니다.");
      return;
    }

    const formattedBirthDate = `${birthDate.slice(0, 4)}-${birthDate.slice(
      4,
      6
    )}-${birthDate.slice(6, 8)}`;

    const payload = {
      birth_date: formattedBirthDate,
      gender: gender,
      phone_number: phoneNumber,
      access_token: accessToken,
    };

    console.log("전송할 payload:", payload);

    try {
      const response = await axios.post(
        "/api/auth/kakao-first-login",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // 쿠키와 같은 인증 정보를 서버로 전송
        }
      );

      alert("회원가입이 완료되었습니다.");
      setUser({
        name: response.data.name,
        email: response.data.email,
        gender: gender,
        birth_date: formattedBirthDate,
        phone_number: phoneNumber,
      });
      login();
      navigate("/home");
    } catch (error) {
      console.error(
        "회원가입 실패:",
        error.response ? error.response.data : error.message
      );
      alert("회원가입에 실패했습니다.");
    }
  };

  return (
    <ModalOverlay>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalButton>
          <ButtonImage src={clearbtn} alt="clearbtn" />
        </ModalButton>
        <TitleContainer>
          <Title>추가 정보 입력</Title>
        </TitleContainer>
        <InputContainer>
          <InputText>성별</InputText>
          <Select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="남성">남성</option>
            <option value="여성">여성</option>
          </Select>
        </InputContainer>
        <InputContainer>
          <InputText>생년월일</InputText>
          <Input
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            placeholder="8자리로 입력하세요. EX)19990101"
          />
        </InputContainer>
        <InputContainer>
          <InputText>전화번호</InputText>
          <NumberContainer>
            <Input
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="숫자만 입력하세요. EX)01012345678"
            />
            <NumberButton>인증</NumberButton>
          </NumberContainer>
        </InputContainer>
        <KakaoLoginButton onClick={handleSignUp}>
          회원가입 하기
        </KakaoLoginButton>
      </ModalContent>
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
  height: 400px;
  max-width: 90%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ModalButton = styled.button`
  margin-left: 350px;
  margin-top: 5px;
  border: none;
  cursor: pointer;
  background-color: #ffffff;
`;

const ButtonImage = styled.img`
  width: 15px;
  height: 15px;
`;

const TitleContainer = styled.div`
  display: flex;
  margin-left: 26px;
  margin-top: -10px;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #06070c;
  margin-left: 5px;
`;

const KakaoLoginButton = styled.button`
  width: 310px;
  height: 40px;
  padding: 10px 0;
  border: none;
  border-radius: 50px;
  margin-top: 30px;
  background-color: #ffd200;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  padding-left: 110px;
  margin-left: 30px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: 30px;
`;

const NumberContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const InputText = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #06070c;
`;

const Input = styled.input`
  width: 300px;
  height: 10px;
  margin-top: -20px;
  border: none;
  border-bottom: 1px solid #c5c5c5;
  padding: 10px 0;
  font-size: 16px;
  font-weight: 500;
  color: #06070c;
  &::placeholder {
    color: #c5c5c5;
  }
  &:focus {
    outline: none;
    border-bottom: 1px solid #019a13;
  }
`;

const NumberButton = styled.button`
    width: 50px;
    height: 25px;
    margin-right: 60px;
    margin-top: -15px;
    border: 1px solid #06070c;
    border-radius: 28px;
    background-color: #FFFFFF;
    padding: 5px 0;
    font-size: 12px;
    font-weight: 400;
    color: #06070c;t
    text-align: center;
    cursor: pointer;
`;

const Select = styled.select`
  width: 300px;
  height: 40px;
  border: none;
  border-bottom: 1px solid #c5c5c5;
  font-size: 18px;
  font-weight: 500;
  color: #c5c5c5;
  margin-top: -20px;
  padding: 10px 0;
  background-color: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-bottom: 1px solid #019a13;
  }
`;
