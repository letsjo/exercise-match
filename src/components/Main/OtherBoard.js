import React, { useEffect } from "react";
import styled from "styled-components";
import BoardInfo from "./BoardNameInfo";
import OtherPostCardBig from "./OtherPostCardBig";
import { useDispatch, useSelector } from "react-redux";
import { boardAction } from "../../redux/actions/boardAction";

const OtherBoard = ({ iconImg, category, title, boardUrl }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    loadMainInformation();
  }, []);

  const loadMainInformation = async () => {
    try {
      const res = await dispatch(
        boardAction.loadMainInformation({ category })
      ).unwrap();
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <BoardWrapper>
      <BoardInfo iconImg={iconImg} title={title} boardUrl={boardUrl} />
      <OtherPostCardBig />
    </BoardWrapper>
  );
};

const BoardWrapper = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-bottom: 112px;
`;

export default OtherBoard;
