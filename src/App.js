import styled from "styled-components";
import NavBar from "./components/NavBar";
import Sweetalert from "./components/Sweetalert";
import Login from "./components/Login";
import KakaoLogin from "./components/KakaoLogin";
import { useChannelIOApi, useChannelIOEvent } from "react-channel-plugin";
import { Route, Routes } from "react-router-dom";

function App() {
  const { showMessenger } = useChannelIOApi();

  useChannelIOEvent("onShowMessenger", () => {
    console.log("Messenger opened!");
  });

  return (
    <div>
      <NavBar />
      <Sweetalert />
      <Login />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/kakaologin" element={<KakaoLogin />} />
      </Routes>
      <span onClick={showMessenger}></span>
    </div>
  );
}

export default App;
