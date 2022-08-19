import React from "react";
import styled from "styled-components";
import PersonalSection from "./PersonalSection";

const MyPersonalData = () => {
  return (
    <Container>
      <DataFrame>
        <TitleZone>개인정보</TitleZone>
        <DataZone>
          <PersonalSection title="아이디(이메일)" data="nanu@naver.com" />
          <PersonalSection title="이름" data="조현오" />
          <PersonalSection title="연락처" data="01020770000" />
          <PersonalSection type="gender" title="성별" data="남성" />
          <PersonalSection title="생년월일" data="1991년 01월 04일" />
          <PersonalSection title="비밀번호" data="●●●●●●●●" />
        </DataZone>
        <ButtonZone>
          <button>수정하기</button>
        </ButtonZone>
      </DataFrame>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: white;
  border: 1px solid #dedede;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;

  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;

const DataFrame = styled.div`
  width: 750px;
  margin: 10px 25px 30px 25px;
`;

const TitleZone = styled.div`
  padding: 30px;
  font-weight: 700;
  font-size: 25px;
  line-height: 36px;
  border-bottom: 1px solid #a8a8a8;
`;

const DataZone = styled.div``;

const ButtonZone = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  button {
    margin-right: 10px;
    width: 103px;
    height: 31px;
    background: #494949;
    border: 1px solid #494949;
    border-radius: 5px;
    color: white;
  }
`;

const LeaveFrame = styled.div`
  width: 750px;
  margin: 10px 25px 30px 25px;
`;

export default MyPersonalData;
