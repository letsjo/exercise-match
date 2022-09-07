import React from "react";
import styled from "styled-components";
import BulletinCard from "./BulletinCard";
import Pagination from "../BoardPublic/Pagination";
import { useState } from "react";
import CategoryBoxFrame from "../BoardPublic/CategoryBoxFrame";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const BulletinListFrame = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const {boardResponseDtoList} = useSelector((state)=>state.boardReducer.boardData);
  const { isLogin } = useSelector((state) => state.userReducer);

  // const now = new Date();
  // const createdAtDay = now.getDate()-new Date(boardResponseDtoList&&boardResponseDtoList[0]?.createdAt).getDate();
  // console.log(createdAtDay,"minus");


  const timeSetting = (stringTime) => {
    const objectDate = new Date(stringTime);
    console.log(objectDate);
    var timestampInput = objectDate.getTime();
    var timestampNow = Date.now();
    var gap_time = timestampNow - timestampInput;
    console.log(gap_time);
    if (gap_time < 3600000) {
      return Math.ceil(gap_time / 60000) + " 분 전";
    } else {
      var date = new Date(timestampInput);
      return (
        date.getFullYear() +
        "/" +
        (date.getMonth() + 1) +
        "/" +
        date.getDate() +
        " " +
        date.getHours() +
        ":" +
        date.getMinutes() +
        ":" +
        date.getSeconds()
      );
    }
  };

  console.log(timeSetting);

  console.log("rander Frame");

  return (
    <>
      <CategoryBoxFrame page={page} />
      <BoardListFrame>
        <ButtonBox>
          {isLogin?( <WriteButton onClick={()=>{navigate("/communitypostWrite")}}>작성하기</WriteButton>):""}
         
        </ButtonBox>
        {boardResponseDtoList&&boardResponseDtoList.map((list, idx)=>(
          <BulletinCard 
          key={idx}
          boardId={list.id}
        title={list.title}
        content={list.content}
        comment={list.commentCount}
      like={list.likeCount}
      createdAt={timeSetting(list.createdAt)}
      image={list.boardimage}/>
        ))}
        
        
        <PageFrame>
          <Frame>
            <Pagination total={5} limit={2} page={page} setPage={setPage} />
          </Frame>
        </PageFrame>
      </BoardListFrame>
    </>
  );
};

const ButtonBox = styled.div`
  height: 69px;
  width: 958px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
`;

const WriteButton = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  width: 94px;
  height: 49px;
  border: 1px solid #f0f0f0;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  font-size: 20px;
  padding: 9px;
  box-sizing: border-box;
  cursor: pointer;
`;

const PageFrame = styled.div`
  width: 958px;
  height: 110px;
  box-sizing: border-box;
  display: flex;
`;

const Frame = styled.div`
  margin: auto;
`;

const BoardListFrame = styled.div`
  height: 100%;
  width: 1258px;
  border-top: 2px solid #f0f0f0;
  border-left: 2px solid #f0f0f0;
  padding: 10px 50px 10px 70px;
  box-sizing: border-box;
`;

export default BulletinListFrame;
