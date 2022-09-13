import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { boardAction } from "../../redux/actions/boardAction";
import CommentCard from "./CommentCard";
import ClipLoader from "react-spinners/ClipLoader";
import GetDate from "../../utils/GetDate";
import { boardSliceAction } from "../../redux/reducers/boardReducer";

const Comment = ({ boardId }) => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const [commentButton, setCommentButton] = useState(false);
  const { isLogin, username } = useSelector((state) => state.userReducer);
  const { isCommentLoading } = useSelector((state) => state.boardReducer);
  const [commentsList, setCommentsList] = useState([]);
  let commentsData = [];
  const inputChange = () => {
    if (inputRef.current.value === "") {
      setCommentButton(false);
    } else {
      setCommentButton(true);
    }
  };

  useEffect(() => {
    loadComments();
  }, []);

  const loadComments = async () => {
    try {
      await dispatch(boardSliceAction.requestCommentsList());
      const res = await dispatch(
        boardAction.loadComments({ boardId })
      ).unwrap();
      commentsData = res.data?.map((resDate) => {
        resDate["created"] = GetDate(resDate.createdAt);
        return resDate;
      });
      setCommentsList(commentsData);
      await dispatch(boardSliceAction.requestDoneCommentsList());
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const commentOnClick = async (e) => {
    e.preventDefault();
    if (inputRef.current.value === "") {
      return;
    }
    try {
      const res = await dispatch(
        boardAction.postComment({ boardId, comment: inputRef.current.value })
      ).unwrap();
      console.log(res);
      inputRef.current.value = "";
      loadComments();
    } catch (err) {
      console.log(err);
    }
    console.log(inputRef.current.value);
  };

  return (
    <Container>
      {isLogin && (
        <CommentInputArea>
          <CommentInput
            placeholder="댓글을 남겨주세요"
            onChange={inputChange}
            ref={inputRef}
          />
          <CommentBtn
            commentButton={commentButton}
            onClick={(e) => commentOnClick(e)}
          >
            {commentButton && "등록"}
          </CommentBtn>
        </CommentInputArea>
      )}
      {isCommentLoading ? (
        <SpinnerWrap>
          <ClipLoader color="black" loading={isCommentLoading} size={50} />
        </SpinnerWrap>
      ) : (
        commentsList &&
        commentsList.map((comment, idx) => (
          <CommentCard
            key={idx}
            myComment={username === comment?.writer.username}
            boardId={boardId}
            image={comment?.writer.profile}
            nickname={comment?.writer.nickname}
            commentId={comment?.id}
            content={comment?.comment}
            date={
              comment.created?.year
                ? comment.created?.year +
                  "년 " +
                  comment.created?.month +
                  "월 " +
                  comment.created?.day +
                  "일 " +
                  comment.created?.week +
                  "요일"
                : ""
            }
          />
        ))
      )}
    </Container>
  );
};

const SpinnerWrap = styled.div`
  display: flex;
  margin-left: 1rem;
  margin-right: 1rem;
  width: 100%;
  height: 100vh;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  @media screen and (min-width: 1024px) {
    max-width: 1400px;
    margin: 60px auto 0px;
  }
`;

const Container = styled.div`
  width: 700px;
  box-sizing: border-box;
`;

const CommentInputArea = styled.form`
  width: 700px;
  height: 69px;
  background: transparent;
  display: flex;
`;

const CommentInput = styled.input`
  padding-left: 20px;
  width: 623px;
  height: 69px;
  border: 1px solid #a8a8a8;
  border-right: none;
  box-sizing: border-box;
  border-radius: 10px 0 0 10px;
  margin-bottom: 30px;
  font-size: 20px;
  outline: none;
`;

const CommentBtn = styled.button`
  width: 77px;
  height: 69px;
  border: 1px solid #a8a8a8;
  border-left: none;
  box-sizing: border-box;
  border-radius: 0 10px 10px 0;
  font-weight: bold;
  font-size: 20px;
  display: flex;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  ${({ commentButton }) => {
    return css`
      cursor: ${commentButton ? "pointer" : "auto"};
    `;
  }}
`;

const CommentWrap = styled.div`
  padding: 20px 0px;
  border-bottom: 1px solid #dedede;
`;

const ProfileWrap = styled.div`
  height: 50px;
  display: flex;
`;

const Profile = styled.div`
  height: 50px;
  width: 50px;
  margin-right: 30px;
  border-radius: 70px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const Nickname = styled.div`
  width: 75px;
  height: 29px;
  margin: auto auto auto 0px;
`;

const Delete = styled.div`
  width: 26px;
  height: 26px;
  margin: auto 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  padding: 10px 10px 10px 80px;
  font-size: 20px;
`;

const Date = styled.div`
  height: 29px;
  color: #494949;
  font-size: 20px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  div {
    margin-right: 10px;
  }
`;

export default Comment;
