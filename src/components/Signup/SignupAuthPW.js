import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import InputAnimation from "../public/InputAnimation";

const SignupAuthPW = ({ setNextAvailable, signUpInfo, setSignUpInfo, leftState, rightState }) => {

  useEffect(() => {
    setNextAvailable(false);
    rightState.setRightArrow(false);
  }, []);

  // const [firstPassword,setFirstPassword] = useState("");
  // const [SecondPassword,setSecondPassword] = useState("");

  const RefFirstPassword = useRef("");
  const RefSecondPassword = useRef("");

  const ValidationCheck = () =>{
    if(RefFirstPassword.current.value && RefFirstPassword.current.value==RefSecondPassword.current.value){
      setNextAvailable(true);
      rightState.setRightArrow(false);
      setSignUpInfo({...signUpInfo,password:RefFirstPassword.current.value});
    } else {
      setNextAvailable(false);
      rightState.setRightArrow(false);
    }
  }

  return (
    <Container>
      <InputAnimation
        width="100%"
        inputName="이메일"
        inputDisAvailable={true}
        ValidationCheck={ValidationCheck}
        inputValue={signUpInfo.email}
      />
      <InputAnimation
        width="100%"
        inputName="비밀번호"
        type="password"
        ValidationCheck={ValidationCheck}
        Ref = {RefFirstPassword}
        // setInputValue={setFirstPassword}
        inputDisAvailable={false}
      />
      <InputAnimation
        width="100%"
        inputName="비밀번호 확인"
        type="password"
        ValidationCheck={ValidationCheck}
        Ref = {RefSecondPassword}
        // setInputValue={setSecondPassword}
        inputDisAvailable={false}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export default SignupAuthPW;
