import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { locationAction } from "../../redux/actions/locationAction";
import SelectCityCard from "./SelectCityCard";

const SelectLocation = () => {

  const { selectedCity, selectedGu, localsNameList } = useSelector((state) => state.locationReducer);

  return (
    <Container>
      <TitleFrame>
        <TitleZone>어느 지역의 정보를 원하세요?</TitleZone>
      </TitleFrame>
      <ContentsFrame>
        <SelectCityCard localData={{city: "전국",gu: []}} />
        {localsNameList &&
          localsNameList.map((cityInfo, index) => (
            <SelectCityCard key={index} selectedCity={selectedCity} selectedGu={selectedGu} localData={cityInfo} />
          ))}
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
  overflow-y: scroll;
`;

export default SelectLocation;
