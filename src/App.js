import styled from "styled-components";
import NavBar from "./components/NavBar";
import Sweetalert from "./components/Sweetalert";
import Login from "./components/Login";
import KakaoLogin from "./components/KakaoLogin";
import { useChannelIOApi, useChannelIOEvent } from "react-channel-plugin";
import { Route, Routes } from "react-router-dom";
import OtherPostCard from "./components/OtherPostCard";
import SlidBanner from "./components/SlideBanner";
import SlideComponents from "./components/SlideComponents";
import PopularBoard from "./components/PopularBoard";
import HistoryBoard from "./components/HistoryBoard";
import OtherPostCardBig from "./components/OtherPostCardBig";
import SelectCategoryBox from "./components/SelectCategoryBox";
import OtherBoard from "./components/OtherBoard";

function App() {
  const { showMessenger } = useChannelIOApi();

  useChannelIOEvent("onShowMessenger", () => {
    console.log("Messenger opened!");
  });

  return (
    <div>
      <NavBar />
      <SlidBanner imgsPath={["https://placehold.jp/1440x360.png","https://placehold.jp/1440x360.png"]}/>
      <SelectCategoryBox/>
      <HistoryBoard/>
      <PopularBoard iconImg="https://cdn-icons-png.flaticon.com/512/3066/3066961.png" title="헬스 실시간 인기 게시글" boardUrl="#"/>
      <PopularBoard iconImg="https://cdn-icons-png.flaticon.com/512/2528/2528207.png" title="테니스 실시간 인기 게시글" boardUrl="#"/>
      <OtherBoard/>
      <Sweetalert />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/kakaologin" element={<KakaoLogin />} />
      </Routes>
      <span onClick={showMessenger}></span>
    </div>
  );
}

export default App;
