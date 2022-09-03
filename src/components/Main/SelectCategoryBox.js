import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CgGym } from "react-icons/cg";
import {
  GiRunningShoe,
  GiTennisRacket,
  GiTennisBall,
  GiGolfTee,
} from "react-icons/gi";
import { RiRidingLine } from "react-icons/ri";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const SelectCategoryBox = () => {
  const { selectedCity, selectedGu } = useSelector(
    (state) => state.locationReducer
  );

  const navigate = useNavigate();

  return (
    <BoxWrap>
      <IconBox>
        <IconImage
          onClick={() => {
            navigate(
              `/board?type=matching&cate=gym&city=${selectedCity}&gu=${selectedGu}&page=1&amount=12`
            );
          }}
        >
          <CgGym size={38} />
        </IconImage>
        <CategoryName>헬스</CategoryName>
      </IconBox>

      <IconBox>
        <IconImage
          onClick={() => {
            navigate(
              `/board?type=matching&cate=running&city=${selectedCity}&gu=${selectedGu}&page=1&amount=12`
            );
          }}
        >
          <GiRunningShoe size={38} />
        </IconImage>
        <CategoryName>런닝&조깅</CategoryName>
      </IconBox>

      <IconBox>
        <IconImage
          onClick={() => {
            navigate(
              `/board?type=matching&cate=badminton&city=${selectedCity}&gu=${selectedGu}&page=1&amount=12`
            );
          }}
        >
          <GiTennisRacket size={38} />
        </IconImage>
        <CategoryName>배드민턴</CategoryName>
      </IconBox>

      <IconBox>
        <IconImage
          onClick={() => {
            navigate(
              `/board?type=matching&cate=tennis&city=${selectedCity}&gu=${selectedGu}&page=1&amount=12`
            );
          }}
        >
          <GiTennisBall size={38} />
        </IconImage>
        <CategoryName>테니스</CategoryName>
      </IconBox>

      <IconBox>
        <IconImage
          onClick={() => {
            navigate(
              `/board?type=matching&cate=ridding&city=${selectedCity}&gu=${selectedGu}&page=1&amount=12`
            );
          }}
        >
          <RiRidingLine size={38} />
        </IconImage>
        <CategoryName>라이딩</CategoryName>
      </IconBox>

      <IconBox>
        <IconImage
          onClick={() => {
            navigate(
              `/board?type=matching&cate=golf&city=${selectedCity}&gu=${selectedGu}&page=1&amount=12`
            );
          }}
        >
          <GiGolfTee size={38} />
        </IconImage>
        <CategoryName>골프</CategoryName>
      </IconBox>

      <IconBox>
        <IconImage
          onClick={() => {
            navigate(
              `/board?type=matching&cate=etc&city=${selectedCity}&gu=${selectedGu}&page=1&amount=12`
            );
          }}
        >
          <HiOutlineDotsHorizontal size={38} />
        </IconImage>
        <CategoryName>기타</CategoryName>
      </IconBox>
    </BoxWrap>
  );
};

const BoxWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1000px;
  height: 80px;
  margin: auto auto 50px;
`;

const IconBox = styled.div`
  width:100px;
  height: 80px;
  border-radius: 70px;
  background: #FFFFFF;
box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
  &:hover{
    background: #F0F0F0;
    transition: 0.2s;
  }
`;

const IconImage = styled.div`
  width: 52px;
  height: 52px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2.5px auto 0;
  cursor: pointer;
  box-sizing: border-box;
`;

const CategoryName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: #000000;
  height: 23px;
`;

export default SelectCategoryBox;
