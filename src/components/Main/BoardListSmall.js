import React from "react";
import styled from "styled-components";
import BoardCardSmall from "./BoardCardSmall";

const BoardListSmall = ({listData}) => {
  return (
    <BoardListFrame>
      <BoardCardSmall
      title="제목"
      writer="글쓴"
      content="내용칸입니당"
      image="https://placehold.jp/80x70.png" />
      <BoardCardSmall
      title="제목들어올 자리"
      writer="글쓴"
      content="내용칸입니당"
      image="https://placehold.jp/80x70.png" />
      <BoardCardSmall
      title="제목"
      writer="글쓴"
      content="내용칸입니당"
      image="https://placehold.jp/80x70.png" />
    </BoardListFrame>
  );
};

const BoardListFrame = styled.div`
  width: 430px;
`;

export default BoardListSmall;
