import React from "react";
import styled, { css } from "styled-components";

import InputAnimation from "../components/InputAnimation";

const SignupAuth = () => {


  return (
    <Container>
      <InputAnimation width="100%" inputName="이메일"/>
      <EmailInfo>
        회원 가입시 ID는 반드시 본인 소유의 연락 가능한 이메일 주소를 사용하여야
        합니다.
      </EmailInfo>
      <AuthButtonBeforeSend>인증번호 전송</AuthButtonBeforeSend>
      {/* <AuthButtonAfterSend>인증번호 전송 (남은 횟수 3회)</AuthButtonAfterSend> */}
      <AuthInfo>
        인증번호에 대한 안내 문구
        <br />
        인증번호에 대한 안내 문구
      </AuthInfo>
      <AuthNumberTitle>인증번호 ?자리</AuthNumberTitle>
      <InputBox>
        <Input>
          <AuthInput maxLength={7} />
          <Timeleft>??분??초</Timeleft>
        </Input>
        <Line />
      </InputBox>
      <AuthMessage>
        인증번호 발송에는 시간이 소요되며 하루 최대 3회까지 전송할 수 있습니다.
        <br />
        인증번호는 입력한 이메일 주소로 발송됩니다. 수신하지 못했다면 스팸함
        또는 해당 이메일 서비스의 설정을 확인해주세요.
      </AuthMessage>
    </Container>
  );
};

const Container = styled.div`

`;

const EmailEx = styled.div`
  width: 100%;
  height: 69px;
  background-color: aliceblue;
`;

const EmailInfo = styled.div`
  height: 15px;
  width: 344px;
  font-size: 10px;
  color: #494949;
  margin-top: 25px;
  margin-bottom: 25px;
`;

const AuthButtonBeforeSend = styled.div`
  width: 100%;
  height: 43px;
  border-radius: 10px;
  background-color: #dedede;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const AuthButtonAfterSend = styled.div`
  width: 100%;
  height: 43px;
  border-radius: 10px;
  border: 1px solid #a8a8a8;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const AuthInfo = styled.div`
  color: #000000;
  font-size: 10px;
  height: 30px;
  width: 108px;
  margin-top: 25px;
  margin-bottom: 25px;
`;

const AuthNumberTitle = styled.div`
  height: 23px;
  color: #a8a8a8;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 14px;
`;

const InputBox = styled.div`
  :focus-within {
  }
`;

const Input = styled.div`
  display: flex;
`;

const AuthInput = styled.input`
  width: 638px;
  height: 23px;
  border: none;
  outline: none;
`;

const Timeleft = styled.div`
  width: 62px;
  height: 23px;
  font-size: 15px;
  font-weight: bold;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12.5px;
`;

const Line = styled.div`
  width: 100%;
  border: 0.5px solid #000000;
`;

const AuthMessage = styled.div`
  width: 495px;
  height: 30px;
  color: #000000;
  font-size: 10px;
  margin-top: 25px;
`;

export default SignupAuth;
