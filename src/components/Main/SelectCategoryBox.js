import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SelectCategoryBox = () => {
  const { selectedCity, selectedGu } = useSelector(
    (state) => state.locationReducer
  );

  const navigate = useNavigate();

  return (
    <BoxWrap>
      <IconBox
        onClick={() => {
          navigate(
            `/board?type=matching&cate=gym&city=${selectedCity}&gu=${selectedGu}&page=1&amount=12`
          );
        }}
      >
        <IconImage>
          <img src="/images/cate00_gym.png" alt="" />
        </IconImage>
        <CategoryName>헬스</CategoryName>
      </IconBox>

      <IconBox
        onClick={() => {
          navigate(
            `/board?type=matching&cate=running&city=${selectedCity}&gu=${selectedGu}&page=1&amount=12`
          );
        }}
      >
        <IconImage>
          <img src="/images/cate01_running.png" alt="" />
        </IconImage>
        <CategoryName>런닝&조깅</CategoryName>
      </IconBox>

      <IconBox
        onClick={() => {
          navigate(
            `/board?type=matching&cate=badminton&city=${selectedCity}&gu=${selectedGu}&page=1&amount=12`
          );
        }}
      >
        <IconImage>
          <img src="/images/cate03_badminton.png" alt="" />
        </IconImage>
        <CategoryName>배드민턴</CategoryName>
      </IconBox>

      <IconBox
        onClick={() => {
          navigate(
            `/board?type=matching&cate=tennis&city=${selectedCity}&gu=${selectedGu}&page=1&amount=12`
          );
        }}
      >
        <IconImage>
          <img src="/images/cate04_tennis.png" alt="" />
        </IconImage>
        <CategoryName>테니스</CategoryName>
      </IconBox>

      <IconBox
        onClick={() => {
          navigate(
            `/board?type=matching&cate=ridding&city=${selectedCity}&gu=${selectedGu}&page=1&amount=12`
          );
        }}
      >
        <IconImage>
          <img src="/images/cate05_riding.png" alt="" />
        </IconImage>
        <CategoryName>라이딩</CategoryName>
      </IconBox>

      <IconBox
        onClick={() => {
          navigate(
            `/board?type=matching&cate=golf&city=${selectedCity}&gu=${selectedGu}&page=1&amount=12`
          );
        }}
      >
        <IconImage>
          <img src="/images/cate06_golf.png" alt="" />
        </IconImage>
        <CategoryName>골프</CategoryName>
      </IconBox>

      <IconBox
        onClick={() => {
          navigate(
            `/board?type=matching&cate=etc&city=${selectedCity}&gu=${selectedGu}&page=1&amount=12`
          );
        }}
      >
        <IconImage>
          <img src="/images/cate07_etc.png" alt="" />
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
  width: 100px;
  height: 80px;
  border-radius: 70px;
  background: #ffffff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background: #f0f0f0;
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
  box-sizing: border-box;
  img {
    width: 38px;
    height: 38px;
  }
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
