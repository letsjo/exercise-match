import React from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";

const LeaveSection = () => {

  const navigate= useNavigate();
  return (
    <Container onClick={()=>navigate("/memberExit")}>
      <ContentFrame>
        <TitleZone >회원탈퇴</TitleZone>
        <ArrowRightBox />
      </ContentFrame>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: white;
  border: 1px solid #dedede;
  margin-bottom:112px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`;

const ContentFrame = styled.div`
  margin-left: 25px;
  margin-right: 25px;
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TitleZone = styled.div`
  font-weight: 700;
  font-size: 25px;
  line-height: 36px;
`;

const ArrowRightBox = styled.div`
  display: "block";
  height: 36px;
  width: 36px;

  cursor: pointer;

  :before {
    content: "\f105";
    color: #494949;
    font-family: "Font Awesome 5 Free";
    font-weight: 700;
    font-size: 36px;
  }
`;

export default LeaveSection;
