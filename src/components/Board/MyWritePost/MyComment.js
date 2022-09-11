import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { boardAction } from "../../../redux/actions/boardAction";
import GetDate from "../../../utils/GetDate";
import MyCommentCard from "../BoardPublic/MyCommentCard";
import Pagination from "../BoardPublic/Pagination";

const MyComment = () => {
  const [page, setPage] = useState(1);
  const [commentsList, setCommentsList] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    loadMyComments();
  }, []);

  const loadMyComments = async () => {
    try {
      const res = await dispatch(boardAction.loadMyComments({})).unwrap();
      console.log(res);
      setCommentsList(res.data.commentInfo);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {commentsList.map((comment) => {
        <MyCommentCard
          boardId={comment?.boardid}
          commentId = {comment?.id}
          content={comment?.comment}
          title={comment?.comment}
          date={GetDate(comment?.createdAt)}
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
