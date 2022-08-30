//packages
import { useEffect } from "react";
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
import { useDispatch } from "react-redux";
import { locationAction } from "./redux/actions/locationAction";
import { userSliceAction } from "./redux/reducers/userReducer";
import PasswordChange from "./pages/PasswordChange";
import PasswordFind from "./pages/PasswordFind";
import userAPI from "./apis/userAPI";


export let sessionStorageLogin = sessionStorage;
export const is_authorization = sessionStorage.getItem("accesstoken")
  ? true
  : false;

function App() {
  const dispatch = useDispatch();

  const { showMessenger } = useChannelIOApi();
  useChannelIOEvent("onShowMessenger", () => {
    console.log("Messenger opened!");
  });

  useEffect(() => {
    dispatch(locationAction.getLocation());
  }, []);

  useEffect(() => {
    console.log(is_authorization);
    if (is_authorization) {
      userAPI.defaults.headers.common["accesstoken"] =
        sessionStorage.getItem("accesstoken");
      userAPI.defaults.headers.common["refreshtoken"] =
        sessionStorage.getItem("refreshtoken");
        console.log(sessionStorage.getItem("accesstoken"));
        console.log(sessionStorage.getItem("refreshtoken"));
        dispatch(userSliceAction.setLogin({username:sessionStorage.getItem("username")}))
    }
  }, []);

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/board" element={<Board/>}/>
        <Route path="/postWrite" element={<PostWrite/>}/>
        <Route path="/mypage" element={<Mypage/>}/>
        <Route path="/userinfo" element={<UserInfo/>}/>
        <Route path="/review" element={<Review/>}/>
        <Route path="/detail/:id" element={<Detailpage/>}/>
        <Route path="/passwordFind" element={<PasswordFind/>}/>
        <Route path="/passwordChange" element={<PasswordChange/>}/>
        <Route path="/api/kakaologin" element={<KakaoLogin/>} />
        <Route path="/api/naverLogin" element={<NaverLogin/>}/>
      </Routes>
      <ModalComponents />
      <span onClick={showMessenger}></span>
    </Container>
  );
}

const Container = styled.div`
  user-select: none;
`

export default App;
