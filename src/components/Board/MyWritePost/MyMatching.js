import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { boardAction } from "../../../redux/actions/boardAction";
import GetDate from "../../../utils/GetDate";
import Pagination from "../BoardPublic/Pagination";
import MatchingCard from "../MatchingBoard/MatchingCard";

const MyMatching = ({ type }) => {
  const [boardsList, setBoardsList] = useState([]);
  const dispatch = useDispatch();
  
  const query = useLocation().search;
  const pageNumber = new URLSearchParams(query).get("page");
  const amount = new URLSearchParams(query).get("amount");

  const [page, setPage] = useState(pageNumber?pageNumber:1);
  const [boardTotalCount, setBoardTotalCount] = useState(0);

  let res;
  let boardData = [];

  useEffect(() => {
    loadMyMatchings();
  }, [page]);

  const loadMyMatchings = async () => {
    try {
      if (type == "writer") {
        res = await dispatch(boardAction.loadMyMatchings({ page, amount })).unwrap();
      } else {
        res = await dispatch(boardAction.loadMyEntrys({ page, amount })).unwrap();
      }
      console.log(res);
      boardData = res.data.boardInfo?.map((resDate) => {
        // var date = new Date(new Date(resDate.endDateAt).getTime());
        // resDate["endDateAtYear"] = date.getFullYear();
        // resDate["endDateAtMonth"] = date.getMonth() + 1;
        // resDate["endDateAtDate"] = date.getDate();
        // resDate["endDateAtWeek"] = WEEKDAY[date.getDay()];
        resDate["endDate"] = GetDate(resDate.endDateAt);
        return resDate;
      });
      setBoardsList(boardData);
      setBoardTotalCount(res.data.totalCount);
    } catch (e) {
      console.log(e);
    }
  };

  console.log(boardsList);

  return (
    <>
      {boardsList?.map((board, idx) => (
        <MatchingCard
          key={idx}
          type={
            type == "type" && board.maxEntry == board.currentEntry
              ? "apply"
              : ""
          }
          completed={board.maxEntry == board.currentEntry}
          category="카테고리"
          title={board.title}
          date={
            board.endDate.year +
            "년 " +
            board.endDate.month +
            "월 " +
            board.endDate.day +
            "일 " +
            board.endDate.week +
            "요일"
          }
          currentEntry={board?.currentEntry}
          maxEntry={board?.maxEntry}
          context={board?.content}
          writerNickname={board.writer?.nickname}
          writerProfile={board.writer?.profile}
          locationCity={board?.city}
          locationGu={board?.gu}
          boardId={board?.boardId}
        />
      ))}
      <PageFrame>
        <Frame>
          <Pagination total={boardTotalCount} amount={amount} page={page} setPage={setPage} />
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

export default MyMatching;
