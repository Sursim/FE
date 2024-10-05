import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import calendar from "../../../assets/images/calendar.png";

export const BasicSettings = ({
  setStartDate,
  setDueDate,
  setPublicAccess,
}) => {
  const [date, setDate] = useState([new Date(), new Date()]);
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const [activeResult, setActiveResult] = useState(null);

  const handleDateImageClick = () => {
    setCalendarOpen(!isCalendarOpen);
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setStartDate(newDate[0]);
    setDueDate(newDate[1]);
    updateDateInput(newDate);
    setCalendarOpen(false);
  };

  const updateDateInput = (newDate) => {
    const startFormatted = formatDate(newDate[0]);
    const dueFormatted = formatDate(newDate[1]);
    setDateInput(`${startFormatted} ~ ${dueFormatted}`);
  };

  const formatDate = (date) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return date.toLocaleDateString("ko-KR", options);
  };

  const [dateInput, setDateInput] = useState("00년 00월 00일 ~ 00년 00월 00일");

  const handleButtonClick = () => {
    setActiveResult("nonactive");
    setPublicAccess("PRIVATE");
  };

  const handleButtonClick2 = () => {
    setActiveResult("active");
    setPublicAccess("SHARED");
  };

  return (
    <Container>
      <TitleContainer>
        <Title>기본 설정</Title>
      </TitleContainer>
      <DateContainer>
        <Text>응답 기한</Text>
        <DateImage src={calendar} alt="달력" onClick={handleDateImageClick} />
        <DateInput value={dateInput} readOnly />
        {isCalendarOpen && (
          <CalendarContainer>
            <Calendar
              onChange={handleDateChange}
              value={date}
              selectRange={true}
            />
          </CalendarContainer>
        )}
      </DateContainer>
      <Underline />
      <ResultContainer>
        <Text>응답 결과 공개</Text>
        <ResultButton1
          isActive={activeResult === "nonactive"}
          onClick={handleButtonClick}
        >
          비공개
        </ResultButton1>
        <ResultText>/</ResultText>
        <ResultButton2
          isActive={activeResult === "active"}
          onClick={handleButtonClick2}
        >
          공개
        </ResultButton2>
      </ResultContainer>
      <Underline />
      <TimeContainer>
        <Text>응답 예상 시간</Text>
        <TimeInput />
        <TimeText>분</TimeText>
      </TimeContainer>
      <Underline2 />
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

const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 50px;
`;

const Text = styled.p`
  font-size: 26px;
  font-weight: 700;
  color: #06070c;
`;

const DateImage = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 10px;
  margin-top: 26px;
  cursor: pointer;
`;

const DateInput = styled.input`
  width: 400px;
  height: 30px;
  border: none;
  margin-left: 490px;
  margin-top: 28px;
  background-color: #ffffff;
  font-size: 25px;
  font-weight: 700;
  color: #cecece;
  &:focus {
    outline: none;
    border-bottom: 1px solid #019a13;
  }
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
  width: 75%;
  border: none;
  border-top: 1px solid #cecece;
  border-color: #cecece;
  margin-left: 45px;
  margin-top: -15px;
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 50px;
  margin-top: 10px;
`;

const ResultButton1 = styled.button`
  border: none;
  cursor: pointer;
  background-color: #ffffff;
  font-size: 25px;
  font-weight: 700;
  color: ${(props) => (props.isActive ? "#019A13" : "#cecece")};
  margin-left: 655px;
`;

const ResultText = styled.p`
  font-size: 25px;
  font-weight: 700;
  color: #cecece;
  margin-left: 5px;
  margin-right: 5px;
`;

const ResultButton2 = styled.button`
  border: none;
  cursor: pointer;
  background-color: #ffffff;
  font-size: 25px;
  font-weight: 700;
  color: ${(props) => (props.isActive ? "#019A13" : "#cecece")};
`;

const TimeContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 50px;
  margin-top: 10px;
`;

const TimeInput = styled.input`
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
  margin-left: 700px;

  &::placeholder {
    color: transparent;
  }
  &:focus {
    outline: none;
    border: 1px solid #019a13;
  }
`;

const TimeText = styled.p`
  font-size: 25px;
  font-weight: 700;
  color: #06070c;
  margin-left: 5px;
`;

const CalendarContainer = styled.div`
  position: absolute;
  top: 480px;
  left: 250px;
  z-index: 10;
`;
