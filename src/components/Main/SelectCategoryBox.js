import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {CgGym} from 'react-icons/cg'
import {GiRunningShoe,GiTennisRacket,GiTennisBall,GiGolfTee} from 'react-icons/gi'
import {RiRidingLine} from 'react-icons/ri'
import {HiOutlineDotsHorizontal} from 'react-icons/hi'

const SelectCategoryBox = () => {
    const { selectedCity, selectedGu } = useSelector(
        (state) => state.locationReducer
      );

      const navigate=useNavigate();

  return (
    <BoxWrap>
        <IconBox>
            <IconImage onClick={()=>{navigate(`/board?type=match&cate=gym&city=${selectedCity}&gu=${selectedGu}&page=1&amount=12`)}}>
                <CgGym size={52}/>
            </IconImage>
            <CategoryName>헬스</CategoryName>
        </IconBox>
            
        <IconBox>
            <IconImage onClick={()=>{navigate(`/board?type=match&cate=running&city=${selectedCity}&gu=${selectedGu}&page=1&amount=12`)}}>
                <GiRunningShoe size={52}/>
            </IconImage>
            <CategoryName>런닝&조깅</CategoryName>
        </IconBox>

        <IconBox>
            <IconImage onClick={()=>{navigate(`/board?type=match&cate=badminton&city=${selectedCity}&gu=${selectedGu}&page=1&amount=12`)}}>
                <GiTennisRacket size={52}/>
            </IconImage>
            <CategoryName>배드민턴</CategoryName>
        </IconBox>

        <IconBox>
            <IconImage onClick={()=>{navigate(`/board?type=match&cate=tennis&city=${selectedCity}&gu=${selectedGu}&page=1&amount=12`)}}>
                <GiTennisBall size={52}/>
            </IconImage>
            <CategoryName>테니스</CategoryName>
        </IconBox>

        <IconBox>
            <IconImage onClick={()=>{navigate(`/board?type=match&cate=ridding&city=${selectedCity}&gu=${selectedGu}&page=1&amount=12`)}}>
            <RiRidingLine size={52}/>
            </IconImage>
            <CategoryName>라이딩</CategoryName>
        </IconBox>

        <IconBox>
            <IconImage onClick={()=>{navigate(`/board?type=match&cate=golf&city=${selectedCity}&gu=${selectedGu}&page=1&amount=12`)}}>
            <GiGolfTee size={52}/>
            </IconImage>
            <CategoryName>골프</CategoryName>
        </IconBox>

        <IconBox>
            <IconImage onClick={()=>{navigate(`/board?type=match&cate=etc&city=${selectedCity}&gu=${selectedGu}&page=1&amount=12`)}}>
            <HiOutlineDotsHorizontal size={52}/>
            </IconImage>
            <CategoryName>기타</CategoryName>
        </IconBox>
    </BoxWrap>
  )
}

const BoxWrap = styled.div`
    display: flex;
    justify-content: space-between;
    width: 802px;
    height: 80px;
    margin: auto auto 70px;
`; 

const IconBox =styled.div`
    /* width: 52px; */
`;

const IconImage = styled.div`
    width:52px;
    height: 52px;
    border-radius: 25px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
    margin:0px auto 5px;
    cursor: pointer;
`;

const CategoryName = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 15px;
color: #000000;
    height: 23px;
`;

export default SelectCategoryBox