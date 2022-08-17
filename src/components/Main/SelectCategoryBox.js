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
            <CategoryName>테니스</CategoryName>
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
    width: 320px;
    height: 80px;
    margin: auto auto 50px;
`; 

const IconBox =styled.div`
    width: 52px;
`;

const IconImage = styled.div`
    width:52px;
    height: 52px;
    margin-bottom: 5px;
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