import React from "react";
import styled from "styled-components";
import { AiOutlineCheck } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const SelectLocation = () => {
  return (
    <Container>
      <TitleFrame>
        <TitleZone>어느 지역의 정보를 원하세요?</TitleZone>
      </TitleFrame>
      <ContentsFrame>
        <ContentsZone>
          <CitySection>
            <NameZone>전국</NameZone>
            <CheckZone>
              <AiOutlineCheck size={26} />
              {/* <IoIosArrowDown size={26} color="#A8A8A8" /> */}
              {/* <IoIosArrowUp size={26} color="#000000" /> */}
            </CheckZone>
          </CitySection>
        </ContentsZone>
      </ContentsFrame>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const TitleFrame = styled.div`
  width: 550px;
  height: 100px;
`;

const TitleZone = styled.div`
  margin: 32px auto 32px 44px;
  font-weight: 700;
  font-size: 25px;
  line-height: 36px;
`;

const ContentsFrame = styled.div`
  width: 100%;
  flex-grow: 1;
  background-color: #f0f0f0;
`;

const ContentsZone = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

const CitySection = styled.div`
  background-color: white;
  border-top: 1px solid #a8a8a8;
  display: flex;
  flex-direction: row;
`;

const NameZone = styled.div`
  margin: 17px auto 17px 24px;
  font-weight: 700;
  font-size: 25px;
  line-height: 36px;
`;

const CheckZone = styled.div`
  width: 36px;
  height: 36px;
  margin: 17px 29px 17px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default SelectLocation;
