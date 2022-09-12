import React, { useEffect } from "react";
import { useDispatch} from "react-redux";
import { userAction } from "../redux/actions/userAction";
import { useNavigate } from "react-router-dom";

const KakaoLogin = (props) => {
  const dispatch = useDispatch();
  const navigate =useNavigate();
  let params = new URL(document.location).searchParams;
  let code = params.get("code");
  console.log(code);


  useEffect(() => {
    dispatch(userAction.kakaoLogin(code));
    navigate("/");
  }, []);
 

  return (<div>KakaoLogin</div>);
};

export default KakaoLogin;