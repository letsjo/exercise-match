import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BulletinCard from "../BulletinBoard/BulletinCard";
import Pagination from "../BoardPublic/Pagination";
import { useDispatch } from "react-redux";
import { boardAction } from "../../../redux/actions/boardAction";
import GetDate from "../../../utils/GetDate";
import { useLocation } from "react-router-dom";

const MyBulletin = () => {
  const [boardsList, setBoardsList] = useState([]);
  const dispatch = useDispatch();

  const query = useLocation().search;
  const pageNumber = new URLSearchParams(query).get("page");
  const amount = new URLSearchParams(query).get("amount");

  const [page, setPage] = useState(pageNumber?pageNumber:1);
  const [boardTotalCount, setBoardTotalCount] = useState(0);

  let boardData = [];

  useEffect(() => {
    loadMyInformation();
  }, [page]);

  const loadMyInformation = async () => {
    try {
      const res = await dispatch(boardAction.loadMyInformation({page,amount})).unwrap();
      boardData = res.data.boardInfo?.map((resDate) => {
        // var date = new Date(new Date(resDate.endDateAt).getTime());
        // resDate["endDateAtYear"] = date.getFullYear();
        // resDate["endDateAtMonth"] = date.getMonth() + 1;
        // resDate["endDateAtDate"] = date.getDate();
        // resDate["endDateAtWeek"] = WEEKDAY[date.getDay()];
        resDate["created"] = GetDate(resDate.createdAt);
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
      {boardsList &&
        boardsList?.map((board, idx) => (
          <BulletinCard
            key={idx}
            title={board.title}
            content={board.content}
            comment={board.commentCount}
            like={board.likeCount}
            createdAt={board.created}
            image={board.boardimage}
            boardId={board.boardId}
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

export default MyBulletin;
