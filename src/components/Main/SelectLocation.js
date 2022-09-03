import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { locationAction } from "../../redux/actions/locationAction";
import SelectCityCard from "./SelectCityCard";

const SelectLocation = () => {
  // const tmpLocalName = [
  //   {
  //     city: "전국",
  //     gu: [],
  //   },
  //   {
  //     city: "서울",
  //     gu: [
  //       "종로구",
  //       "중구",
  //       "용산구",
  //       "성동구",
  //       "광진구",
  //       "동대문구",
  //       "중랑구",
  //       "성북구",
  //       "강북구",
  //       "도봉구",
  //       "노원구",
  //       "은평구",
  //       "서대문구",
  //       "마포구",
  //       "양천구",
  //       "강서구",
  //       "구로구",
  //       "금천구",
  //       "영등포구",
  //       "동작구",
  //       "관악구",
  //       "서초구",
  //       "강남구",
  //       "송파구",
  //       "강동구",
  //     ],
  //   },
  //   {
  //     city: "대구",
  //     gu: [
  //       "중구",
  //       "동구",
  //       "서구",
  //       "남구",
  //       "북구",
  //       "수성구",
  //       "달서구",
  //       "달성군",
  //     ],
  //   },
  //   {
  //     city: "부산",
  //     gu: [
  //       "중구",
  //       "서구",
  //       "동구",
  //       "영도구",
  //       "부산진구",
  //       "동래구",
  //       "북구",
  //       "해운대구",
  //       "사하구",
  //       "금정구",
  //       "강서구",
  //       "연제구",
  //       "수영구",
  //       "사상구",
  //       "기장군",
  //     ],
  //   },
  // ];

  const { localsNameList } = useSelector((state)=> state.locationReducer)

  return (
    <Container>
      <TitleFrame>
        <TitleZone>어느 지역의 정보를 원하세요?</TitleZone>
      </TitleFrame>
      <ContentsFrame>
        {localsNameList &&
          localsNameList.map((cityInfo, index) => (
            <SelectCityCard
              key={index}
              localData={cityInfo}
            />
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
