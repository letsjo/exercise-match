// package
import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

// components
import NavBar from "../components/public/NavBar";
import SlidBanner from "../components/Main/SlideBanner";
import PopularBoard from "../components/Main/PopularBoard";
import HistoryBoard from "../components/Main/HistoryBoard";
import SelectCategoryBox from "../components/Main/SelectCategoryBox";
import OtherBoard from "../components/Main/OtherBoard";
import CurrentLocationCard from "../components/Main/CurrentLocationCard";
import { useDispatch } from "react-redux";
import { modalSliceAction } from "../redux/reducers/modalReducer";

const Main = () => {
    
  const { selectedCity, selectedGu } = useSelector(
    (state) => state.locationReducer
  );

  return (
    <MainContainer>
      <NavBar />
      <SlidBanner
        imgsPath={[
          "https://www.sciencetimes.co.kr/wp-content/uploads/2021/04/GettyImages-1128647143-scaled.jpg",
          "https://mblogthumb-phinf.pstatic.net/20160723_117/rimiy_1469204735492fnEcr_JPEG/3.jpeg?type=w2",
          "https://activeinternational.kr/wp-content/uploads/2021/08/%EA%B3%A8%ED%94%84%EC%9E%A5-Golf-Course.jpg",
        ]}
      />
      <CurrentLocationCard/>
      <SelectCategoryBox />
      <HistoryBoard />
      <PopularBoard
        iconImg="https://cdn-icons-png.flaticon.com/512/3066/3066961.png"
        title="헬스 실시간 인기 게시글"
        boardUrl={`/board?type=matching&cate=gym&city=${selectedCity}&gu=${selectedGu}&page=1&amount=12`}
      />
      <PopularBoard
        iconImg="https://cdn-icons-png.flaticon.com/512/2528/2528207.png"
        title="테니스 실시간 인기 게시글"
        boardUrl={`/board?type=matching&cate=tennis&city=${selectedCity}&gu=${selectedGu}&page=1&amount=12`}
      />
      <OtherBoard />
    </MainContainer>
  );
};

const MainContainer = styled.div``;

export default Main;


