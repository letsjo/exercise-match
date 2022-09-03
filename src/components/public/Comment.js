import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { boardAction } from "../../redux/actions/boardAction";
import CommentCard from "./CommentCard";

const Comment = ({ boardId }) => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const [commentButton, setCommentButton] = useState(false);
  const { username } = useSelector((state) => state.userReducer);
  const { comments } = useSelector((state) => state.boardReducer);
  console.log(comments);
  const inputChange = () => {
    // console.log(inputRef.current.value);
    if (inputRef.current.value === "") {
      setCommentButton(false);
    } else {
      setCommentButton(true);
    }
  };

  useEffect(() => {
    dispatch(boardAction.loadComments(boardId));
  }, []);

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
    } catch (err) {
      console.log(err);
    }
    console.log(inputRef.current.value);
  };

  return (
    <Container>
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
      {comments.map((comment, idx) => (
        <CommentCard
          key={idx}
          myComment={username===comment.writer.username}
          boardId={boardId}
          image={comment.writer.profile}
          nickname={comment.writer.nickname}
          content={comment.content}
          date={comment.createdAt}
        />
      ))}
    </Container>
  );
};

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
