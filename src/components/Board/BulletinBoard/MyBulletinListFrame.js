import React from "react";
import styled, { css } from "styled-components";
import { useState } from "react";
import Pagination from "../BoardPublic/Pagination";
import CommentCard from "../BoardPublic/CommentCard";
import MyBulletin from "../MyWritePost/MyBulletin";
import MyComment from "../MyWritePost/MyComment";
import MyMatching from "../MyWritePost/MyMatching";

const MyBulletinListFrame = ({ type }) => {
  const [page, setPage] = useState(1);

  const [boardType, setBoardType] = useState("write");

  const WriteOnClick = () => {
    setBoardType("write");
  };

  const ApplyOnClick = () => {
    setBoardType("apply");
  };

  const CommentOnClick = () => {
    setBoardType("comment");
  };

  console.log(boardType);

  return (
    <>
      <BoardListFrame>
        <SelectBox>
          <SelectTitle>
            <Text>나의 게시글</Text>
          </SelectTitle>
          <ButtonBox>
            <Write boardType={boardType} onClick={WriteOnClick}>
              작성 글
            </Write>
            {type == "mymatching" && (
              <Apply boardType={boardType} onClick={ApplyOnClick}>
                신청한 글
              </Apply>
            )}
            <Comment boardType={boardType} onClick={CommentOnClick}>
              작성 댓글
            </Comment>
          </ButtonBox>
        </SelectBox>
        <MyCard>
          {type == "mymatching" && boardType == "write" && <MyMatching />}
          {type == "myinformation" && boardType == "write" && <MyBulletin />}
          {boardType == "apply" && <MyMatching />}
          {boardType == "comment" && <MyComment />}
        </MyCard>
      </BoardListFrame>
    </>
  );
};

const SelectBox = styled.div`
  width: 1000px;
  height: 163px;
  padding: 20px 0px;
  box-sizing: border-box;
`;

const SelectTitle = styled.div`
  height: 56px;
  margin-bottom: 10px;
`;

const Text = styled.div`
  height: 36px;
  margin: 10px auto 10px 10px;
  box-sizing: border-box;
  font-weight: bold;
  font-size: 25px;
`;

const ButtonBox = styled.div`
  height: 57px;
  display: flex;
`;

const Write = styled.div`
  cursor: pointer;
  height: 57px;
  padding: 14px;
  box-sizing: border-box;
  font-size: 20px;
  margin-right: 40px;
  ${({ boardType }) => {
    return css`
      font-weight: ${boardType === "write" ? "bold" : ""};
      border-bottom: ${boardType === "write" ? "2px solid #000000" : ""};
    `;
  }}
`;

const Apply = styled.div`
  cursor: pointer;
  height: 57px;
  padding: 14px;
  box-sizing: border-box;
  font-size: 20px;
  margin-right: 40px;
  ${({ boardType }) => {
    return css`
      font-weight: ${boardType === "apply" ? "bold" : ""};
      border-bottom: ${boardType === "apply" ? "2px solid #000000" : ""};
    `;
  }}
`;

const Comment = styled.div`
  cursor: pointer;
  height: 57px;
  padding: 14px;
  box-sizing: border-box;
  font-size: 20px;
  margin-right: 40px;
  ${({ boardType }) => {
    return css`
      font-weight: ${boardType === "comment" ? "bold" : ""};
      border-bottom: ${boardType === "comment" ? "2px solid #000000" : ""};
    `;
  }}
`;

const MyCard = styled.div``;

const Frame = styled.div`
  margin: auto;
`;

const BoardListFrame = styled.div`
  height: 100%;
  width: 1255px;
  border-top: 2px solid #f0f0f0;
  border-left: 4px solid #f0f0f0;
  padding: 20px 50px 20px 70px;
  box-sizing: border-box;
`;

export default MyBulletinListFrame;
