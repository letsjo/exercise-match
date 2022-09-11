import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { boardAction } from "../../../redux/actions/boardAction";
import GetAddressName from "../../../utils/GetAddressName";
import GetDate from "../../../utils/GetDate";
import Pagination from "../BoardPublic/Pagination";
import MatchingCard from "../MatchingBoard/MatchingCard";

const MyMatching = ({ type }) => {
  const [page, setPage] = useState(1);
  const [boardsList, setBoardsList] = useState([]);
  const dispatch = useDispatch();
  let res;
  let boardData = [];

  useEffect(() => {
    loadMyMatchings();
  }, []);

  const loadMyMatchings = async () => {
    try {
      if (type == "writer") {
        res = await dispatch(boardAction.loadMyMatchings({ page })).unwrap();
      } else {
        res = await dispatch(boardAction.loadMyEntrys({ page })).unwrap();
      }
      boardData = res.data.boardInfo?.map((resDate) => {
        // var date = new Date(new Date(resDate.endDateAt).getTime());
        // resDate["endDateAtYear"] = date.getFullYear();
        // resDate["endDateAtMonth"] = date.getMonth() + 1;
        // resDate["endDateAtDate"] = date.getDate();
        // resDate["endDateAtWeek"] = WEEKDAY[date.getDay()];
        resDate["endDate"] = GetDate(resDate.endDateAt)
        return resDate;
      });
      setBoardsList(boardData);
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

export default MyMatching;
