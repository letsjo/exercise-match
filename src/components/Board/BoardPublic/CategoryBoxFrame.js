import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { boardAction } from "../../../redux/actions/boardAction";

const CategoryBoxFrame = ({}) => {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.boardReducer);

  const [cate, setCate] = useState(category);

  useEffect(() => {
    dispatch(boardAction.setCategory(cate));
  }, [cate]);

  return (
    <CategorySelect>
      <CategoryBox>
        <CategoryCard onClick={e=>{
            e.preventDefault();
            setCate("all")}} selected={cate === "all" ? true : false}>
          전체
        </CategoryCard>
        <CategoryCard onClick={e=>{
            e.preventDefault();
            setCate("gym")}} selected={cate === "gym" ? true : false}>
          헬스
        </CategoryCard>
        <CategoryCard onClick={e=>{
            e.preventDefault();
            setCate("running")}} selected={cate === "running" ? true : false}>
          조깅&러닝
        </CategoryCard>
        <CategoryCard onClick={e=>{
            e.preventDefault();
            setCate("ridding")}} selected={cate === "ridding" ? true : false}>
          라이딩
        </CategoryCard>
        <CategoryCard onClick={e=>{
            e.preventDefault();
            setCate("badminton")}} selected={cate === "badminton" ? true : false}>
          배드민턴
        </CategoryCard>
        <CategoryCard onClick={e=>{
            e.preventDefault();
            setCate("tennis")}} selected={cate === "tennis" ? true : false}>
          테니스
        </CategoryCard>
        <CategoryCard onClick={e=>{
            e.preventDefault();
            setCate("golf")}} selected={cate === "golf" ? true : false}>
          골프
        </CategoryCard>
        <CategoryCard onClick={e=>{
            e.preventDefault();
            setCate("ect")}} selected={cate === "ect" ? true : false}>
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
