import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { boardAction } from "../../redux/actions/boardAction";
import BannerCateCard from "./BannerCateCard";
import BoardInfo from "./BoardNameInfo";
import GetDate from "../../utils/GetDate";

const BannerCate = ({ iconImg, title, boardUrl, buttonCate }) => {
  const [mainCate, setMainCate] = useState("all");
  const [mainMatchingList, setMainMatchingList] = useState([]);

  const dispatch = useDispatch();

  useEffect(()=>{
    loadMainMatching();
  },[mainCate]);

  const loadMainMatching = async() => {
    try{
      const res = await dispatch(boardAction.loadMainMatching({category:mainCate})).unwrap();
      setMainMatchingList(res.data);
      console.log(res);
    } catch(e){
      console.log(e);
    }
  }

  console.log(GetDate(mainMatchingList.endDateAt));
  console.log(mainMatchingList);

  return (
    <BoardWrapper>
      <BoardInfo
        iconImg={iconImg}
        title={title}
        boardUrl={boardUrl}
        buttonCate={buttonCate}
        mainCate={mainCate}
        setMainCate={setMainCate}
      />
      <BoardFrame>
        <BoardColumn>
          <BannerCateCard data={mainMatchingList[0]} date={GetDate(mainMatchingList[0]?.endDateAt)}/>
          <BannerCateCard data={mainMatchingList[1]} date={GetDate(mainMatchingList[1]?.endDateAt)}/>
        </BoardColumn>
        <BoardColumn>
          <BannerCateCard data={mainMatchingList[2]} date={GetDate(mainMatchingList[2]?.endDateAt)}/>
          <BannerCateCard data={mainMatchingList[3]} date={GetDate(mainMatchingList[3]?.endDateAt)}/>
        </BoardColumn>
      </BoardFrame>
    </BoardWrapper>
  );
};

const BoardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`;

const BoardFrame = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  gap: 40px;
`;

const BoardColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default BannerCate;
