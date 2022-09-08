import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userAction } from "../redux/actions/userAction";
import { userSliceAction } from "../redux/reducers/userReducer";
import userAPI from "../apis/userAPI";

const GoogleLogin = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let params = new URL(document.location).searchParams;
  let access_Token = "Bearer " + params.get("access_Token");
  let refresh_Token = "Bearer " + params.get("refresh_Token");
  let username = params.get("username");
  let nickname = decodeURI(params.get("nickname"));
  let profile = params.get("profile");
  console.log("access_Token", access_Token);
  console.log("refresh_Token", refresh_Token);
  console.log("username", username);
  console.log("nickname", nickname);
  console.log("profile", profile);

  userAPI.defaults.headers.common["accesstoken"] = access_Token;
  userAPI.defaults.headers.common["refreshtoken"] = refresh_Token;

  let sessionStorageLogin = sessionStorage;
  sessionStorageLogin.setItem("accesstoken", access_Token);
  sessionStorageLogin.setItem("refreshtoken", refresh_Token);
  sessionStorageLogin.setItem("nickname", nickname); //닉네임
  sessionStorageLogin.setItem("username", username); //아이디
  sessionStorageLogin.setItem("profile", profile); //프로필 사진

  dispatch(userSliceAction.setLogin({username, nickname, profile}));
 
  useEffect(()=>{
    navigate("/")
  })

  // useEffect(() => {
  //   try{
  //       dispatch(userSliceAction.setGoogleLogin());
  //       navigate("/");
  //   }catch(e){
  //       console.log(e);
  //   }

  // }, []);

  return <div>GoogleLogin</div>;
};

export default GoogleLogin;
