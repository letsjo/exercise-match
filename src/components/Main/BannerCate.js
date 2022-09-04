import React, { useState } from "react";
import styled from "styled-components";
import BannerCateCard from "./BannerCateCard";
import BoardInfo from "./BoardNameInfo";

const BannerCate = ({ iconImg, title, boardUrl, buttonCate }) => {
  const [mainCate, setMainCate] = useState("all");

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
          <BannerCateCard/>
          <BannerCateCard/>
        </BoardColumn>
        <BoardColumn>
          <BannerCateCard/>
          <BannerCateCard/>
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
  margin-bottom: 120px;
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
