// package
import React from "react";
import styled from "styled-components";

// components
import NavBar from "../components/NavBar";
import SlidBanner from "../components/SlideBanner";
import PopularBoard from "../components/PopularBoard";
import HistoryBoard from "../components/HistoryBoard";
import SelectCategoryBox from "../components/SelectCategoryBox";
import OtherBoard from "../components/OtherBoard";

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
