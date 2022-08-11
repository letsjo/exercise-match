import React from "react";
import styled from "styled-components";
import BoardCardSmall from "./BoardCardSmall";

const BoardListSmall = () => {
  return (
    <BoardListFrame>
      <BoardCardSmall />
      <BoardCardSmall />
      <BoardCardSmall />
    </BoardListFrame>
  );
};

const BoardListFrame = styled.div`
  width: 430px;
`;

export default BoardListSmall;
