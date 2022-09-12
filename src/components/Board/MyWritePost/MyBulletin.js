import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BulletinCard from "../BulletinBoard/BulletinCard";
import Pagination from "../BoardPublic/Pagination";
import { useDispatch } from "react-redux";
import { boardAction } from "../../../redux/actions/boardAction";
import GetDate from "../../../utils/GetDate";

const MyBulletin = () => {
  const [page, setPage] = useState(1);
  const [boardsList, setBoardsList] = useState([]);
  const dispatch = useDispatch();

  let boardData = [];

  useEffect(() => {
    loadMyInformation();
  }, [page]);

  const loadMyInformation = async () => {
    try {
      const res = await dispatch(boardAction.loadMyInformation({})).unwrap();
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

export default MyBulletin;
