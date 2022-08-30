import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const BoardInfo = ({
  iconImg = "https://t1.daumcdn.net/cfile/blog/9969EF4F5B46FD5C2B",
  title = "게시판 타이틀",
  boardUrl = "#",
}) => {
  const navigate = useNavigate();
  const goBoard = (e) => {
    e.preventDefault();
    navigate(boardUrl);
  };
  return (
    <BoardInfoZone>
      <BoardTitle>
        <BoardIcon>
          <img src={iconImg} alt=""/>
        </BoardIcon>
        <div>{title}</div>
      </BoardTitle>
      <BoardButton onClick={(e) => goBoard(e)}>
        <div>전체보기</div>
        <div>{">"}</div>
      </BoardButton>
    </BoardInfoZone>
  );
};

const BoardInfoZone = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
`;

const BoardTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
`;

const BoardIcon = styled.div`
  width: 30px;
  height: 30px;
  /* background-color: #dedede; */
  /* border-radius: 15px; */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  img{
    width: 100%;
  }
`;

const BoardButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  gap: 2px;
  font-weight: 400;
  font-size: 15px;
  line-height: 150%;
`;

export default BoardInfo;
