import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";

import InputAnimation from "../components/InputAnimation";
import AlertBox from "./AlertBox";

const SignupAuth = ({ setNextAvailable }) => {
  var time = 60000;

  // auth
  const AuthKeywordRef = useRef("");
  const [validationState, setValidationState] = useState(false);
  const [inputAvailable,setInputAvailable] = useState(false);

  // timer
  const [alertSent, setAlertSent] = useState(false);
  const [alertcomment, setAlertcomment] = useState("");
  const [sentAuth, setSentAuth] = useState(false);
  const [sentAuthCount, setSentAuthCount] = useState(3);
  const [playNumber, setPlayNumber] = useState(null);
  const [timerNumber, setTimerNumber] = useState(null);
  const [showTimer, setShowTimer] = useState("");
  let PlAYTIME;
  let timerAuth;
  let sec = 60;

  const SentAuthCode = (e) => {
    e.preventDefault();
    if (validationState) {
      if(sentAuth){
        SentAuthOverTime();
      }
      setAlertcomment("인증번호가 전송되었습니다.");
      TIMER();
      timerAuth = setTimeout(() => SentAuthOverTime(), time); //3분이 되면 타이머를 삭제한다.
      setTimerNumber(timerAuth);
      setAlertSent(true);
      setSentAuth(true);
      setInputAvailable(true);
    }
  };

  const SentAuthOverTime = () => {
    console.log("종료",timerNumber,playNumber)
    clearTimeout(timerNumber);
    clearInterval(playNumber);
    setAlertcomment("인증 시간이 초과되었습니다.");
    setShowTimer("");
    setSentAuthCount(sentAuthCount-1);
    setAlertSent(true);
    setSentAuth(false);
    setNextAvailable(false);
    setInputAvailable(false);
  };

  const TIMER = () => {
    PlAYTIME = setInterval(function () {
      time = time - 1000;
      let min = time / (60 * 1000); //초를 분으로 나눠준다.
      if (sec > 0) {
        //sec=60 에서 1씩 빼서 출력해준다.
        sec = sec - 1;
        setShowTimer(Math.floor(min) + "분" + sec + "초"); //실수로 계산되기 때문에 소숫점 아래를 버리고 출력해준다.
      }
      if (sec === 0) {
        // 0에서 -1을 하면 -59가 출력된다.
        // 그래서 0이 되면 바로 sec을 60으로 돌려주고 value에는 0을 출력하도록 해준다.
        sec = 60;
        setShowTimer(Math.floor(min) + "분" + "00초");
      }
    }, 1000); //1초마다
    setPlayNumber(PlAYTIME);
  };

  const AuthOnChange = (e) => {
    e.preventDefault();
    if (AuthKeywordRef.current.value.length >= 7) setNextAvailable(true);
    else setNextAvailable(false);
  };

  return (
    <Container>
      <EmailSentForm onSubmit={(e) => SentAuthCode(e)}>
        <InputAnimation
          width="100%"
          inputName="이메일"
          validation={{ validationState, setValidationState }}
          inputAvailable = {inputAvailable}
        />
        {alertSent ? (
          <AlertBox alertcomment={alertcomment} setAlertSent={setAlertSent} />
        ) : (
          <></>
        )}
        <EmailInfo>
          회원 가입시 ID는 반드시 본인 소유의 연락 가능한 이메일 주소를
          사용하여야 합니다.
        </EmailInfo>
        {sentAuth ? (
          <>
            <AuthButton validationState={validationState}>
              인증번호 전송 (남은 횟수 {sentAuthCount}회)
            </AuthButton>
            <AuthInfo>
              인증번호에 대한 안내 문구
              <br />
              인증번호에 대한 안내 문구
            </AuthInfo>
            <AuthNumberTitle>인증번호 ?자리</AuthNumberTitle>
            <InputBox>
              <Input>
                <AuthInput
                  ref={AuthKeywordRef}
                  maxLength={7}
                  onChange={(e) => AuthOnChange(e)}
                />
                <TimeLeft>{showTimer}</TimeLeft>
              </Input>
              <Line />
            </InputBox>
          </>
        ) : (
          <AuthButton
            onClick={(e) => SentAuthCode(e)}
            validationState={validationState}
          >
            인증번호 전송
          </AuthButton>
        )}
      </EmailSentForm>
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
  display: flex;
  flex-direction: column;
`;

const EmailSentForm = styled.form``;

const EmailInfo = styled.div`
  width: 344px;
  font-size: 10px;
  color: #494949;
  margin-top: 25px;
  margin-bottom: 25px;
`;

const AuthButton = styled.button`
  ${({ validationState }) => {
    return css`
      background: ${validationState ? "#A8A8A8" : "#DEDEDE"};
      width: 100%;
      height: 43px;
      font-size: 15px;
      font-weight: 150px;
      border-radius: 10px;
      border: 1px solid ${validationState ? "#A8A8A8" : "#DEDEDE"};
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: ${validationState ? "pointer" : "auto"};

      &:active {
        background: ${validationState ? "#F0F0F0" : "#DEDEDE"};
        border: 1px solid ${validationState ? "#A8A8A8" : "#DEDEDE"};
        cursor: ${validationState ? "pointer" : "auto"};
      }
    `;
  }}
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

const TimeLeft = styled.div`
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
