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

const Main = () => {
  const dispatch = useDispatch();
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
        <InputDesign>
          <img src="/images/bannerSub.png" alt="" />
        </InputDesign>
      </InputContainer>

      <PopularBoard
        iconImg="/images/cate00_gym.png"
        title="- 실시간 인기 게시글"
        boardUrl={`/board?type=matching&cate=gym&city=${selectedCity}&gu=${selectedGu}&page=1&amount=10`}
      />
      <PopularBoard
        iconImg="/images/cate04_tennis.png"
        title="- 실시간 인기 게시글"
        boardUrl={`/board?type=matching&cate=tennis&city=${selectedCity}&gu=${selectedGu}&page=1&amount=10`}
      />
      <OtherBoard
        iconImg=""
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
