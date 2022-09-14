import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { boardAction } from "../../redux/actions/boardAction";
import BoardCardHistory from "./BoardCardHistory";

const BoardListHistory = () => {
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.userReducer);
  const [historyList, setHistoryList] = useState([]);
  let historyData;

  useEffect(() => {
    console.log(isLogin);
    loadHistory();
  }, [isLogin]);

  const loadHistory = async () => {
    try {
      const res = await dispatch(boardAction.loadHistory({})).unwrap();
      console.log(res);
      setHistoryList(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <BoardFrame>
      {historyList &&
        historyList.map((history, idx) => (
          <BoardCardHistory
            key={idx}
            boardId={history.boardId}
            type={history.kind}
            title={history.title}
            maxEntry={history.maxEntry}
            currentEntry={history.currentEntry}
          />
        ))}
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
