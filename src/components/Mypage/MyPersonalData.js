import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import PersonalBirth from "./PersonalBirth";
import PersonalRadio from "./PersonalRadio";
import PersonalSection from "./PersonalSection";

const MyPersonalData = () => {

  const {username,userGender} = useSelector((state) => state.userReducer);

  return (
    <Container>
      <DataFrame>
        <TitleZone>개인정보</TitleZone>
        <DataZone>
          <PersonalSection title="아이디(이메일)" data={username} editBt={false} />
          <PersonalRadio type="gender" title="성별" />
          <PersonalBirth title="생년월일"/>
          <PersonalSection title="비밀번호" data="●●●●●●●●●●●●●" />
        </DataZone>
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
