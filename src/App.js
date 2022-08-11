import styled from "styled-components";
import NavBar from "./components/NavBar";
import Sweetalert from "./components/Sweetalert";
import Login from "./components/Login";
import KakaoLogin from "./components/KakaoLogin";
import { useChannelIOApi, useChannelIOEvent } from "react-channel-plugin";
import { Route, Routes } from "react-router-dom";
import OtherPostCard from "./components/OtherPostCard";
import SlidBanner from "./components/SlideBanner";
import BoardHistory from "./components/BoardHistory";
import SlideComponents from "./components/SlideComponents";
import PopularBoard from "./components/PopularBoard";
import OtherPostCardBig from "./components/OtherPostCardBig";
import SelectCategoryBox from "./components/SelectCategoryBox";

function App() {
  const { showMessenger } = useChannelIOApi();

  useChannelIOEvent("onShowMessenger", () => {
    console.log("Messenger opened!");
  });

  return (
    <div>
      <NavBar />
      <Sweetalert />
      {/* <Login /> */}
      {/* <OtherPostCardBig/> */}
      {/* <SelectCategoryBox/> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/kakaologin" element={<KakaoLogin />} />
      </Routes>
      <span onClick={showMessenger}></span>
    </div>
  );
}

export default App;
