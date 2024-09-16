import React, { useState } from "react";
import styled from "styled-components";
import image1 from "../../../assets/icons/Reward/1.png";
import image2 from "../../../assets/icons/Reward/2.png";
import image3 from "../../../assets/icons/Reward/3.png";
import image4 from "../../../assets/icons/Reward/4.png";
import image5 from "../../../assets/icons/Reward/5.png";
import image6 from "../../../assets/icons/Reward/6.png";
import image7 from "../../../assets/icons/Reward/7.png";
import image8 from "../../../assets/icons/Reward/8.png";
import point from "../../../assets/images/point.png";

const rewardsData = [
  {
    id: 1,
    title: "이마트 전용 5천원권",
    points: 5000,
    image: image1,
    size: { width: "10px", height: "5px" },
  },
  {
    id: 2,
    title: "GS25 전용 3천원권",
    points: 5000,
    image: image2,
    size: { width: "121px", height: "51px" },
  },
  {
    id: 3,
    title: "해피콘 전용 3천원권",
    points: 5000,
    image: image3,
    size: { width: "206px", height: "131px" },
  },
  {
    id: 4,
    title: "스타벅스 아메리카노",
    points: 5000,
    image: image4,
    size: { width: "112px", height: "209px" },
  },
  {
    id: 5,
    title: "설빙 전용 5천원권",
    points: 5000,
    image: image5,
    size: { width: "206px", height: "135px" },
  },
  {
    id: 6,
    title: "신세계 전용 5천원권",
    points: 5000,
    image: image6,
    size: { width: "251px", height: "112px" },
  },
  {
    id: 7,
    title: "파리바게트 전용 5천원권",
    points: 5000,
    image: image7,
    size: { width: "168px", height: "187px" },
  },
  {
    id: 8,
    title: "CU 전용 1만원권",
    points: 10000,
    image: image8,
    size: { width: "206px", height: "130px" },
  },
  {
    id: 9,
    title: "CU 전용 1만원권",
    points: 10000,
    image: image8,
    size: { width: "206px", height: "130px" },
  },
  {
    id: 10,
    title: "CU 전용 1만원권",
    points: 10000,
    image: image8,
    size: { width: "206px", height: "130px" },
  },
  {
    id: 11,
    title: "CU 전용 1만원권",
    points: 10000,
    image: image8,
    size: { width: "206px", height: "130px" },
  },
  {
    id: 12,
    title: "CU 전용 1만원권",
    points: 10000,
    image: image8,
    size: { width: "206px", height: "130px" },
  },
  {
    id: 13,
    title: "CU 전용 1만원권",
    points: 10000,
    image: image8,
    size: { width: "206px", height: "130px" },
  },
  {
    id: 14,
    title: "CU 전용 1만원권",
    points: 10000,
    image: image8,
    size: { width: "206px", height: "130px" },
  },
  {
    id: 15,
    title: "CU 전용 1만원권",
    points: 10000,
    image: image8,
    size: { width: "206px", height: "130px" },
  },
  {
    id: 16,
    title: "CU 전용 1만원권",
    points: 10000,
    image: image8,
    size: { width: "206px", height: "130px" },
  },
  {
    id: 17,
    title: "CU 전용 1만원권",
    points: 10000,
    image: image8,
    size: { width: "206px", height: "130px" },
  },
];

const itemsPerPage = 8;

export const RewardList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(rewardsData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const displayedRewards = rewardsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Container>
      <RewardsGrid>
        {displayedRewards.map((reward) => (
          <RewardCard key={reward.id}>
            <CardContainer>
              <RewardImage src={reward.image} alt={reward.title} />
            </CardContainer>
            <RewardDetails key={reward.id}>
              <RewardTitle>{reward.title}</RewardTitle>
              <PointContainer>
                <PointImage src={point} alt="포인트" />
                <Points>{reward.points}</Points>
              </PointContainer>
            </RewardDetails>
          </RewardCard>
        ))}
      </RewardsGrid>
      <Pagination>
        {[...Array(totalPages)].map((_, index) => (
          <PageButton
            key={index}
            onClick={() => handlePageChange(index + 1)}
            active={currentPage === index + 1}
          >
            {index + 1}
          </PageButton>
        ))}
      </Pagination>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const RewardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 290px);
  justify-content: center;
  grid-row-gap: 20px;
  margin-left: 50px;
`;

const RewardCard = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardContainer = styled.div`
  display: flex;
  width: 230px;
  height: 250px;
  border-radius: 25px;
  background-color: #ffffff;
  border: 0.4px solid #ccc;
  box-shadow: 0px 0px 2px 0px #00000040;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RewardImage = styled.img`
  max-width: 70%;
  max-height: 70%;
  margin-bottom: 10px;
`;

const RewardDetails = styled.div`
  margin-left: 20px;
`;

const RewardTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #06070c;
  margin-bottom: 2px;
`;

const PointContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const PointImage = styled.img`
  width: 20px;
  height: 20px;
`;

const Points = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: #06070c;
  margin-top: 2px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageButton = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  color: ${({ active }) => (active ? "#019A13" : "#C5C5C5")};
  text-decoration: ${({ active }) => (active ? "underline" : "none")};
  text-decoration-color: ${({ active }) => (active ? "#019A13" : "#C5C5C5")};
  border: none;
  cursor: pointer;
  background: none;
  font-size: 25px;
  font-weight: 500;

  &:hover {
    color: #019a13;
  }
`;
