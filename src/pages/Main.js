// package
import React, { useEffect } from "react";
import styled from "styled-components";

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
  return (
    <MainContainer>
      <NavBar />
      <SlidBanner
        imgsPath={[
          "https://placehold.jp/1440x360.png",
          "https://placehold.jp/1440x360.png",
          "https://placehold.jp/1440x360.png",
        ]}
      />
      <CurrentLocationCard/>
      <SelectCategoryBox />
      <HistoryBoard />
      <PopularBoard
        iconImg="https://cdn-icons-png.flaticon.com/512/3066/3066961.png"
        title="헬스 실시간 인기 게시글"
        boardUrl="#"
      />
      <PopularBoard
        iconImg="https://cdn-icons-png.flaticon.com/512/2528/2528207.png"
        title="테니스 실시간 인기 게시글"
        boardUrl="#"
      />
      <OtherBoard />
    </MainContainer>
  );
};

const MainContainer = styled.div``;

export default Main;
