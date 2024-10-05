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

  const handleOptionChange = (index, value) => {
    const updatedOptions = options.map((option, i) =>
      i === index ? value : option
    );
    setOptions(updatedOptions);
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === question.id ? { ...q, options: updatedOptions } : q
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
    <Container height={options.length * 50 + 150}>
      <DescriptionContainer>
        <Input
          type="text"
          placeholder="질문을 작성해주세요."
          value={question.question}
          onChange={handleQuestionChange}
        />
        {options.map((option, index) => (
          <OptionContainer key={index}>
            <OptionImage src={circle} alt="응답" />
            <OptionInput
              type="text"
              placeholder={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
            />
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
  height: ${(props) => props.height}px;
  border-radius: 30px;
  border: 1px solid #cecece;
  background-color: #ffffff;
`;

const DescriptionContainer = styled.div`
  width: 100%
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
  width: 25px;
  height: 25px;
`;

const OptionInput = styled.input`
  width: 150px;
  margin-bottom: 20px;
  margin-top: -10px;
  margin-left: 20px;
  border: none;
  border-bottom: 1px solid #cecece;
  padding: 10px 0;
  &:placeholder {
    font-size: 17px;
    font-weight: 400;
    color: #c5c5c5;
  }
  &:focus {
    outline: none;
    border-bottom: 1px solid #019a13;
  }
`;

const DeleteOptionButton = styled.button`
  margin-left: 50px;
  border: none;
  background-color: #ffffff;
  cursor: pointer;
`;

const DeleteButtonImage = styled.img`
  width: 25px;
  height: 25px;
`;

const AddOptionButton = styled.button`
  margin-top: 10px;
  margin-left: 25px;
  border: none;
  background-color: #ffffff;
  cursor: pointer;
`;

const AddButtonImage = styled.img`
  width: 25px;
  height: 25px;
`;
