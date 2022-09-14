import React from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";

const BoardInfo = ({
  iconImg,
  buttonCate = false,
  title = "게시판 타이틀",
  boardUrl = "#",
  mainCate,
  setMainCate,
}) => {
  const navigate = useNavigate();
  const goBoard = (e) => {
    e.preventDefault();
    navigate(boardUrl);
  };

  return (
    <BoardInfoZone>
      <BoardTitle>
        {iconImg && (
          <BoardIcon>
            <img src={iconImg} alt="" />
          </BoardIcon>
        )}
        <div>{title}</div>
      </BoardTitle>
      <BoardDetailZone buttonCate={buttonCate}>
        {buttonCate && (
          <CateButtonWrap>
            <CategoryCard onClick={e => setMainCate("all")} selected={mainCate == "all"}>
              <div>전체</div>
            </CategoryCard>
            <CategoryCard onClick={e => setMainCate("gym")} selected={mainCate == "gym"}>
              <div>헬스</div>
            </CategoryCard>
            <CategoryCard onClick={e => setMainCate("running")} selected={mainCate == "running"}>
              <div>런닝&조깅</div>
            </CategoryCard>
            <CategoryCard onClick={e => setMainCate("badminton")} selected={mainCate == "badminton"}>
              <div>배드민턴</div>
            </CategoryCard>
            <CategoryCard onClick={e => setMainCate("tennis")} selected={mainCate == "tennis"}>
              <div>테니스</div>
            </CategoryCard>
            <CategoryCard onClick={e => setMainCate("riding")} selected={mainCate == "riding"}>
              <div>라이딩</div>
            </CategoryCard>
            <CategoryCard onClick={e => setMainCate("golf")} selected={mainCate == "golf"}>
              <div>골프</div>
            </CategoryCard>
            <CategoryCard onClick={e => setMainCate("hiking")} selected={mainCate == "hiking"}>
              <div>기타</div>
            </CategoryCard>
          </CateButtonWrap>
        )}
        <TotalButtonWrap onClick={(e) => goBoard(e)}>
          {" "}
          <div>전체보기</div>
          <div>{">"}</div>
        </TotalButtonWrap>
      </BoardDetailZone>
    </BoardInfoZone>
  );
};

const BoardInfoZone = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
`;

const BoardTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
`;

const BoardIcon = styled.div`
  width: 38px;
  height: 38px;
  /* background-color: #dedede; */
  /* border-radius: 15px; */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  img {
    width: 100%;
  }
`;

const BoardDetailZone = styled.div`
  ${({ buttonCate }) => {
    return css`
      cursor: pointer;
      display: flex;
      justify-content: ${buttonCate ? "space-between" : "flex-end"};
      gap: 2px;
      font-weight: 400;
      font-size: 15px;
      line-height: 150%;
      margin-top: ${buttonCate ? "20px" : "0px"};
    `;
  }}
`;

const CateButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 20px;
`;

const CategoryCard = styled.div`
  ${({ selected }) => {
    return css`
      cursor: pointer;
      display: inline-block;
      border-radius: 10px;
      box-sizing: border-box;

      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

      font-weight: 400;
      font-size: 15px;
      line-height: 150%;

      display: flex;
      justify-content: center;
      align-items: center;
      
      background: ${selected ? "#00CFFF" : "#ffffff"};
      border: 2px solid ${selected ? "#DEDEDE" : "#DEDEDE"};
      color: ${selected ? "#ffffff" : "black"};
      div {
        background: transparent;
        padding: 6px 6px;
      }
    `;
  }}
`;

const TotalButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export default BoardInfo;
