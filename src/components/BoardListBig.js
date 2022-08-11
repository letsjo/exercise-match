import React from "react";
import styled from "styled-components";
import BoardCardBig from "./BoardCardBig";

const BoardListBig = () => {
  return (
    <BoardListFrame>
      <BoardCardBig />
      <BoardCardBig />
    </BoardListFrame>
  );
};

const BoardListFrame = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 31px;
`;

export default BoardListBig;
