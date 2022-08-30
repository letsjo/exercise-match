import React from "react";
import styled from "styled-components";
import BoardCardBig from "./BoardCardBig";

const BoardListBig = () => {
  return (
    <BoardListFrame>
      <BoardCardBig 
      title="게시글 제목"
      writer="작성자"
      content="게시물 내용 게시물 내용"
      image="https://placehold.jp/250x150.png" />
      <BoardCardBig 
      title="테스트 게시물"
      writer="닉네임"
      content="내용입니다!"
      image="https://placehold.jp/250x150.png"/>
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
