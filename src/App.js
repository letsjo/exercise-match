//packages
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { useChannelIOApi, useChannelIOEvent } from "react-channel-plugin";

// components
import NavBar from "./components/NavBar";

//pages
import Main from "./pages/Main";
import Login from "./pages/Login";
import KakaoLogin from "./pages/KakaoLogin";

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
        <Route path="/kakaologin" element={<KakaoLogin />} />
      </Routes>
      <span onClick={showMessenger}></span>
    </div>
  );
}

export default App;
