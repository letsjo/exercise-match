import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { boardAction } from "../../../redux/actions/boardAction";
import SearchOption from "./SearchOption";

const CategoryBoxFrame = ({page}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { boardType } = useSelector((state) => state.boardReducer);
  const { selectedCity, selectedGu } = useSelector((state) => state.locationReducer);

  const query = useLocation().search;
  const type = new URLSearchParams(query).get("type");
  const cate = new URLSearchParams(query).get("cate");

  useEffect(() => {
    dispatch(boardAction.loadBoard(type, cate, selectedCity, selectedGu, page));
  }, [type, cate, selectedCity, selectedGu, page]);

  

  return (
    <CategorySelect>
      <CategoryBox>
        <CategoryCard
          onClick={(e) => {
            e.preventDefault();
            dispatch(boardAction.setBoardType(type,"all"));
            navigate(`/board?type=${type}&cate=all&city=${selectedCity}&gu=${selectedGu}&page=1&amount=12`);
          }}
          selected={cate === "all" ? true : false}
        >
          전체
        </CategoryCard>
        <CategoryCard
          onClick={(e) => {
            e.preventDefault();
            dispatch(boardAction.setBoardType(boardType,"gym"));
            navigate(`/board?type=${boardType}&cate=gym&city=${selectedCity}&gu=${selectedGu}&page=1&amount=12`);
          }}
          selected={cate === "gym" ? true : false}
        >
          헬스
        </CategoryCard>
        <CategoryCard
          onClick={(e) => {
            e.preventDefault();
            dispatch(boardAction.setBoardType(boardType,"running"));
            navigate(`/board?type=${boardType}&cate=running&city=${selectedCity}&gu=${selectedGu}&page=1&amount=12`);
          }}
          selected={cate === "running" ? true : false}
        >
          조깅&러닝
        </CategoryCard>
        <CategoryCard
          onClick={(e) => {
            e.preventDefault();
            dispatch(boardAction.setBoardType(boardType,"ridding"));
            navigate(`/board?type=${boardType}&cate=ridding&city=${selectedCity}&gu=${selectedGu}&page=1&amount=12`);
          }}
          selected={cate === "ridding" ? true : false}
        >
          라이딩
        </CategoryCard>
        <CategoryCard
          onClick={(e) => {
            e.preventDefault();
            dispatch(boardAction.setBoardType(boardType,"badminton"));
            navigate(`/board?type=${boardType}&cate=badminton&city=${selectedCity}&gu=${selectedGu}&page=1&amount=12`);
          }}
          selected={cate === "badminton" ? true : false}
        >
          배드민턴
        </CategoryCard>
        <CategoryCard
          onClick={(e) => {
            e.preventDefault();
            dispatch(boardAction.setBoardType(boardType,"tennis"));
            navigate(`/board?type=${boardType}&cate=tennis&city=${selectedCity}&gu=${selectedGu}&page=1&amount=12`);
          }}
          selected={cate === "tennis" ? true : false}
        >
          테니스
        </CategoryCard>
        <CategoryCard
          onClick={(e) => {
            e.preventDefault();
            dispatch(boardAction.setBoardType(boardType,"golf"));
            navigate(`/board?type=${boardType}&cate=golf&city=${selectedCity}&gu=${selectedGu}&page=1&amount=12`);
          }}
          selected={cate === "golf" ? true : false}
        >
          골프
        </CategoryCard>
        <CategoryCard
          onClick={(e) => {
            e.preventDefault();
            dispatch(boardAction.setBoardType(boardType,"etc"));
            navigate(`/board?type=${boardType}&cate=etc&city=${selectedCity}&gu=${selectedGu}&page=1&amount=12`);
          }}
          selected={cate === "etc" ? true : false}
        >
          기타
        </CategoryCard>
      </CategoryBox>
    </CategorySelect>
  );
};

const CategorySelect = styled.div`
  height: 63px;
  width: 1258px;
  border: 2px solid #f0f0f0;
  border-left: 2px solid #f0f0f0;
  border-bottom: none;
  border-right: none;
  display: flex;
  box-sizing: border-box;
`;

const CategoryBox = styled.div`
  height: 33px;
  width: 619px;
  margin: auto auto auto 50px;
  display: flex;
  justify-content: space-between;
`;

const CategoryCard = styled.div`
  ${({ selected }) => {
    return css`
      cursor: pointer;
      display: inline-block;
      height: 33px;
      border-radius: 5px;
      padding: 5px 10px;
      box-sizing: border-box;
      font-size: 15px;
      font-weight: bold;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

      background: ${selected ? "#a8a8a8" : "#ffffff"};
      border: 1px solid ${selected ? "#f0f0f0" : "#ffffff"};
      color: ${selected ? "#ffffff" : "black"};
    `;
  }}
`;

const CategorySelectCard = styled.div`
  display: inline-block;
  height: 33px;
  border-radius: 5px;
  padding: 5px 10px;
  box-sizing: border-box;
  background: #a8a8a8;
  border: 1px solid #f0f0f0;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
`;

export default CategoryBoxFrame;
