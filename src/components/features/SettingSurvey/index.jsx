import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { Header } from "../Layout/Header";
import { Footer } from "../Layout/Footer";
import { BasicSettings } from "./BasicSettings";
import { RespondentSettings } from "./RespondentSettings";
import { RewardsSettings } from "./RewardSettings";

export const SettingSurvey = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const [dueDate, setDueDate] = useState(new Date());
  const [publicAccess, setPublicAccess] = useState("SHARED");
  const [rewardType, setRewardType] = useState("NO_REWARD");
  const [rewardCount, setRewardCount] = useState(0);
  const [rewardImage, setRewardImage] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { title, questions } = location.state || { title: "", questions: [] };

  const handleEditClick = () => {
    setIsEditing(true);
    navigate("/editSurvey");
  };

  const handleSettingsClick = () => {
    setIsEditing(false);
    navigate("/settingSurvey");
  };

  const handleSurveySubmit = async () => {
    const questionList = questions.map((question) => {
      return {
        text: question.question,
        question_type: question.type,
        options: question.options || [],
      };
    });

    const formData = new FormData();
    formData.append("title", title);
    formData.append("start_date", startDate.toISOString().split("T")[0]);
    formData.append("due_date", dueDate.toISOString().split("T")[0]);
    formData.append("public_access", publicAccess);
    formData.append("question_list", JSON.stringify(questionList));
    formData.append("reward_type", rewardType);
    formData.append("reward_count", rewardCount);

    if (rewardImage) {
      formData.append("reward_image", rewardImage);
    }

    formData.append(
      "survey",
      JSON.stringify({
        title,
        start_date: startDate.toISOString().split("T")[0],
        due_date: dueDate.toISOString().split("T")[0],
        question_list: questionList,
        reward_type: rewardType,
        reward_count: rewardCount,
        reward_image: rewardImage ? rewardImage.name : null, 
      })
    );

    try {
      const response = await axios.post("/api/surveys", formData, {
        withCredentials: true,
      });

      console.log("Survey created successfully", response.data);
      alert("설문 등록이 완료되었습니다.");
      navigate("/home");
    } catch (error) {
      console.error("Error creating survey:", error);
    }
  };

  return (
    <Container>
      <Header />
      <Title>설문조사 만들기</Title>
      <ButtonContainer>
        <EditButton isActive={!isEditing} onClick={handleEditClick}>
          편집
        </EditButton>
        <SetButton isActive={isEditing} onClick={handleSettingsClick}>
          설정
        </SetButton>
      </ButtonContainer>
      <SurveyContainer>
        <BasicSettings
          setStartDate={setStartDate}
          setDueDate={setDueDate}
          setPublicAccess={setPublicAccess}
        />
        <RespondentSettings />
        <RewardsSettings
          setRewardType={setRewardType}
          setRewardCount={setRewardCount}
          setRewardImage={setRewardImage}
        />
        <SurveyButton onClick={handleSurveySubmit}>설문 등록하기</SurveyButton>
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
  cursor: pointer;
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
  cursor: pointer;
`;

const SurveyContainer = styled.div`
  width: 1100px;
  height: 1310px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 200px;
  background-color: #ffffff;
  border: 2px solid rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

const SurveyButton = styled.button`
  width: 270px;
  height: 70px;
  border: none;
  border-radius: 12px;
  padding: 10px 0;
  background-color: #06070c;
  margin-left: 740px;
  margin-top: 40px;
  cursor: pointer;
  font-size: 30px;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
`;
