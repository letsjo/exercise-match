import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/NavBar'
import BulletinCategoryBox from '../components/BulletinCategoryBox'
import BulletinListFrame from '../components/BulletinListFrame'

const BulletinBoard = () => {
  return (
    <Container>
        <NavBar/>
        <MainFrame>
            <CategoryFrame>
                <MatchingTitle>매칭(구합니다)</MatchingTitle>
                <InfoTitle>정보 공유 게시판</InfoTitle>
            </CategoryFrame>
            <ContextFrame>
                <BulletinCategoryBox/>
                <BulletinListFrame/>
                
            </ContextFrame>
        </MainFrame>
    </Container>
    
  )
}

const Container =styled.div`

`;

const MainFrame = styled.div`
    display: flex;
    justify-content: center;
    
`;

const CategoryFrame =styled.div`
    width: 180px;
    height: 100vh;
`;

const ContextFrame =styled.div`

`;



const MatchingTitle =styled.div`
    height: 51px;
    width: 180px;
    padding: 14px 20px;
    color: #494949;
    font-weight: bold;
    font-size: 15px;
    box-sizing: border-box;
    border-bottom: 2px solid #F0F0F0;
`;

const InfoTitle =styled.div`
    height: 51px;
    width: 180px;
    padding: 14px 20px;
    color: #494949;
    font-weight: bold;
    font-size: 15px;
    box-sizing: border-box;
    background-color: #dedede;
    border-bottom: 2px solid #DEDEDE;
`;



export default BulletinBoard