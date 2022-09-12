import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import InputAnimation from "../public/InputAnimation";

const PasswordFindAuthPW = ({
  setNextAvailable,
  inputPassword,
  setInputPassword,
  leftState,
  rightState,
}) => {
  const { email, password, repassword } = useSelector(
    (state) => state.signupReducer.info
  );

  useEffect(() => {
    setNextAvailable(false);
    rightState.setRightArrow(false);
  }, []);

  // const [firstPassword,setFirstPassword] = useState("");
  // const [SecondPassword,setSecondPassword] = useState("");

  const RefFirstPassword = useRef("");
  const RefSecondPassword = useRef("");
  const RefThirdPassword = useRef("");

  const ValidationCheck = () => {
    if (
      RefFirstPassword.current.value &&
      RefSecondPassword.current.value == RefThirdPassword.current.value
    ) {
      setNextAvailable(true);
      rightState.setRightArrow(true);
      setInputPassword(RefFirstPassword.current.value);
    } else {
      setNextAvailable(false);
      rightState.setRightArrow(false);
    }
  };

  return (
    <Container>
      {/* <InputAnimation
        width="100%"
        inputName="이메일"
        inputDisAvailable={true}
        inputValue={email}
      /> */}
       <InputAnimation
        width="100%"
        inputName="기존 비밀번호"
        type="password"
        ValidationCheck={ValidationCheck}
        Ref={RefFirstPassword}
        x // setInputValue={setFirstPassword}
        inputDisAvailable={false}
      />
      <InputAnimation
        width="100%"
        inputName="새 비밀번호"
        type="password"
        ValidationCheck={ValidationCheck}
        Ref={RefSecondPassword}
        x // setInputValue={setFirstPassword}
        inputDisAvailable={false}
      />
      <InputAnimation
        width="100%"
        inputName="새 비밀번호 확인"
        type="password"
        ValidationCheck={ValidationCheck}
        Ref={RefThirdPassword}
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

export default PasswordFindAuthPW;
