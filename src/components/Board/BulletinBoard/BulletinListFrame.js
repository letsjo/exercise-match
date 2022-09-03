import React from "react";
import styled from "styled-components";
import BulletinCard from "./BulletinCard";
import Pagination from "../BoardPublic/Pagination";
import { useState } from "react";
import CategoryBoxFrame from "../BoardPublic/CategoryBoxFrame";
import { useNavigate } from "react-router-dom";

const BulletinListFrame = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  console.log("rander Frame");

  return (
    <>
      <CategoryBoxFrame page={page} />
      <BoardListFrame>
        <ButtonBox>
          <WriteButton onClick={()=>{navigate("/communitypostWrite")}}>작성하기</WriteButton>
        </ButtonBox>
        <BulletinCard />
        
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
