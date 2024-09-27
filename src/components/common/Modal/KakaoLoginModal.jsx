import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import clearbtn from "../../../assets/images/buttons/clearbtn.png";

export const KakaoLoginModal = () => {
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  //   const [region, setRegion] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    const payload = {
      birth_date: birthDate,
      gender: gender,
      //   region: region,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/kakao-first-login",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("회원가입 성공:", response.data);
      navigate("/home");
    } catch (error) {
      console.error(
        "회원가입 실패:",
        error.response ? error.response.data : error.message
      );
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
            <option value="">남</option>
            <option value="female">여</option>
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
            <Input placeholder="휴대전화 번호 입력" />
            <NumberButton>인증</NumberButton>
          </NumberContainer>
        </InputContainer>
        {/* <InputContainer>
          <InputText>지역</InputText>
          <Select value={region} onChange={(e) => setRegion(e.target.value)}>
            <option value="">서울특별시</option>
            <option value="region1">부산광역시</option>
            <option value="region2">대구광역시</option>
            <option value="region3">인천광역시</option>
            <option value="region4">광주광역시</option>
            <option value="region5">대전광역시</option>
            <option value="region6">울산광역시</option>
            <option value="region7">세종 특별 자치시</option>
            <option value="region8">경기도</option>
            <option value="region9">강원도</option>
            <option value="region10">충청북도</option>
            <option value="region11">충청남도</option>
            <option value="region12">전라북도</option>
            <option value="region13">전라남도</option>
            <option value="region14">경상북도</option>
            <option value="region15">경상남도</option>
            <option value="region16">제주 특별 자치도</option>
          </Select>
        </InputContainer> */}
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
  font-size: 18px;
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
