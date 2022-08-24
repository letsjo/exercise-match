import React from 'react'
import styled from 'styled-components'

const SelectCategoryBox = () => {
  return (
    <BoxWrap>
        <IconBox>
            <IconImage/>
            <CategoryName>헬스</CategoryName>
        </IconBox>
            
        <IconBox>
            <IconImage/>
            <CategoryName>런닝&조깅</CategoryName>
        </IconBox>

        <IconBox>
            <IconImage/>
            <CategoryName>배드민턴</CategoryName>
        </IconBox>

        <IconBox>
            <IconImage/>
            <CategoryName>테니스</CategoryName>
        </IconBox>

        <IconBox>
            <IconImage/>
            <CategoryName>라이딩</CategoryName>
        </IconBox>

        <IconBox>
            <IconImage/>
            <CategoryName>골프</CategoryName>
        </IconBox>

        <IconBox>
            <IconImage/>
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
    background-color: beige;
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