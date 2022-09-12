import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";
import { useDispatch } from "react-redux";
import { userAction } from "../redux/actions/userAction";
import { useNavigate } from "react-router-dom";
import { userSliceAction } from "../redux/reducers/userReducer";
import Swal from "sweetalert2";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(false);

  const idRef = useRef();
  const pwRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const REST_API_KEY = "77c5975ead488c768a11d49f9320425c";
  const REDIRECT_URI = "http://localhost:3000/api/kakaoLogin";
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const kakaoLogin = () => {
    window.location.href = kakaoURL;
  };

  const CLIENT_ID = "r1zmtgVUyyZ2koRdASic";
  const CALLBACK_URL = "http://localhost:3000/api/naverLogin";
  const STATE_STRING = "state_test";
  const naverURL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&state=${STATE_STRING}&redirect_uri=${CALLBACK_URL}`;

  const googleURL = `http://ec2-3-35-9-167.ap-northeast-2.compute.amazonaws.com/oauth2/authorization/google`;

  const naverLogin = () => {
    window.location.href = naverURL;
    // window.location.href = googleURL;
  };
  
  const googleLogin = () => {
    window.location.href = googleURL;
  };

  const clickLogin = async (e) => {
    e.preventDefault();
    const idInputVal = idRef.current.value;
    const pwInputVal = pwRef.current.value;

    const regex = new RegExp(
      "^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(.[0-9a-zA-Z_-]+){1,2}$"
    );
    const validId = regex.exec(idInputVal);

    if (
      idRef.current.value === "" ||
      pwRef.current.value === "" ||
      !validId ||
      pwInputVal.length < 5
    ) {
      setErrorMessage(true);
      return;
    } else {
      setErrorMessage(false);
      const LoginData = {
        username: idRef.current.value,
        password: pwRef.current.value,
      };
      console.log(LoginData);
      try {
        const response = await dispatch(
          userAction.userLogin(LoginData)
        ).unwrap();
        dispatch(
          userSliceAction.setLogin({
            username: LoginData?.username,
            nickname: response.headers?.nickname,
            profile: response.headers?.profile?response.headers?.profile:"/images/anonymousProfile.png",
            social: false,
          })
        );
        console.log(response);
        Swal.fire("로그인에 성공하셨습니다!");
        navigate("/");
      } catch (err) {
        window.alert(err);
      }
    }
  };

  return (
    <LoginContainer>
      <Wrap>
        <LoginWrap>
          <LoginText>로그인</LoginText>
          <IdName>이메일</IdName>
          <Input ref={idRef} type="text" placeholder="예) nanu@naver.com" />
          <PwName>비밀번호</PwName>
          <Input
            ref={pwRef}
            type="password"
            placeholder="비밀번호를 입력해주세요."
          />
          <FindBoxWrap>
            <FindBox
              onClick={() => {
                navigate("/passwordFind");
              }}
            >
              <div>비밀번호 찾기</div>
            </FindBox>
          </FindBoxWrap>
          <ErrorMessage errorMessage={errorMessage}>
            아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다.
            <br />
            입력하신 내용을 다시 확인해주세요.
          </ErrorMessage>
          <LoginBtn onClick={(e) => clickLogin(e)}>로그인하기</LoginBtn>
          <SignupBtn
            onClick={() => {
              navigate("/signup");
            }}
          >
            아직 회원이 아니신가요?
          </SignupBtn>
          <LineWrap>
            <OrLine /> 또는 <OrLine />
          </LineWrap>
          <IconBox>
            <KakaoIcon onClick={kakaoLogin}>
              <img src="/images/iconKakaoTalk.png" alt="" />
            </KakaoIcon>
            <GoogleIcon onClick={googleLogin}>
              <img src="/images/iconNaver.png" alt="" />
            </GoogleIcon>
          </IconBox>
        </LoginWrap>
      </Wrap>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  width: 800px;
  height: 655px;
  max-width: 800px;
  max-height: 655px;
  min-width: 800px;
  min-height: 655px;

  border: 1px solid slategray;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`;

const LoginWrap = styled.form`
  margin: 50px 150px;
  /* background-color: beige; */
`;

const LoginText = styled.div`
  width: 125px;
  height: 65px;
  font-size: 45px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: auto auto 30px;
`;

const IdName = styled.div`
  width: 56px;
  height: 29px;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const PwName = styled.div`
  width: 74px;
  height: 29px;
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 494px;
  height: 50px;
  font-size: 20px;
  border-radius: 0%;
  border: 1px solid #dedede;
  padding: 1px;
  /* padding:10px; */
  outline: none;
  transition: all 0.1s ease;
  &:focus {
    border: 2px solid #a2e9fa;
    padding: 0px;
    box-shadow: 0px 0px 5px rgba(162, 233, 250, 0.5);
  }
  &::placeholder {
    color: #dedede;
  }
`;

const FindBoxWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const FindBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 196px;
  height: 17px;
  /* background-color: azure; */
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 30px;

  div {
    cursor: pointer;
  }
`;

const Line = styled.div`
  width: 0px;
  height: 16px;
  border: 0.5px solid #000000;
`;

const ErrorMessage = styled.div`
  ${({ errorMessage }) => {
    return css`
      height: 35px;
      color: #ff0000;
      font-size: 15px;
      display: ${errorMessage ? "block" : "none"};
    `;
  }}
`;

const LoginBtn = styled.button`
  width: 500px;
  height: 59px;
  cursor: pointer;
  background-color: #00CFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  color: white;
  margin-top: 15px;
  border: none;
`;

const SignupBtn = styled.div`
  width: 152px;
  height: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px auto 29px;
  font-size: 15px;
  cursor: pointer;
`;

const LineWrap = styled.div`
  width: 500px;
  height: 23px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: azure; */
  font-size: 15px;
  color: #a8a8a8;
`;

const OrLine = styled.div`
  width: 230px;
  border: 0.5px solid #a8a8a8;
`;

const IconBox = styled.div`
  height: 50px;
  width: 190px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 11px auto auto;
  cursor: pointer;
`;

const KakaoIcon = styled.div`
  margin-right: 90px;
  img {
    width: 50px;
    height: 50px;
  }
`;

const GoogleIcon = styled.div`
  img {
    width: 50px;
    height: 50px;
  }
`;

export default Login;
