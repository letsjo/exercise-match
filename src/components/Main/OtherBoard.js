import React from 'react';
import styled from "styled-components";
import BoardInfo from "./BoardNameInfo";
import OtherPostCardBig from './OtherPostCardBig';
import { useSelector } from "react-redux";

const OtherBoard = () => {

  const { selectedCity, selectedGu } = useSelector(
    (state) => state.locationReducer
  );
  return (
    <BoardWrapper>
        <BoardInfo iconImg="http://cdn.onlinewebfonts.com/svg/img_224763.png" title="기타 실시간 인기 게시글" boardUrl={`/board?type=match&cate=etc&city=${selectedCity}&gu=${selectedGu}&page=1&amount=12`}/>
        <OtherPostCardBig/>
    </BoardWrapper>
  )
}

const BoardWrapper = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-bottom: 100px;
`;

export default OtherBoard