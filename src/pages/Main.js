// package
import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

// components
import NavBar from "../components/public/NavBar";
import SlidBanner from "../components/Main/SlideBanner";
import PopularBoard from "../components/Main/PopularBoard";
import HistoryBoard from "../components/Main/HistoryBoard";
import SelectCategoryBox from "../components/Main/SelectCategoryBox";
import OtherBoard from "../components/Main/OtherBoard";
import CurrentLocationCard from "../components/Main/CurrentLocationCard";
import BannerCate from "../components/Main/BannerCate";
import { locationAction } from "../redux/actions/locationAction";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedCity, selectedGu } = useSelector(
    (state) => state.locationReducer
  );

  useEffect(() => {
    dispatch(locationAction.getLocation());
  }, []);

  const { isLogin } = useSelector((state) => state.userReducer);

  console.log(selectedCity, selectedGu);

  return (
    <MainContainer>
      <NavBar />
      <SlidBanner
        imgsPath={[
          "/images/SliderBanner_01.png",
          "/images/SliderBanner_02.png",
        ]}
      />
      <CurrentLocationCard />
      <SelectCategoryBox />
      {isLogin && <HistoryBoard />}
      <BannerCate
        iconImg=""
        title="HOT 매칭 게시글"
        buttonCate={true}
        selectedCity={selectedCity}
        selectedGu={selectedGu}
      />
      <InputContainer>
        <InputDesign onClick={e=>navigate(`/board?type=matching&cate=gym&city=${selectedCity}&gu=${selectedGu}&page=1&amount=10`)}>
          <img src="/images/bannerSub.png" alt="" />
        </InputDesign>
      </InputContainer>

      <PopularBoard
        iconImg="/images/cate00_gym.png"
        category="gym"
        title="- 실시간 인기 게시글"
        boardUrl={`/board?type=matching&cate=gym&city=${selectedCity}&gu=${selectedGu}&page=1&amount=10`}
      />
      <PopularBoard
        iconImg="/images/cate01_running.png"
        category="running"
        title="- 실시간 인기 게시글"
        boardUrl={`/board?type=matching&cate=running&city=${selectedCity}&gu=${selectedGu}&page=1&amount=10`}
      />
      <PopularBoard
        iconImg="/images/cate03_badminton.png"
        category="badminton"
        title="- 실시간 인기 게시글"
        boardUrl={`/board?type=matching&cate=badminton&city=${selectedCity}&gu=${selectedGu}&page=1&amount=10`}
      />
      <PopularBoard
        iconImg="/images/cate04_tennis.png"
        category="tennis"
        title="- 실시간 인기 게시글"
        boardUrl={`/board?type=matching&cate=tennis&city=${selectedCity}&gu=${selectedGu}&page=1&amount=10`}
      />
      <PopularBoard
        iconImg="/images/cate05_riding.png"
        category="riding"
        title="- 실시간 인기 게시글"
        boardUrl={`/board?type=matching&cate=riding&city=${selectedCity}&gu=${selectedGu}&page=1&amount=10`}
      />
      <PopularBoard
        iconImg="/images/cate06_golf.png"
        category="golf"
        title="- 실시간 인기 게시글"
        boardUrl={`/board?type=matching&cate=golf&city=${selectedCity}&gu=${selectedGu}&page=1&amount=10`}
      />
      <OtherBoard
        iconImg="/images/cate07_etc.png"
        category="hiking"
        title="[기타] - 실시간 인기 게시글"
        boardUrl={`/board?type=matching&cate=etc&city=${selectedCity}&gu=${selectedGu}&page=1&amount=10`}
      />
    </MainContainer>
  );
};

const MainContainer = styled.div``;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  cursor: pointer;
`;

const InputDesign = styled.div`
  width: 1010px;
  img {
    width: 100%;
  }
`;

export default Main;
