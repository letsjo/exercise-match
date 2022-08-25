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
import Board from "./pages/Board";
import Mypage from "./pages/Mypage";
import Review from "./pages/Review";
import UserInfo from "./pages/UserInfo";
import ModalComponents from "./components/public/ModalComponents";
import PostWrite from "./pages/PostWrite";
import Detailpage from "./pages/Detailpage";


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
        <Route path="/board" element={<Board/>}/>
        <Route path="/postWrite" element={<PostWrite/>}/>
        <Route path="/mypage" element={<Mypage/>}/>
        <Route path="/userinfo" element={<UserInfo/>}/>
        <Route path="/review" element={<Review/>}/>
        <Route path="/detailpage" element={<Detailpage/>}/>
        <Route path="/api/kakaologin" element={<KakaoLogin/>} />
        <Route path="/api/naverLogin" element={<NaverLogin/>}/>
      </Routes>
      <ModalComponents/>
      <span onClick={showMessenger}></span>
    </div>
  );
}

export default App;
