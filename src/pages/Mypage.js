import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MyProfileShow from "../components/Mypage/MyProfileShow";
import MyPersonalData from "../components/Mypage/MyPersonalData";
import LeaveSection from "../components/Mypage/LeaveSection";
import SubNavbar from "../components/public/SubNavbar";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../redux/actions/userAction";

const Mypage = () => {
  const [page, setPage] = useState(1);
  const [leftArrow, setLeftArrow] = useState(true);
  const [rightArrow, setRightArrow] = useState(false);

  const dispatch = useDispatch();
  const { isLogin } = useSelector((state)=> state.userReducer);

  useEffect(()=>{
    dispatch(userAction.loadMyPage());
  },[isLogin])
  
  return (
    <Container>
      <SubNavbar
        title="마이페이지"
        pageState={{ page, setPage }}
        leftState={{ leftArrow, setLeftArrow }}
        rightState={{ rightArrow, setRightArrow }}
      />
      <PageFrame>
        <MyProfileShow />
        <MyPersonalData />
        <LeaveSection />
      </PageFrame>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f0f0f0;
  user-select: none;
  min-height: 100vh;
`;

const PageFrame = styled.div`
  width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default Mypage;
