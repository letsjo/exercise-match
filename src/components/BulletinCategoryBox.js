import React from 'react'
import styled from 'styled-components';

const BulletinCategoryBox = () => {
  return (
    <CategorySelect>
        <CategoryBox>
            <CategoryCard>전체</CategoryCard>
            <CategorySelectCard>헬스</CategorySelectCard>
            <CategoryCard>조깅&러닝</CategoryCard>
            <CategoryCard>라이딩</CategoryCard>
            <CategoryCard>배드민턴</CategoryCard>
            <CategoryCard>테니스</CategoryCard>
            <CategoryCard>골프</CategoryCard>
            <CategoryCard>기타</CategoryCard>
        </CategoryBox>
    </CategorySelect>
  )
}

const CategorySelect =styled.div`
    height: 63px;
    width: 1258px;
    border: 2px solid #f0f0f0;
    display: flex;
    box-sizing: border-box;
    `;

const CategoryBox = styled.div`
    height:33px;
    width: 619px;
    margin: auto auto auto 50px;
    display: flex;
    justify-content: space-between;
`;

const CategoryCard= styled.div`
    display: inline-block;
    height: 33px;
    border-radius: 5px;
    padding: 5px 10px;
    box-sizing: border-box;
    border: 1px solid #FFFFFF;
    font-size: 15px;
    font-weight: bold;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;

const CategorySelectCard =styled.div`
    display: inline-block;
    height: 33px;
    border-radius: 5px;
    padding: 5px 10px;
    box-sizing: border-box;
    background: #A8A8A8;
    border: 1px solid #F0F0F0;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    color:#ffffff;
    font-size: 15px;
    font-weight: bold;
`;

export default BulletinCategoryBox