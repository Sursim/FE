import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import AI from "../../../assets/images/buttons/ai.png";
import { AiResponseModal } from "../../common/Modal/AiResponseModal";
import { Checkbox } from "./Question/Checkbox";
import { LongAnswer } from "./Question/LongAnswer";
import { ShortAnswer } from "./Question/ShortAnswer";
import { Number } from "./Question/Number";
import { Information } from "./Question/Information";
import { MeaningDistinctionScale } from "./Question/MeaningDistinctionScale";
import { LikertScale } from "./Question/ LikertScale";
import modal1 from "../../../assets/images/checkbox/modal1.png";
import modal2 from "../../../assets/images/checkbox/modal2.png";
import modal3 from "../../../assets/images/checkbox/modal3.png";
import modal4 from "../../../assets/images/checkbox/modal4.png";
import modal5 from "../../../assets/images/checkbox/modal5.png";
import modal6 from "../../../assets/images/checkbox/modal6.png";
import modal7 from "../../../assets/images/checkbox/modal7.png";
import modal8 from "../../../assets/images/checkbox/modal8.png";
import modal9 from "../../../assets/images/checkbox/modal9.png";

export const QuestionItem = ({ question = { options: [] }, setQuestions }) => {
  const [selectedType, setSelectedType] = useState("체크박스");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [aiResponse, setAiResponse] = useState("");
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleDropdownSelect = (type) => {
    const updatedQuestion = { ...question, question_type: type };
    setSelectedType(type);
    handleQuestionChange(updatedQuestion);
    setDropdownOpen(false);
  };

  const handleQuestionChange = (updatedQuestion) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) =>
        q.id === updatedQuestion.id ? updatedQuestion : q
      )
    );
  };

  const renderComponent = () => {
    switch (selectedType) {
      case "체크박스":
        return <Checkbox question={question} setQuestions={setQuestions} />;
      case "객관식":
        return <Checkbox question={question} setQuestions={setQuestions} />;
      case "장문형":
        return <LongAnswer question={question} setQuestions={setQuestions} />;
      case "단답형":
        return <ShortAnswer question={question} setQuestions={setQuestions} />;
      case "숫자 응답":
        return <ShortAnswer question={question} setQuestions={setQuestions} />;
      case "전화번호":
        return <Number question={question} setQuestions={setQuestions} />;
      case "정보 이용 동의":
        return <Information question={question} setQuestions={setQuestions} />;
      case "의미 분별 척도":
        return (
          <MeaningDistinctionScale
            question={question}
            setQuestions={setQuestions}
          />
        );
      case "리커트 척도":
        return <LikertScale question={question} setQuestions={setQuestions} />;
      default:
        return <Checkbox question={question} setQuestions={setQuestions} />;
    }
  };

  const QUESTION_TYPE_TIMES = {
    CHECK_CHOICE: 1, // 체크박스
    SEMANTIC_RATINGS: 2, // 의미분별척도
    LIKERT_SCORES: 2, // 리커트척도
    MULTIPLE_CHOICE: 1, // 객관식
    NUMERIC_RESPONSE: 1, // 숫자응답
    PHONE_NUMBER: 1, // 전화번호
    SUBJECTIVE: 3, // 주관식
    DESCRIPTIVE: 5, // 서술형
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleAIButtonClick = async () => {
    const requestData = {
      survey_title: question.survey_title,
      text: question.text,
      question_type: selectedType,
      response_time: QUESTION_TYPE_TIMES[selectedType],
    };

    // if (selectedType === "의미 분별 척도") {
    //   requestData.semantic_option = {
    //     left_end: question.semantic_option.left_end,
    //     right_end: question.semantic_option.right_end,
    //   };
    // } else if (selectedType === "체크박스" || selectedType === "객관식") {
    //   requestData.options = question.options;
    // }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/prompt",
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setAiResponse(response.data);
      console.log(response.data);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error fetching AI response:", error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <TitleContainer>
        <Title>질문 {question.id}</Title>
        <AIButton onClick={handleAIButtonClick}>
          <AIImage src={AI} alt="AI봇" />
        </AIButton>
        <DropdownContainer ref={dropdownRef} onClick={handleDropdownToggle}>
          <DropdownText>{selectedType}</DropdownText>
          <DropdownArrow>{isDropdownOpen ? "▲" : "▼"}</DropdownArrow>
          {isDropdownOpen && (
            <DropdownMenu>
              {[
                { label: "체크박스", icon: modal1 },
                { label: "객관식", icon: modal2 },
                { label: "장문형", icon: modal3 },
                { label: "단답형", icon: modal4 },
                { label: "숫자 응답", icon: modal5 },
                { label: "전화번호", icon: modal6 },
                { label: "정보 이용 동의", icon: modal7 },
                { label: "의미 분별 척도", icon: modal8 },
                { label: "리커트 척도", icon: modal9 },
              ].map(({ label, icon }) => (
                <DropdownItem
                  key={label}
                  onClick={() => handleDropdownSelect(label)}
                >
                  <ItemIcon src={icon} alt={label} />
                  {label}
                </DropdownItem>
              ))}
            </DropdownMenu>
          )}
        </DropdownContainer>
      </TitleContainer>
      {renderComponent()}

      {isModalOpen && (
        <AiResponseModal
          response={aiResponse}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 100px;
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: 800;
  color: #000000;
`;

const AIButton = styled.button`
  margin-left: 480px;
  margin-top: -5px;
  border: none;
  background-color: #ffffff;
  cursor: pointer;
`;

const AIImage = styled.img`
  width: 96px;
  height: 30px;
`;

const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 10px;
`;

const DropdownText = styled.span`
  font-size: 20px;
`;

const DropdownArrow = styled.span`
  margin-left: 5px;
`;

const DropdownMenu = styled.div`
  position: absolute;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  z-index: 1000;
  margin-top: 5px;
`;

const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 10px;
  padding-right: 30px;
  cursor: pointer;
  &:hover {
    background-color: #b3e1b8;
  }
`;

const ItemIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
