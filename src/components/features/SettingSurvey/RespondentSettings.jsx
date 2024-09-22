import React, { useState } from "react";
import styled from "styled-components";
import checkbox from "../../../assets/images/checkbox/checkbox.png";
import { RespondentModal } from "../../common/Modal/RespondentModal";

export const RespondentSettings = () => {
  const [activeGender, setActiveGender] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setActiveGender("male");
  };

  const handleButtonClick2 = () => {
    setActiveGender("female");
  };

  const handleButtonClick3 = () => {
    setActiveGender("other");
  };

  const handleModalClick = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <Container>
      <TitleContainer>
        <Title>응답자 설정</Title>
      </TitleContainer>
      <AgeContainer>
        <Text>응답자 나이</Text>
        <AgeText1>만</AgeText1>
        <AgeInput />
        <AgeText>세 ~ 만</AgeText>
        <AgeInput />
        <AgeText>세</AgeText>
      </AgeContainer>
      <Underline2 />
      <GenderContainer>
        <Text>응답자 성별</Text>
        <GenderButton1
          isActive={activeGender === "male"}
          onClick={handleButtonClick}
        >
          남
        </GenderButton1>
        <GenderText>/</GenderText>
        <GenderButton2
          isActive={activeGender === "female"}
          onClick={handleButtonClick2}
        >
          여
        </GenderButton2>
        <GenderText>/</GenderText>
        <GenderButton2
          isActive={activeGender === "other"}
          onClick={handleButtonClick3}
        >
          무관
        </GenderButton2>
      </GenderContainer>
      <Underline />
      <LiveContainer>
        <Text>응답자 거주지</Text>
        <LiveContainer2
          onClick={handleModalClick}
          height={LiveText.length * 10}
        >
          <LiveText>무관</LiveText>
          <LiveImage src={checkbox} alt="checkbox" />
        </LiveContainer2>
      </LiveContainer>
      <Underline />

      {isModalOpen && (
        <RespondentModal isOpen={isModalOpen} onClose={handleModalClose} />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const TitleContainer = styled.div`
  margin-left: 50px;
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: 800;
  color: #06070c;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background-color: #06070c;
    position: absolute;
    left: 0;
  }
`;

const Text = styled.p`
  font-size: 26px;
  font-weight: 700;
  color: #06070c;
`;

const AgeContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 50px;
  margin-top: 10px;
`;

const AgeInput = styled.input`
  width: 50px;
  height: 30px;
  font-size: 25px;
  font-weight: 700;
  color: #06070c;
  background-color: #fafafa;
  border: none;
  border-radius: 17px;
  padding: 10px;
  outline: none;
  margin-top: 15px;
  margin-left: 10px;

  &::placeholder {
    color: transparent;
  }
  &:focus {
    outline: none;
    border: 1px solid #019a13;
  }
`;

const AgeText1 = styled.p`
  font-size: 25px;
  font-weight: 700;
  color: #06070c;
  margin-left: 530px;
`;

const AgeText = styled.p`
  font-size: 25px;
  font-weight: 700;
  color: #06070c;
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
  width: 58%;
  border: none;
  border-top: 1px solid #cecece;
  border-color: #cecece;
  margin-left: 45px;
  margin-top: -15px;
`;

const GenderContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 50px;
  margin-top: 10px;
`;

const GenderButton1 = styled.button`
  border: none;
  cursor: pointer;
  background-color: #ffffff;
  font-size: 25px;
  font-weight: 700;
  color: ${(props) => (props.isActive ? "#019A13" : "#cecece")};
  margin-left: 660px;
`;

const GenderText = styled.p`
  font-size: 25px;
  font-weight: 700;
  color: #cecece;
  margin-left: 5px;
  margin-right: 5px;
`;

const GenderButton2 = styled.button`
  border: none;
  cursor: pointer;
  background-color: #ffffff;
  font-size: 25px;
  font-weight: 700;
  color: ${(props) => (props.isActive ? "#019A13" : "#cecece")};
`;

const LiveContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 50px;
  margin-top: 10px;
`;

const LiveContainer2 = styled.div`
  display: flex;
  height: ${(props) => props.height}px;
  flex-direction: row;
  margin-left: 710px;
  cursor: pointer;
`;

const LiveText = styled.p`
  font-size: 25px;
  font-weight: 700;
  color: #06070c;
`;

const LiveImage = styled.img`
  width: 21px;
  height: 24px;
  margin-left: 10px;
  margin-top: 25px;
`;
