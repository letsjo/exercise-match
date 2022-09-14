import React from "react";
import styled from "styled-components";
import Pagination from "../BoardPublic/Pagination";
import { useState, useEffect } from "react";
import MatchingCard from "./MatchingCard";
import CategoryBoxFrame from "../BoardPublic/CategoryBoxFrame";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TranslateCates from "../../../utils/TranslateCates";
import GetDate from "../../../utils/GetDate";
import { boardAction } from "../../../redux/actions/boardAction";
import CurrentLocationCard from "../../Main/CurrentLocationCard";


const MatchingListFrame = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLogin } = useSelector((state) => state.userReducer);

  const { selectedCity, selectedGu } = useSelector((state) => state.locationReducer);

  const [boardsList, setBoardsList] = useState([]);
  const query = useLocation().search;  
  const type = new URLSearchParams(query).get("type");
  const cate = new URLSearchParams(query).get("cate");
  const city = new URLSearchParams(query).get("city");
  const gu = new URLSearchParams(query).get("gu");

  const pageNumber = new URLSearchParams(query).get("page");
  const amount = new URLSearchParams(query).get("amount");
  let boardData = [];
  
  const [page, setPage] = useState(pageNumber?pageNumber:1);
  const [boardTotalCount, setBoardTotalCount] = useState(0);
    

  const querys = useLocation().search;

  useEffect(() => {
    loadMatching();
    window.history.pushState(
      null,
      null,
      `/board?type=${type ? type : "matching"}&cate=${
        cate ? cate : "all"
      }&city=${selectedCity ? selectedCity : "all"}&gu=${
        selectedGu ? selectedGu : "all"
      }&page=${page}&amount=${amount}`
    );
  }, [page,cate,city,gu,amount]);

  const loadMatching = async () => {
    try {
      const res = await dispatch(boardAction.loadMatching({ cate, page, amount, city, gu })).unwrap();
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
      <CategoryBoxFrame page={page}/>
      <BoardListFrame>
        <CurrentLocationCard isDetail={true}/>
        <ButtonBox>
          {isLogin?(
            <WriteButton
            onClick={() => {
              navigate("/matchingpostwrite");
            }}
          >
            작성하기
          </WriteButton>
          ):""}
          
        </ButtonBox>
        {boardsList && boardsList.map((list, idx)=>
        ( <MatchingCard 
          key={idx}
          boardId={list.id}
          // completed={true}
          category={TranslateCates(list.category)}
          title={list.title}
          endDate={list.endDate}

          currentEntry={list.currentEntry}
          maxEntry={list.maxEntry}
          context={list.context}
          writerNickname={list.memberSimpleDto.nickname} 
          writerProfile={list.memberSimpleDto.profile} 
          locationCity={list.city}
          locationGu={list.gu}
          like={list.likeCount}
          comment={list.commentCount}
          createDate={list.createDate}
           />
          )
        )}
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
