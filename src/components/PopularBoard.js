import React from "react";
import styled from "styled-components";
import BoardListBig from "./BoardListBig";
import BoardListSmall from "./BoardListSmall";

const PopularBoard = () => {
  return (
    <BoardFrame>
      <BoardBigWarp>
        <BoardListBig />
      </BoardBigWarp>
      <BoardSmallWrap>
        <BoardListSmall />
      </BoardSmallWrap>
    </BoardFrame>
  );
};

const BoardFrame = styled.div`
  display: flex;
  flex-direction: row;
  gap:31px;
`;

const BoardBigWarp = styled.div``;

const BoardSmallWrap = styled.div``;

export default PopularBoard;
