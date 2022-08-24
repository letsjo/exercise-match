import React, { useState } from "react";
import styled from "styled-components";
import MyProfileShow from "../components/Mypage/MyProfileShow";
import MyPersonalData from "../components/Mypage/MyPersonalData";
import LeaveSection from "../components/Mypage/LeaveSection";
import SubNavbar from "../components/public/SubNavbar";

import { useLocation } from "react-router-dom";

const Mypage = () => {
  const [page, setPage] = useState(1);
  const [leftArrow, setLeftArrow] = useState(true);
  const [rightArrow, setRightArrow] = useState(false);

  //board?type=matching&categories=all
  //const location = useLocation();
  //console.log(location);
  //http://localhost:3000/mypage?a=123&bb=%EA%B0%80%EB%82%98%EB%8B%A4#51515
  //{
  //     "pathname": "/mypage",
  //     "search": "?a=123&bb=%EA%B0%80%EB%82%98%EB%8B%A4",
  //     "hash": "#51515",
  //     "state": null,
  //     "key": "default"
  //}

//   const query = useLocation().search;
//   const type = new URLSearchParams(query).get("type");
//   const categories = new URLSearchParams(query).get("categories");
//   console.log(type, categories);

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
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  user-select: none;
`;

const PageFrame = styled.div`
  width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default Mypage;
