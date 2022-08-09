import React from "react";

const Login = () => {
  const REST_API_KEY = "77c5975ead488c768a11d49f9320425c";
  const REDIRECT_URI = "http://localhost:3000/kakaoLogin";
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  

  const kakaoLogin = () => {
    window.location.href = kakaoURL;
  };

  // let params = new URL(document.location).searchParams;
  // let code = params.get("code");
  // console.log(code);

  return <button onClick={kakaoLogin}>카카오로 로그인하기</button>;
};

export default Login;
