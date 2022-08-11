import React from "react";
import styled from "styled-components";
import BoardHistoryCard from "./BoardHistoryCard";

const BoardHistory = () => {
  return (
    <BoardHistoryWrapper>
      <BoardHistoryCard />
      <BoardHistoryCard />
      <BoardHistoryCard />
      <BoardHistoryCard />
    </BoardHistoryWrapper>
  );
};

const BoardHistoryWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`;

export default BoardHistory;
