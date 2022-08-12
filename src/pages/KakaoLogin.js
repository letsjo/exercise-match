import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userAction } from "../redux/actions/userAction";

const KakaoLogin = (props) => {
  const dispatch = useDispatch();
  let params = new URL(document.location).searchParams;
  let code = params.get("code");
  console.log(code);

  useEffect(() => {
    dispatch(userAction.kakaoLogin(code));
  }, []);

  return <div>KakaoLogin</div>;
};

export default KakaoLogin;
