import React from 'react'
import { useState } from 'react'
import styled,{css} from 'styled-components'
import NavBar from '../components/public/NavBar'
import BulletinListFrame from '../components/Board/BulletinBoard/BulletinListFrame'
import MatchingListFrame from '../components/Board/MatchingBoard/MatchingListFrame'
import MyBulletinListFrame from '../components/Board/BulletinBoard/MyBulletinListFrame'
import MyMatchingListFrame from '../components/Board/MatchingBoard/MyMatchingListFrame'

const Board = () => {

    const [boardType, setBoardType]=useState("match");

    const MatchingOnClick=()=>{
        setBoardType("match")
    }

    const InfoOnClick= ()=>{
        setBoardType("info")
    }

  return (
    <Container>
        <NavBar/>
        <MainFrame>
            <CategoryFrame>
                <MatchingTitle boardType={boardType} onClick={MatchingOnClick} >매칭(구합니다)</MatchingTitle>
                <InfoTitle boardType={boardType} onClick={InfoOnClick}>정보 공유 게시판</InfoTitle>
            </CategoryFrame>
            <ContextFrame>
                {boardType==="match"?<MatchingListFrame/>:
                boardType==="info"?<BulletinListFrame/>:
                    <></>}
                {/* <BulletinListFrame/> */}
                {/* <MatchingListFrame/> */}
                {/* <MyMatchingListFrame/> */}
                {/* <MyBulletinListFrame/> */}
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
cursor: pointer;
    height: 51px;
    width: 180px;
    padding: 14px 20px;
    color: #494949;
    font-weight: bold;
    font-size: 15px;
    box-sizing: border-box;
    ${({boardType})=>{
        return css`
        border-bottom:${boardType==="match"? "2px solid #DEDEDE":"2px solid #F0F0F0"} ; 
        background-color:${boardType==="match"? "#dedede":""};
        `
     } }
`;

const InfoTitle =styled.div`
cursor: pointer;
    height: 51px;
    width: 180px;
    padding: 14px 20px;
    color: #494949;
    font-weight: bold;
    font-size: 15px;
    box-sizing: border-box;
    ${({boardType})=>{
        return css`
        border-bottom:${boardType==="info"? "2px solid #DEDEDE":"2px solid #F0F0F0"} ; 
        background-color:${boardType==="info"? "#dedede":""};
        `
     } }
`;



export default Board