import React from "react";
import styled from "styled-components";
import BoardInfo from "./BoardInfo";
import BoardListBig from "./BoardListBig";
import BoardListSmall from "./BoardListSmall";

const PopularBoard = ({iconImg, title, boardUrl}) => {
  return (
    <BoardWrapper>
      <BoardInfo iconImg={iconImg} title={title} boardUrl={boardUrl}/>
      <BoardFrame>
        <BoardBigWarp>
          <BoardListBig />
        </BoardBigWarp>
        <BoardSmallWrap>
          <BoardListSmall />
        </BoardSmallWrap>
      </BoardFrame>
    </BoardWrapper>
  );
};

const BoardWrapper = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 120px;
`;


const BoardFrame = styled.div`
  display: flex;
  flex-direction: row;
  gap: 31px;
`;

const BoardBigWarp = styled.div``;

const BoardSmallWrap = styled.div``;

export default PopularBoard;
