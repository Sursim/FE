import React, { useState } from "react";
import styled from "styled-components";
import addbtn from "../../../../assets/images/buttons/addbtn.png";
import circle from "../../../../assets/images/circle.png";
import deletebtn from "../../../../assets/images/buttons/deletebtn.png";

export const Checkbox = ({ question = { options: [] }, setQuestions }) => {
  const [options, setOptions] = useState([...question.options]);

  const handleQuestionChange = (e) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === question.id ? { ...q, question: e.target.value } : q
      )
    );
  };

  const handleDeleteOption = (index) => {
    setOptions((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAddOption = () => {
    const newOption = `응답 ${options.length + 1}`;
    setOptions((prev) => [...prev, newOption]);
  };
  return (
    <Container>
      <DescriptionContainer height={options.length * 50 + 150}>
        <Input
          type="text"
          placeholder="질문을 작성해주세요."
          value={question.question}
          onChange={handleQuestionChange}
        />
        {options.map((option, index) => (
          <OptionContainer key={index}>
            <OptionImage src={circle} alt="응답" />
            <OptionText>{option}</OptionText>{" "}
            <DeleteOptionButton onClick={() => handleDeleteOption(index)}>
              <DeleteButtonImage src={deletebtn} alt="응답 삭제" />
            </DeleteOptionButton>
          </OptionContainer>
        ))}
        <AddOptionButton onClick={handleAddOption}>
          <AddButtonImage src={addbtn} alt="응답 추가" />
        </AddOptionButton>
      </DescriptionContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 80px;
  width: 830px;
  height: 250px;
  border-radius: 30px;
  border: 1px solid #cecece;
  background-color: #ffffff;
`;

const DescriptionContainer = styled.div`
  width: 100%
  height: ${(props) => props.height}px;
  margin-top: 10px;
  margin-left: 30px;
  background-color: #ffffff;
  border: none;
  border-radius: 24px;
`;

const Input = styled.input`
  width: 700px;
  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: 30px;
  border: none;
  border-bottom: 1px solid #cecece;
  padding: 10px 0;
  &:focus {
    outline: none;
    border-bottom: 1px solid #019a13;
  }
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 30px;
  gap: 10px;
`;

const OptionImage = styled.img`
  width: 30px;
  height: 30px;
`;

const OptionText = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #c5c5c5;
  margin-top: 0px;
`;

const DeleteOptionButton = styled.button`
  margin-left: 325px;
  border: none;
  background-color: #ffffff;
  cursor: pointer;
`;

const DeleteButtonImage = styled.img`
  width: 30px;
  height: 30px;
`;

const AddOptionButton = styled.button`
  margin-top: 10px;
  margin-left: 25px;
  border: none;
  background-color: #ffffff;
  cursor: pointer;
`;

const AddButtonImage = styled.img`
  width: 30px;
  height: 30px;
`;
