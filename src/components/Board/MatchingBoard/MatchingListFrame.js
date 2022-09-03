import React from "react";
import styled from "styled-components";
import Pagination from "../BoardPublic/Pagination";
import { useState } from "react";
import MatchingCard from "./MatchingCard";
import CategoryBoxFrame from "../BoardPublic/CategoryBoxFrame";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const MatchingListFrame = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const{ boardResponseDtoList} = useSelector((state)=>state.boardReducer.boardData );

  console.log(boardResponseDtoList);

  // const now = new Date();
  const c = new Date(boardResponseDtoList&&boardResponseDtoList[0]?.createdAt).getDate();
  console.log(c,"이거 1!1");

  // const createdAtDay = now.getDate()-new Date(boardResponseDtoList&&boardResponseDtoList[0].createdAt).getDate();
  // console.log(createdAtDay,"minus");


  const reducer = useSelector((state)=>state.boardReducer);
  console.log(reducer);

  return (
    <>
      <CategoryBoxFrame page={page}/>
      <BoardListFrame>
        <ButtonBox>
          <WriteButton
            onClick={() => {
              navigate("/matchingpostwrite");
            }}
          >
            작성하기
          </WriteButton>
        </ButtonBox>
        {boardResponseDtoList&&boardResponseDtoList.map((list, idx)=>
        ( <MatchingCard 
          key={idx}
          // completed={true}
          category={list.category}
          title={list.title}
          date={list.endDateAt}
          currentEntry={list.currentEntry}
          maxEntry={list.maxEntry}
          context={list.context}
          writer={list.memberSimpleDto.nickname} 
          location={list.city}
          like={list.likeCount}
          comment={list.commentCount}
          // createdAt={createdAtDay}
           />
          )
        )}
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
  width: 1000px;
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

export default MatchingListFrame;
