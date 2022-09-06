import React from 'react';
import styled from "styled-components";
import BoardInfo from "./BoardNameInfo";
import OtherPostCardBig from './OtherPostCardBig';
import { useSelector } from "react-redux";

const OtherBoard = ({iconImg,title,boardUrl}) => {

  return (
    <BoardWrapper>
        <BoardInfo iconImg={iconImg} title={title} boardUrl={boardUrl}/>
        <OtherPostCardBig/>
    </BoardWrapper>
  )
}

const BoardWrapper = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-bottom: 112px;
`;

export default OtherBoard