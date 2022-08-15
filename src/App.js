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
        <Route path="/api/kakaologin" element={<KakaoLogin />} />
      </Routes>
      <span onClick={showMessenger}></span>
    </div>
  );
}

export default App;
