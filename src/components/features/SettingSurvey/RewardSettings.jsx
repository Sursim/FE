import React, { useState } from "react";
import styled from "styled-components";
import uploadbtn from "../../../assets/images/buttons/uploadbtn.png";

export const RewardsSettings = ({
  setRewardType,
  setRewardCount,
  setRewardImage,
}) => {
  const [activeRewardType, setActiveRewardType] = useState(null);
  const [rewardCount, setRewardCountState] = useState(0);
  const [rewardImage, setRewardImageState] = useState("000.jpg");

  const handleButtonClick = () => {
    setActiveRewardType("random");
    setRewardType("RANDOM");
  };

  const handleButtonClick2 = () => {
    setActiveRewardType("firstCome");
    setRewardType("SEQUENTIAL");
  };

  const handleRewardCountChange = (event) => {
    const count = event.target.value;
    setRewardCountState(count);
    setRewardCount(count); // 부모 컴포넌트로 리워드 갯수 전달
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setRewardImageState(file.name); // 파일 이름 저장
      setRewardImage(file); // 부모 컴포넌트로 리워드 이미지 전달
    }
  };

  return (
    <Container>
      <TitleContainer>
        <Title>응답자 설정</Title>
      </TitleContainer>
      <TypeContainer>
        <Text>추가 리워드 유형</Text>
        <TypeInput />
      </TypeContainer>
      <Underline1 />
      <ImageContainer>
        <Text>추가 리워드 사진</Text>
        <input
          type="file"
          onChange={handleImageChange}
          style={{ display: "none" }}
          id="file-input"
        />
        <Image
          src={uploadbtn}
          alt="리워드 사진"
          onClick={() => document.getElementById("file-input").click()}
        />
        <ImageText>{rewardImage}</ImageText>
      </ImageContainer>
      <Underline />
      <CountContainer>
        <Text>추가 리워드 갯수</Text>
        <CountInput
          type="text"
          value={rewardCount}
          onChange={handleRewardCountChange}
        />
        <CountText>개</CountText>
      </CountContainer>
      <Underline2 />
      <RewardContainer>
        <Text>추가 리워드 제공 방식</Text>
        <RewardButton1
          isActive={activeRewardType === "random"}
          onClick={handleButtonClick}
        >
          랜덤추첨
        </RewardButton1>
        <RewardText>/</RewardText>
        <RewardButton2
          isActive={activeRewardType === "firstCome"}
          onClick={handleButtonClick2}
        >
          선착순
        </RewardButton2>
      </RewardContainer>
      <Underline />
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

const TypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 50px;
  margin-top: 10px;
`;

const TypeInput = styled.input`
  width: 250px;
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
  margin-left: 500px;

  &::placeholder {
    color: transparent;
  }
  &:focus {
    outline: none;
    border: 1px solid #019a13;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 50px;
  margin-top: 10px;
`;

const Image = styled.img`
  width: 35px;
  height: 35px;
  margin-left: 10px;
  margin-top: 22px;
  cursor: pointer;
`;

const ImageText = styled.p`
  font-size: 25px;
  font-weight: 700;
  color: #cecece;
  margin-left: 630px;
`;

const CountContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 50px;
  margin-top: 10px;
`;

const CountInput = styled.input`
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
  margin-left: 670px;

  &::placeholder {
    color: transparent;
  }
  &:focus {
    outline: none;
    border: 1px solid #019a13;
  }
`;

const CountText = styled.p`
  font-size: 25px;
  font-weight: 700;
  color: #06070c;
  margin-left: 5px;
`;

const RewardContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 50px;
  margin-top: 10px;
`;

const RewardButton1 = styled.button`
  border: none;
  cursor: pointer;
  background-color: #ffffff;
  font-size: 25px;
  font-weight: 700;
  color: ${(props) => (props.isActive ? "#019A13" : "#cecece")};
  margin-left: 535px;
`;

const RewardText = styled.p`
  font-size: 25px;
  font-weight: 700;
  color: #cecece;
  margin-left: 5px;
  margin-right: 5px;
`;

const RewardButton2 = styled.button`
  border: none;
  cursor: pointer;
  background-color: #ffffff;
  font-size: 25px;
  font-weight: 700;
  color: ${(props) => (props.isActive ? "#019A13" : "#cecece")};
`;

const Underline = styled.hr`
  width: 88%;
  border: none;
  border-top: 1px solid #cecece;
  border-color: #cecece;
  margin-left: 45px;
  margin-top: -15px;
`;

const Underline1 = styled.hr`
  width: 60%;
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
