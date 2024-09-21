import React, { useState } from "react";
import styled from "styled-components";
import modal1 from "../../../assets/images/checkbox/modal1.png";
import modal2 from "../../../assets/images/checkbox/modal2.png";
import modal3 from "../../../assets/images/checkbox/modal3.png";
import modal4 from "../../../assets/images/checkbox/modal4.png";
import modal5 from "../../../assets/images/checkbox/modal5.png";
import modal6 from "../../../assets/images/checkbox/modal6.png";
import modal7 from "../../../assets/images/checkbox/modal7.png";
import modal8 from "../../../assets/images/checkbox/modal8.png";
import modal9 from "../../../assets/images/checkbox/modal9.png";

export const CheckboxModal = ({ isOpen, onClose, anchorRef }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  if (!isOpen) return null;
  const { top, left } = anchorRef.current.getBoundingClientRect();

  const handleCheckboxClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <ModalOverlay onClick={onClose} style={{ top: top + 40, left: left }}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <ModalCheckbox
          isSelected={selectedIndex === 0}
          onClick={() => handleCheckboxClick(0)}
        >
          <Image1 src={modal1} alt="modal1" />
          <Text>체크박스</Text>
        </ModalCheckbox>
        <ModalCheckbox
          isSelected={selectedIndex === 1}
          onClick={() => handleCheckboxClick(1)}
        >
          <Image2 src={modal2} alt="modal2" />
          <Text>객관식</Text>
        </ModalCheckbox>
        <Underline />
        <ModalCheckbox
          isSelected={selectedIndex === 2}
          onClick={() => handleCheckboxClick(2)}
        >
          <Image3 src={modal3} alt="modal3" />
          <Text>장문형</Text>
        </ModalCheckbox>
        <ModalCheckbox
          isSelected={selectedIndex === 3}
          onClick={() => handleCheckboxClick(3)}
        >
          <Image4 src={modal4} alt="modal4" />
          <Text>단답형</Text>
        </ModalCheckbox>
        <ModalCheckbox
          isSelected={selectedIndex === 4}
          onClick={() => handleCheckboxClick(4)}
        >
          <Image5 src={modal5} alt="modal5" />
          <Text>숫자 응답</Text>
        </ModalCheckbox>
        <Underline />
        <ModalCheckbox
          isSelected={selectedIndex === 5}
          onClick={() => handleCheckboxClick(5)}
        >
          <Image6 src={modal6} alt="modal6" />
          <Text>전화번호</Text>
        </ModalCheckbox>
        <ModalCheckbox
          isSelected={selectedIndex === 6}
          onClick={() => handleCheckboxClick(6)}
        >
          <Image7 src={modal7} alt="modal7" />
          <Text>정보 이용 동의</Text>
        </ModalCheckbox>
        <ModalCheckbox
          isSelected={selectedIndex === 7}
          onClick={() => handleCheckboxClick(7)}
        >
          <Image8 src={modal8} alt="modal8" />
          <Text>의미 분별 척도</Text>
        </ModalCheckbox>
        <ModalCheckbox
          isSelected={selectedIndex === 8}
          onClick={() => handleCheckboxClick(8)}
        >
          <Image9 src={modal9} alt="modal9" />
          <Text>리커트 척도</Text>
        </ModalCheckbox>
      </ModalBox>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background: rgba(0, 0, 0, 0);
`;

const ModalBox = styled.div`
  width: 280px;
  height: 480px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
  padding: 10px;
`;

const ModalCheckbox = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-left: 20px;
  background-color: ${({ isSelected }) => (isSelected ? "#B3E1B8" : "#FFFFFF")};
  cursor: pointer;
  border-radius: 8px;
  align-items: center;
`;

const Image1 = styled.img`
  width: 20px;
  height: 20px;
`;

const Image2 = styled.img`
  width: 20px;
  height: 20px;
`;

const Image3 = styled.img`
  width: 20px;
  height: 12.8px;
  margin-top: 5px;
`;

const Image4 = styled.img`
  width: 20px;
  height: 8px;
  margin-top: 5px;
`;

const Image5 = styled.img`
  width: 20px;
  height: 18px;
`;
const Image6 = styled.img`
  width: 20px;
  height: 20px;
`;

const Image7 = styled.img`
  width: 20px;
  height: 20px;
`;

const Image8 = styled.img`
  width: 20px;
  height: 16.2px;
`;

const Image9 = styled.img`
  width: 20px;
  height: 6px;
  margin-top: 10px;
`;

const Text = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #383838;
  text-align: center;
`;

const Underline = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #cecece;
  border-color: #cecece;
`;
