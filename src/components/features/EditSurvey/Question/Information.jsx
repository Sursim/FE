import React, { useState } from "react";
import styled from "styled-components";

export const Information = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };
  return (
    <Container>
      <TitleContainer>
        <Title>
          아래는 범용적으로 사용할 수 있는 정보 이용 동의 문항의 예시입니다.
        </Title>
        <Title2>필요에 따라 세부 내용을 추가하거나 수정하여 사용하세요.</Title2>
      </TitleContainer>
      <Underline />
      <Subtitle>정보 이용 동의서</Subtitle>
      <DescriptionContainer>
        <DescriptionText>
          본 설문조사는 <BoldText>[조사의 목적]</BoldText>을 위해 실시됩니다.
          귀하의 응답은 연구 목적으로만 사용되며, 개인정보는 철저히 보호됩니다.
          <br />
          수집하는 정보의 내용: 본 조사에서는{" "}
          <BoldText>[수집 정보 예: 연령, 성별, 직업 등]</BoldText>에 관한 정보를
          수집합니다.
          <br />
          정보의 이용 목적: 귀하의 정보는 연구 분석과 결과를 보고서 작성에
          사용됩니다. 모든 응답은 익명으로 처리되며, 구체적인 개인을 식별할 수
          없는 형태로만 결과가 공개됩니다.
          <br />
          정보의 보유 및 이용 기간: 조사 종료 후{" "}
          <BoldText>[보유 기간 예: 1년]</BoldText> 동안 보유하며, 이후 안전하게
          파기합니다.
          <br />
          동의 철회 권리: 귀하는 언제든지 연구 참여를 철회할 수 있으며, 이 경우
          수집된 정보는 연구에 제어되고 파기됩니다.
          <br />
          연락처: 연구에 관한 질문이 있을 경우,{" "}
          <BoldText>[연구자 연락처 혹은 연구 기관 연락처]</BoldText>로 연락
          주시기 바랍니다.
          <br />본 동의서의 내용을 충분히 이해하였으며, 이에 동의하십니까?
        </DescriptionText>
      </DescriptionContainer>
      <AgreementContainer>
        <AgreeOption onClick={() => handleOptionChange("no")}>
          <CircleButton selected={selectedOption === "no"} />
          <Label>동의하지 않음</Label>
        </AgreeOption>
        <AgreeOption onClick={() => handleOptionChange("yes")}>
          <CircleButton selected={selectedOption === "yes"} />
          <Label>동의함</Label>
        </AgreeOption>
      </AgreementContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 80px;
  width: 830px;
  height: 530px;
  border-radius: 30px;
  border: 1px solid #cecece;
  background-color: #ffffff;
`;

const TitleContainer = styled.div`
  margin-top: 20px;
  margin-left: 30px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #cecece;
`;

const Title2 = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #cecece;
  margin-top: -15px;
`;

const Underline = styled.hr`
  width: 88%;
  border: none;
  border-top: 1px solid #cecece;
  border-color: #cecece;
  margin-left: 30px;
  margin-top: -15px;
`;

const Subtitle = styled.h3`
  font-size: 20px;
  font-weight: 800;
  color: #019a13;
  margin-top: 10px;
  margin-left: 30px;
`;

const DescriptionContainer = styled.div`
  margin-left: 30px;
  margin-right: 30px;
  margin-top: -25px;
`;

const DescriptionText = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: #383838;
`;

const BoldText = styled.span`
  font-weight: 800;
`;

const AgreementContainer = styled.div`
  margin-top: -10px;
  margin-left: 530px;
  display: flex;
  flex-direction: row;
`;

const AgreeOption = styled.div`
  display: flex;
  flex-direction: row;
`;

const CircleButton = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid ${({ selected }) => (selected ? "#019a13" : "#383838")};
  background-color: ${({ selected }) => (selected ? "#019a13" : "transparent")};
  margin-right: 8px;
  cursor: pointer;
`;

const Label = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #383838;
  margin-top: 3px;
  margin-right: 10px;
`;
