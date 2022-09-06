import React, { useState } from "react";
import styled from "styled-components";
import MyProfileShow from "../components/Mypage/MyProfileShow";
import UserDataFrame from "../components/Mypage/UserDataFrame";
import SubNavbar from "../components/public/SubNavbar";

const UserInfo = () => {
  const [page, setPage] = useState(1);
  const [leftArrow, setLeftArrow] = useState(true);
  const [rightArrow, setRightArrow] = useState(false);
  return (
    <Container>
      <SubNavbar
        title="회원정보"
        pageState={{ page, setPage }}
        leftState={{ leftArrow, setLeftArrow }}
        rightState={{ rightArrow, setRightArrow }}
      />
      <PageFrame>
        <MyProfileShow mypage={false}/>
        <UserDataFrame title="매칭 간단 평가"/>
        <UserDataFrame title="매칭 후기"/>
      </PageFrame>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
`;

const PageFrame = styled.div`
  width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 112px;
`;

export default UserInfo;
