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

  useEffect(()=>{
    dispatch(locationAction.getLocation());
  },[])

  const { isLogin } = useSelector((state) => state.userReducer);

  console.log(selectedCity, selectedGu);

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
      <CurrentLocationCard />
      <SelectCategoryBox />
      {isLogin && <HistoryBoard />}
      <BannerCate
        iconImg=""
        title="HOT 매칭 게시글"
        boardUrl={`/board?type=matching&cate=gym&city=${selectedCity}&gu=${selectedGu}&page=1&amount=10`}
        buttonCate={true}
      />
      <InputContainer>
        <InputDesign onClick={e=>navigate("/")}>
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
        category="etc"
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
`;

const InputDesign = styled.div`
  width: 1010px;
  img {
    width: 100%;
  }
`;

export default Main;
