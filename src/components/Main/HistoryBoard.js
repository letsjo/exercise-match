import React from "react";
import styled from "styled-components";
import BoardListHistory from "./BoardListHistory";
import BoardInfo from "./BoardNameInfo";

const HistoryBoard = () => {
  return (
    <BoardWrapper>
      <BoardInfo iconImg="https://cdn-icons-png.flaticon.com/512/5053/5053917.png" title="내가 작성한 글/내가 신청한 글"/>
      <BoardListHistory />
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
  gap: 5px;
  margin-bottom: 100px;
`;

export default HistoryBoard;