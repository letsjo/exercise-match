import React from "react";
import styled from "styled-components";
import BoardCardHistory from "./BoardCardHistory";

const BoardListHistory = () => {
  return (
    <BoardFrame>
      <BoardCardHistory />
      <BoardCardHistory title="27일날 테니스 같이 칠 사람?" entrycount="0/1"/>
      <BoardCardHistory title="저녁시간 헬스 같이 다니실 분" entrycount="0/5"/>
      <BoardCardHistory title="9월 1일날 정기 축구회 미드필더 가능하신분?" entrycount="0/1"/>
    </BoardFrame>
  );
};

const BoardFrame = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 1000px;
`;

export default BoardListHistory;
