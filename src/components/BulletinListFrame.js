import React from 'react'
import styled from 'styled-components';
import BulletinCard from '../components/BulletinCard'

const BulletinListFrame = () => {
  return (
    <BoardListFrame>
        <ButtonBox>
            <WriteButton>작성하기</WriteButton>
        </ButtonBox>
        <BulletinCard/>
        <BulletinCard/>
    </BoardListFrame>
  )
}

const ButtonBox = styled.div`
    height:69px;
    width: 958px;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    
`;

const WriteButton = styled.div`
    font-family: 'Noto Sans KR';
    font-style: normal;
    width:94px;
    height:49px;
    border: 1px solid #F0F0F0;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    font-size: 20px;
    padding :9px;
    box-sizing: border-box;
    
`;

const BoardListFrame = styled.div`
    height: 100vh;
    width: 1258px;  
    border-top: 2px solid #f0f0f0;
    border-left: 4px solid #f0f0f0;
    padding: 10px 50px 10px 70px;
    box-sizing: border-box;
`;

export default BulletinListFrame