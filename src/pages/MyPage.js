import React, { useState } from "react";
import styled from "styled-components";
import MyProfileShow from "../components/Mypage/MyProfileShow";
import SubNavbar from "../components/public/SubNavbar";

const Mypage = () => {
  const [page, setPage] = useState(1);
  const [leftArrow, setLeftArrow] = useState(true);
  const [rightArrow, setRightArrow] = useState(false);
  return (
    <Container>
      <SubNavbar
        title="마이페이지"
        pageState={{ page, setPage }}
        leftState={{ leftArrow, setLeftArrow }}
        rightState={{ rightArrow, setRightArrow }}
      />
      <PageFrame>
        <MyProfileShow/>
      </PageFrame>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PageFrame = styled.div`
  width: 800px;
  height: 1069px;
  margin-top: 20px;
`;


export default Mypage;
