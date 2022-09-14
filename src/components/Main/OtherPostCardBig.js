import React, { useEffect, useState } from "react";
import OtherPostCard from "./OtherPostCard";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { boardAction } from "../../redux/actions/boardAction";

const OtherPostCardBig = ({ category }) => {
  const dispatch = useDispatch();
  const [mainEtcList, setMainEtcList] = useState([]);

  useEffect(() => {
    loadMainInformation();
  }, []);

  const loadMainInformation = async () => {
    try {
      const res = await dispatch(
        boardAction.loadMainInformation({ category })
      ).unwrap();
      setMainEtcList(res.data);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <OtherPostCardWrap>
      {mainEtcList &&
        mainEtcList?.map((etcData, idx) => (
          <OtherPostCard
            boardId={etcData.boardId}
            image={etcData.boardimage}
            category="기타"
            title={etcData.title}
            writer={etcData.nickname}
          />
        ))}
    </OtherPostCardWrap>
  );
};

const OtherPostCardWrap = styled.div`
  width: 1010px;
  height: 279px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: auto;
`;

export default OtherPostCardBig;
