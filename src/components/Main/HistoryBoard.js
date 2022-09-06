import React from "react";
import styled from "styled-components";
import BoardListHistory from "./BoardListHistory";
import BoardInfo from "./BoardNameInfo";

const HistoryBoard = () => {
  return (
    <BoardWrapper>
      <BoardInfo iconImg="" title="나의 매칭 게시글" boardUrl="/board?type=mymatching&cate=all&page=1&amount=12"/>
      <BoardListHistory />
    </BoardWrapper>
  );
};

const BoardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-bottom: 100px;
`;

export default HistoryBoard;
