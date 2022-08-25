import React, { useEffect } from "react";
import { useState } from "react";
import styled, { css } from "styled-components";
import NavBar from "../components/public/NavBar";
import BulletinListFrame from "../components/Board/BulletinBoard/BulletinListFrame";
import MatchingListFrame from "../components/Board/MatchingBoard/MatchingListFrame";
import MyBulletinListFrame from "../components/Board/BulletinBoard/MyBulletinListFrame";
import MyMatchingListFrame from "../components/Board/MatchingBoard/MyMatchingListFrame";

import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { boardAction } from "../redux/actions/boardAction";

const Board = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { category } = useSelector((state) => state.boardReducer);
  const { selectedCity, selectedGu } = useSelector((state) => state.locationReducer);

  const query = useLocation().search;
  const type = new URLSearchParams(query).get("type");
  const cate = new URLSearchParams(query).get("cate");

  useEffect(() => {
    if (!type || !cate) {
      dispatch(boardAction.setBoardType(type ? type : "match", cate ? cate : "all"));
      navigate(
        `/board?type=${type ? type : "match"}&cate=${cate ? cate : "all"}`
      );
    }
  }, []);

  const MatchingOnClick = () => {
    dispatch(boardAction.setBoardType("match", category));
    navigate(`/board?type=match&cate=${category}&city=${selectedCity}&gu=${selectedGu}&page=1&amount=12`);
  };

  const InfoOnClick = () => {
    dispatch(boardAction.setBoardType("info", category));
    navigate(`/board?type=info&cate=${category}&city=${selectedCity}&gu=${selectedGu}&page=1&amount=12`);
  };

  return (
    <Container>
      <NavBar />
      <MainFrame>
        <CategoryFrame>
          <MatchingTitle boardType={type} onClick={MatchingOnClick}>
            매칭(구합니다)
          </MatchingTitle>
          <InfoTitle boardType={type} onClick={InfoOnClick}>
            정보 공유 게시판
          </InfoTitle>
        </CategoryFrame>
        <ContextFrame>
          {type === "match" ? (
            <MatchingListFrame />
          ) : type === "info" ? (
            <BulletinListFrame />
          ) : (
            <></>
          )}
          {/* <BulletinListFrame/> */}
          {/* <MatchingListFrame/> */}
          {/* <MyMatchingListFrame/> */}
          {/* <MyBulletinListFrame/> */}
        </ContextFrame>
      </MainFrame>
    </Container>
  );
};

const Container = styled.div``;

const MainFrame = styled.div`
  display: flex;
  justify-content: center;
`;

const CategoryFrame = styled.div`
  width: 180px;
  height: 100vh;
`;

const ContextFrame = styled.div``;

const MatchingTitle = styled.div`
  cursor: pointer;
  height: 51px;
  width: 180px;
  padding: 14px 20px;
  color: #494949;
  font-weight: bold;
  font-size: 15px;
  box-sizing: border-box;
  ${({ boardType }) => {
    return css`
      border-bottom: ${boardType === "match"
        ? "2px solid #DEDEDE"
        : "2px solid #F0F0F0"};
      background-color: ${boardType === "match" ? "#dedede" : ""};
    `;
  }}
`;

const InfoTitle = styled.div`
  cursor: pointer;
  height: 51px;
  width: 180px;
  padding: 14px 20px;
  color: #494949;
  font-weight: bold;
  font-size: 15px;
  box-sizing: border-box;
  ${({ boardType }) => {
    return css`
      border-bottom: ${boardType === "info"
        ? "2px solid #DEDEDE"
        : "2px solid #F0F0F0"};
      background-color: ${boardType === "info" ? "#dedede" : ""};
    `;
  }}
`;

export default Board;
