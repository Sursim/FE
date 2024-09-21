import React, { useState } from "react";
import styled from "styled-components";
import { Header } from "../Layout/Header";
import { Footer } from "../Layout/Footer";
import { useNavigate } from "react-router-dom";
import { SurveyTitle } from "./SurveyTitle";
import { SurveyObjective } from "./SurveyObjective";
import { QuestionList } from "./QuestionList";
import arrowbtn from "../../../assets/images/buttons/arrowbutton.png";

export const EditSurvey = () => {
  const [isEditing, setIsEditing] = useState(true);
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([
    { id: 1, question: "", options: ["응답 1", "응답 2"] },
    { id: 2, question: "", options: ["응답 1", "응답 2"] },
  ]);

  const handleEditClick = () => {
    setIsEditing(true);
    navigate("/editSurvey");
  };

  const handleSettingsClick = () => {
    setIsEditing(false);
    navigate("/mySurveysPage"); // 설정 페이지로 이동
  };

  return (
    <Container>
      <Header />
      <Title>설문조사 만들기</Title>
      <ButtonContainer>
        <EditButton isActive={isEditing} onClick={handleEditClick}>
          편집
        </EditButton>
        <SetButton isActive={!isEditing} onClick={handleSettingsClick}>
          설정
        </SetButton>
      </ButtonContainer>
      <SurveyContainer>
        <SurveyTitle />
        <SurveyObjective />
        <QuestionList questions={questions} setQuestions={setQuestions} />
        <ButtonContainer2>
          <DecreaseButton>
            <DecreaseText>질문 -</DecreaseText>
          </DecreaseButton>
          <IncreaseButton>
            <IncreaseText>질문 +</IncreaseText>
          </IncreaseButton>
          <ArrowButton>
            <ArrowButtonImage src={arrowbtn} alt="설정 페이지" />
          </ArrowButton>
        </ButtonContainer2>
      </SurveyContainer>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 35px;
  font-weight: 800;
  color: #06070c;
  margin-top: 130px;
  margin-left: 200px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-top: 10px;
  margin-left: 200px;
`;

const EditButton = styled.button`
  width: 160px;
  height: 55px;
  border-radius: 60px;
  background-color: ${(props) => (props.isActive ? "#06070C" : "#FFFFFF")};
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  color: ${(props) => (props.isActive ? "#FFFFFF" : "#06070C")};
`;

const SetButton = styled.button`
  width: 160px;
  height: 55px;
  border-radius: 60px;
  background-color: ${(props) => (props.isActive ? "#06070C" : "#FFFFFF")};
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  color: ${(props) => (props.isActive ? "#FFFFFF" : "#06070C")};
`;

const SurveyContainer = styled.div`
  width: 1100px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 200px;
  background-color: #ffffff;
  border: 2px solid rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

const ButtonContainer2 = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 80px;
  margin-top: 30px;
  margin-bottom: 30px;
  gap: 5px;
`;

const IncreaseButton = styled.button`
  margin-left: 10px;
  width: 90px;
  height: 40px;
  border-radius: 10px;
  background-color: #019a13;
  border: none;
  cursor: pointer;
`;

const IncreaseText = styled.p`
  font-size: 22px;
  font-weight: 700;
  color: white;
  text-align: center;
  margin-top: 7px;
`;

const DecreaseButton = styled.button`
  margin-left: 10px;
  width: 90px;
  height: 40px;
  border-radius: 10px;
  background-color: #eeeeee;
  border: none;
  cursor: pointer;
`;

const DecreaseText = styled.p`
  font-size: 22px;
  font-weight: 700;
  color: #c5c5c5;
  margin-top: 7px;
  text-align: center;
`;

const ArrowButton = styled.button`
  margin-left: 540px;
  border: none;
  background-color: #ffffff;
  cursor: pointer;
`;

const ArrowButtonImage = styled.img`
  width: 60px;
  height: 60px;
`;
