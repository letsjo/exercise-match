import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BoardInfo from "./BoardNameInfo";
import BoardListBig from "./BoardListBig";
import BoardListSmall from "./BoardListSmall";
import { boardAction } from "../../redux/actions/boardAction";
import { useDispatch } from "react-redux";
import BoardCardBig from "./BoardCardBig";
import BoardCardSmall from "./BoardCardSmall";

const PopularBoard = ({ iconImg, category, title, boardUrl }) => {
  const dispatch = useDispatch();
  const [bigListData, setBigListData] = useState();
  const [listData, setListData] = useState();

  useEffect(() => {
    loadMainInformation();
  }, []);

  const loadMainInformation = async () => {
    try {
      const res = await dispatch(
        boardAction.loadMainInformation({ category })
      ).unwrap();
      console.log(res);
      setBigListData([res?.data[0], res?.data[1]]);
      setListData([res?.data[2], res?.data[3], res?.data[4]]);
    } catch (e) {
      console.log(e);
    }
  };

  console.log(bigListData);
  console.log(listData);

  return (
    <BoardWrapper>
      <BoardInfo iconImg={iconImg} title={title} boardUrl={boardUrl} />
      <BoardFrame>
        <BoardBigWarp>
          <BoardListFrame>
            {bigListData &&
              bigListData.map((list, idx) => (
                <BoardCardBig
                  title={list?.title}
                  writer={list?.nickname}
                  content={list?.content}
                  boardId={list?.boardId}
                  image={list?.boardimage}
                />
              ))}
          </BoardListFrame>
          {/* <BoardListBig bigListData={bigListData} /> */}
        </BoardBigWarp>
        <BoardSmallWrap>
          <BoardSmallListFrame>
            {listData &&
              listData.map((list, idx) => (
                <BoardCardSmall
                  title={list?.title}
                  writer={list?.nickname}
                  content={list?.content}
                  boardId={list?.boardId}
                  image={list?.boardimage}
                />
              ))}
            {/* 
            <BoardCardSmall
              title="제목들어올 자리"
              writer="글쓴"
              content="내용칸입니당"
              image="https://placehold.jp/80x70.png"
            />
            <BoardCardSmall
              title="제목"
              writer="글쓴"
              content="내용칸입니당"
              image="https://placehold.jp/80x70.png"
            /> */}
          </BoardSmallListFrame>
          {/* <BoardListSmall listData={listData} /> */}
        </BoardSmallWrap>
      </BoardFrame>
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
  margin-bottom: 120px;
`;

const BoardFrame = styled.div`
  display: flex;
  flex-direction: row;
  gap: 31px;
`;

const BoardBigWarp = styled.div``;

const BoardListFrame = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 31px;
`;

const BoardSmallListFrame = styled.div`
  width: 430px;
`;

const BoardSmallWrap = styled.div``;

export default PopularBoard;
