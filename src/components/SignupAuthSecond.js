import React from "react";
import styled from "styled-components";

const SignupAuthSecond = () => {
  return (
    <div>
      <Wrap>
        <Title>이름</Title>
        <Box placeholder="이름을 입력해주세요."></Box>
      </Wrap>
      <Wrap>
        <Title>닉네임</Title>
        <Box placeholder="닉네임을 입력해주세요."></Box>
      </Wrap>
      <Wrap>
        <Title>연락처</Title>
        <Box placeholder="연락처를 입력해주세요.."></Box>
      </Wrap>
      <Wrap>
        <Title>성별</Title>
        <Gender></Gender>
      </Wrap>
      <WrapAge>
        <Title>연락처</Title>
        <ContactAddress></ContactAddress>
      </WrapAge>

    </div>
  );
};

const Wrap = styled.div`
  height: 84px;
  margin-bottom: 30px;
`;

const Title = styled.div`
  height: 29px;
  margin-bottom: 5px;
  box-sizing: border-box;
  color: #494949;
  font-size: 20px;
  font-weight: bold;
`;

const Box = styled.input`
  margin: 0%;
  height: 50px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  font-size: 20px;
  &::placeholder {
    color: #dedede;
  }
`;

const WrapAge=styled.div`
    margin-bottom: 41px;
`;

const Gender =styled.div`
    width: 234px;
    height: 50px;
    background-color: aliceblue;
`;

const ContactAddress =styled.div`
    width: 100%;
    height: 50px;
    background-color: aliceblue;
`;

export default SignupAuthSecond;
