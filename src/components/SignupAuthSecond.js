import React from "react";
import styled from "styled-components";

const SignupAuthSecond = () => {
  return (
    <Container>
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
        <Gender action="#">
          <RadioSection>
            <input type="radio" id="men" name="radio-group" checked />
            <label for="men">남성</label>
          </RadioSection>
          <RadioSection>
            <input type="radio" id="women" name="radio-group" />
            <label for="women">여성</label>
          </RadioSection>
        </Gender>
      </Wrap>
      <WrapAge>
        <Title>생년월일</Title>
        <ContactAddress>
          
        </ContactAddress>
      </WrapAge>
    </Container>
  );
};

const Container = styled.div``;

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

const WrapAge = styled.div`
  margin-bottom: 41px;
`;

const Gender = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
  width: 234px;
  height: 50px;
  input:checked,
  input:not(:checked) {
    position: absolute;
    left: -9999px;
  }

  input:checked + label,
  input:not(:checked) + label {
    font-size: 20px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-left: 45px;
    cursor: pointer;
    line-height: 20px;
    color: #666;
  }

  input:checked + label:before,
  input:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 30px;
    height: 30px;
    border: 1px solid #ddd;
    border-radius: 100%;
    background: #A8A8A8;
  }

  input:checked + label:after,
  input:not(:checked) + label:after {
    content: '';
    width: 14px;
    height: 14px;
    background: #ddd;
    position: absolute;
    top: 9px;
    left: 9px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  input:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  input:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;

const RadioSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`

const ContactAddress = styled.div`
  width: 100%;
  height: 50px;
  background-color: aliceblue;
`;

export default SignupAuthSecond;
