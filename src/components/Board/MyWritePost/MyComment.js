import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { boardAction } from "../../../redux/actions/boardAction";
import GetDate from "../../../utils/GetDate";
import MyCommentCard from "../BoardPublic/MyCommentCard";
import Pagination from "../BoardPublic/Pagination";

const MyComment = () => {
  const [page, setPage] = useState(1);
  const [commentsList, setCommentsList] = useState([]);
  const query = useLocation().search;
  const type = new URLSearchParams(query).get("type");

  let res;
  let commentsData = [];

  const dispatch = useDispatch();

  useEffect(() => {
    loadMyComments();
  }, []);

  const loadMyComments = async () => {
    try {
      if (type == "mymatching") {
        res = await dispatch(boardAction.loadMyMatchingComments({})).unwrap();
      } else {
        res = await dispatch(boardAction.loadMyInformationComments({})).unwrap();
      }
      commentsData = res.data?.map((resDate) => {
        resDate["createDate"] = GetDate(resDate?.createdAt);
        return resDate;
      });
      console.log(res);
      setCommentsList(commentsData);
    } catch (e) {
      console.log(e);
    }
  };

  console.log(commentsList);

  return (
    <>
      {commentsList &&
        commentsList.map((comment) => {
          <MyCommentCard
            boardId={comment?.boardid}
            commentId={comment?.id}
            content={comment?.comment}
            title={comment?.comment}
            date={comment?.createDate}
          />;
        })}

      {/* <MyCommentCard content="댓글 내용 들어가는 칸" 
    title="글 제목입니다" 
    date="20xx.xx.xx"/>
    <MyCommentCard content="댓글입니다" 
    title="글 제목" 
    date="20xx.xx.xx"/>    */}
      <PageFrame>
        <Frame>
          <Pagination total={5} limit={2} page={page} setPage={setPage} />
        </Frame>
      </PageFrame>
    </>
  );
};

const PageFrame = styled.div`
  width: 1000px;
  height: 110px;
  box-sizing: border-box;
  display: flex;
`;

const Frame = styled.div`
  margin: auto;
`;

export default MyComment;
