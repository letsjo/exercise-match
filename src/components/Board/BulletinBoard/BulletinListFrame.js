import React from "react";
import styled from "styled-components";
import BulletinCard from "./BulletinCard";
import Pagination from "../BoardPublic/Pagination";
import CategoryBoxFrame from "../BoardPublic/CategoryBoxFrame";
import GetDate from "../../../utils/GetDate";

import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { boardAction } from "../../../redux/actions/boardAction";

const BulletinListFrame = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLogin } = useSelector((state) => state.userReducer);
  const [boardsList, setBoardsList] = useState([]);
  const query = useLocation().search;
  const cate = new URLSearchParams(query).get("cate");
  const pageNumber = new URLSearchParams(query).get("page");
  const amount = new URLSearchParams(query).get("amount");
  
  const [page, setPage] = useState(pageNumber?pageNumber:1);
  const [boardTotalCount, setBoardTotalCount] = useState(0);
  let boardData = [];
    
  useEffect(() => {
    loadInformation();
  }, [page,cate]);

  const loadInformation = async () => {
    try {
      const res = await dispatch(boardAction.loadInformation({ cate, page, amount })).unwrap();
      boardData = res.data.boardResponseDtoList?.map((resDate) => {
        resDate["createDate"] = GetDate(resDate.createdAt); 
        resDate["endDate"] = GetDate(resDate.endDateAt); 
        return resDate;
      });
      setBoardsList(boardData);
      setBoardTotalCount(res.data.totalCount);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <CategoryBoxFrame page={page} />
      <BoardListFrame>
        <ButtonBox>
          {isLogin ? (
            <WriteButton
              onClick={() => {
                navigate("/communitypostWrite");
              }}
            >
              작성하기
            </WriteButton>
          ) : (
            ""
          )}
        </ButtonBox>
        {boardsList &&
          boardsList.map((list, idx) => (
            <BulletinCard
              key={idx}
              boardId={list.id}
              title={list.title}
              content={list.content}
              comment={list.commentCount}
              like={list.likeCount}
              createdAt={list.createDate}
              image={list.boardimage}
            />
          ))}

        <PageFrame>
          <Frame>
            <Pagination total={boardTotalCount} amount={amount} page={page} setPage={setPage} />
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
