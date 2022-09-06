import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { boardAction } from "../../../redux/actions/boardAction";
import { boardSliceAction } from "../../../redux/reducers/boardReducer";
import SearchOption from "./SearchOption";

const CategoryBoxFrame = ({ page }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { selectedCity, selectedGu } = useSelector(
    (state) => state.locationReducer
  );

  const query = useLocation().search;
  const type = new URLSearchParams(query).get("type");
  const cate = new URLSearchParams(query).get("cate");

  useEffect(() => {
    dispatch(boardSliceAction.setBoardType({ type, cate }));
    dispatch(boardAction.loadBoard(type, cate, selectedCity, selectedGu, page));
  }, [type, cate, selectedCity, selectedGu, page]);

  return (
    <CategorySelect>
      <CategoryBox>
        <CategoryCard
          onClick={(e) => {
            e.preventDefault();
            navigate(
              `/board?type=${type}&cate=all&city=${selectedCity}&gu=${selectedGu}&page=1&amount=12`
            );
          }}
          selected={cate === "all"}
        >
          전체
        </CategoryCard>
        <CategoryCard
          onClick={(e) => {
            e.preventDefault();

            navigate(
              `/board?type=${type}&cate=gym&city=${selectedCity}&gu=${selectedGu}&page=1&amount=12`
            );
          }}
          selected={cate === "gym"}
        >
          헬스
        </CategoryCard>
        <CategoryCard
          onClick={(e) => {
            e.preventDefault();

            navigate(
              `/board?type=${type}&cate=running&city=${selectedCity}&gu=${selectedGu}&page=1&amount=12`
            );
          }}
          selected={cate === "running"}
        >
          조깅&러닝
        </CategoryCard>
        <CategoryCard
          onClick={(e) => {
            e.preventDefault();

            navigate(
              `/board?type=${type}&cate=ridding&city=${selectedCity}&gu=${selectedGu}&page=1&amount=12`
            );
          }}
          selected={cate === "ridding"}
        >
          라이딩
        </CategoryCard>
        <CategoryCard
          onClick={(e) => {
            e.preventDefault();

            navigate(
              `/board?type=${type}&cate=badminton&city=${selectedCity}&gu=${selectedGu}&page=1&amount=12`
            );
          }}
          selected={cate === "badminton"}
        >
          배드민턴
        </CategoryCard>
        <CategoryCard
          onClick={(e) => {
            e.preventDefault();

            navigate(
              `/board?type=${type}&cate=tennis&city=${selectedCity}&gu=${selectedGu}&page=1&amount=12`
            );
          }}
          selected={cate === "tennis"}
        >
          테니스
        </CategoryCard>
        <CategoryCard
          onClick={(e) => {
            e.preventDefault();

            navigate(
              `/board?type=${type}&cate=golf&city=${selectedCity}&gu=${selectedGu}&page=1&amount=12`
            );
          }}
          selected={cate === "golf"}
        >
          골프
        </CategoryCard>
        <CategoryCard
          onClick={(e) => {
            e.preventDefault();

            navigate(
              `/board?type=${type}&cate=etc&city=${selectedCity}&gu=${selectedGu}&page=1&amount=12`
            );
          }}
          selected={cate === "etc"}
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

      background: ${selected ? "#00CFFF;" : "#ffffff"};
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
