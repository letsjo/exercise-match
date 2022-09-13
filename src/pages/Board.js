import React, { useEffect } from "react";
import { useState } from "react";
import styled, { css } from "styled-components";
import NavBar from "../components/public/NavBar";
import BulletinListFrame from "../components/Board/BulletinBoard/BulletinListFrame";
import MatchingListFrame from "../components/Board/MatchingBoard/MatchingListFrame";
import MyBulletinListFrame from "../components/Board/BulletinBoard/MyBulletinListFrame";

import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { boardAction } from "../redux/actions/boardAction";
import { locationSliceAction } from "../redux/reducers/locationReducer";

const Board = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { boardType, category } = useSelector((state) => state.boardReducer);
  const { selectedCity, selectedGu } = useSelector(
    (state) => state.locationReducer
  );

  const querys = useLocation().search;
  const query = new URLSearchParams(querys);
  const type = query.get("type");
  const cate = query.get("cate");
  const city = query.get("city");
  const gu = query.get("gu");

  useEffect(() => {
    query.set("city", selectedCity);
    query.set("gu", selectedGu);
    window.history.pushState(
      null,
      null,
      `/board?type=${type ? type : "matching"}&cate=${
        cate ? cate : "all"
      }&city=${selectedCity ? selectedCity : "all"}&gu=${
        selectedGu ? selectedGu : ""
      }&page=1&amount=12`
    );
  }, [selectedCity, selectedGu]);

  useEffect(() => {
    if (city && (selectedCity != city || selectedGu != gu)) {
      dispatch(
        locationSliceAction.selectLocation({
          selectedCity: selectedCity ? selectedCity : "all",
          selectedGu: selectedGu ? selectedGu : "",
        })
      );
      navigate(
        `/board?type=${type ? type : "matching"}&cate=${
          cate ? cate : "all"
        }&city=${selectedCity ? selectedCity : "all"}&gu=${
          selectedGu ? selectedGu : ""
        }&page=1&amount=12`
      );
    }
    if (!type || !cate) {
      dispatch(
        boardAction.setBoardType(type ? type : "matching", cate ? cate : "all")
      );
      navigate(
        `/board?type=${type ? type : "matching"}&cate=${
          cate ? cate : "all"
        }&city=${selectedCity ? selectedCity : "all"}&gu=${
          selectedGu ? selectedGu : ""
        }&page=1&amount=12`
      );
    }
  }, [selectedCity, selectedGu]);

  const MatchingOnClick = () => {
    dispatch(boardAction.setBoardType("matching", "all"));
    navigate(
      `/board?type=matching&cate=all&city=${city ? city : selectedCity}&gu=${
        gu ? gu : selectedGu
      }&page=1&amount=12`
    );
  };

  const InfoOnClick = () => {
    dispatch(boardAction.setBoardType("information", "all"));
    navigate(`/board?type=information&cate=all&page=1&amount=12`);
  };

  const MyMatchingOnClick = () => {
    dispatch(boardAction.setBoardType("mymatching", category));
    navigate(`/board?type=mymatching&cate=${category}&page=1&amount=12`);
  };

  const MyInfoOnClick = () => {
    dispatch(boardAction.setBoardType("myinformation", category));
    navigate(`/board?type=myinformation&cate=${category}&page=1&amount=12`);
  };

  return (
    <Container>
      <NavBar />
      <MainFrame>
        <CategoryFrame>
          <MatchingTitle type={type} onClick={MatchingOnClick}>
            매칭(구합니다)
          </MatchingTitle>
          {(type === "matching" || type === "mymatching") && (
            <>
              <SelectMatching type={type} onClick={MatchingOnClick}>
                매칭 게시판
              </SelectMatching>
              <SelectMyMatching type={type} onClick={MyMatchingOnClick}>
                나의 게시글
              </SelectMyMatching>
            </>
          )}

          <InfoTitle type={type} onClick={InfoOnClick}>
            정보 공유 게시판
          </InfoTitle>
          {(type === "information" || type === "myinformation") && (
            <>
              <SelectInfo type={type} onClick={InfoOnClick}>
                정보 공유{" "}
              </SelectInfo>
              <SelectMyBoard type={type} onClick={MyInfoOnClick}>
                나의 게시글
              </SelectMyBoard>
            </>
          )}
        </CategoryFrame>
        <ContextFrame>
          {type === "matching" ? (
            <MatchingListFrame />
          ) : type === "information" ? (
            <BulletinListFrame />
          ) : type === "mymatching" ? (
            <MyBulletinListFrame type={type} />
          ) : type === "myinformation" ? (
            <MyBulletinListFrame type={type} />
          ) : (
            <></>
          )}
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
  border-top: 2px solid #f0f0f0;
  ${({ type }) => {
    return css`
      border-bottom: 2px solid #f0f0f0;

      background-color: ${type === "matching" || type === "mymatching"
        ? "#F0F0F0"
        : ""};
    `;
  }}
`;

const SelectMatching = styled.div`
  width: 180px;
  height: 39px;
  padding: 8px 40px;
  box-sizing: border-box;
  font-size: 15px;
  font-weight: bold;
  color: #494949;
  border-bottom: 2px solid #f0f0f0;
  cursor: pointer;
  ${({ type }) => {
    return css`
      background-color: ${type === "matching" ? "#DEDEDE" : ""};
    `;
  }}
`;

const SelectInfo = styled.div`
  width: 180px;
  height: 39px;
  padding: 8px 40px;
  box-sizing: border-box;
  font-size: 15px;
  font-weight: bold;
  color: #494949;
  border-bottom: 2px solid #f0f0f0;
  cursor: pointer;
  ${({ type }) => {
    return css`
      background-color: ${type === "information" ? "#DEDEDE" : ""};
    `;
  }}
`;

const SelectMyMatching = styled.div`
  width: 180px;
  height: 39px;
  padding: 8px 40px;
  box-sizing: border-box;
  font-size: 15px;
  font-weight: bold;
  color: #494949;
  border-bottom: 2px solid #f0f0f0;
  cursor: pointer;
  ${({ type }) => {
    return css`
      background-color: ${type === "mymatching" ? "#DEDEDE" : ""};
    `;
  }}
`;

const SelectMyBoard = styled.div`
  width: 180px;
  height: 39px;
  padding: 8px 40px;
  box-sizing: border-box;
  font-size: 15px;
  font-weight: bold;
  color: #494949;
  border-bottom: 2px solid #f0f0f0;
  cursor: pointer;
  ${({ type }) => {
    return css`
      background-color: ${type === "myinformation" ? "#DEDEDE" : ""};
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
  ${({ type }) => {
    return css`
      border-bottom: 2px solid #f0f0f0;

      background-color: ${type === "information" || type === "myinformation"
        ? "#f0f0f0"
        : ""};
    `;
  }}
`;

export default Board;
