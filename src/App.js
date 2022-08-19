//packages
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { useChannelIOApi, useChannelIOEvent } from "react-channel-plugin";

// components

//pages
import Main from "./pages/Main";
import Login from "./pages/Login";
import KakaoLogin from "./pages/KakaoLogin";
import Signup from "./pages/Signup";
import NaverLogin from "./pages/NaverLogin";
import BulletinBoard from "./pages/BulletinBoard";
import Mypage from "./pages/Mypage";
import Review from "./pages/Review";
import MatchingBoard from "./pages/MatchingBoard";
import UserInfo from "./pages/UserInfo";

function App() {
  const { showMessenger } = useChannelIOApi();
  useChannelIOEvent("onShowMessenger", () => {
    console.log("Messenger opened!");
  });

  return (
    
    <div>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/bulletinBoard" element={<BulletinBoard/>}/>
        <Route path="/matchingBoard" element={<MatchingBoard/>}/>
        <Route path="/mypage" element={<Mypage/>}/>
        <Route path="/userinfo" element={<UserInfo/>}/>
        <Route path="/review" element={<Review/>}/>
        <Route path="/api/kakaologin" element={<KakaoLogin/>} />
        <Route path="/api/naverLogin" element={<NaverLogin/>}/>
      </Routes>
      <span onClick={showMessenger}></span>
    </div>
  );
}

export default App;
