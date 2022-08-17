import React from "react";
import styled, { css } from "styled-components";

const BoardCardHistory = ({
  labelImg = "https://cdn-icons-png.flaticon.com/512/748/748646.png",
  label = "내가 작성한 글",
  title = "내가 작성한 글의 제목",
  entrycount = "참여 완료",
}) => {
  return (
    <HistoryCardFrame>
      <HistoryCardWrapper>
        <CardTop>
          <HistoryLabelFrame>
            <HistoryLabelContent>
              <Icon>
                <img src={labelImg} />
              </Icon>
              <HistoryLabel>{label}</HistoryLabel>
            </HistoryLabelContent>
          </HistoryLabelFrame>
        </CardTop>
        <CardBottom>
          <HistoryTitle>{title}</HistoryTitle>
          <div>
            <HistoryButton>
              <div>{entrycount}</div>
            </HistoryButton>
          </div>
        </CardBottom>
      </HistoryCardWrapper>
    </HistoryCardFrame>
  );
};

const HistoryCardFrame = styled.div`
  max-width: 217px;
  min-width: 217px;
  height: 221px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  display: flex;
  overflow: hidden;
`;

const HistoryCardWrapper = styled.div`
  padding: 20px 41px;
  width: 100%;
`;

const CardTop = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-bottom: 20px;
`;

const HistoryLabelFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  font-size: 10px;
  display: inline-block;
  font-weight: 400;
`;

const HistoryLabelContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  padding: 2.5px 10px 2.5px 8px;
`;

const HistoryLabel = styled.div`
  height: 15px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 150%;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 20px;
  height: 20px;

  font-weight: 400;
  font-size: 5px;
  line-height: 150%;

  /* background: #dedede; */
  /* border-radius: 185px; */

  overflow: hidden;
  img {
    width: 100%;
  }
`;

const CardBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  padding: 0px;
  height: 136px;
`;

const HistoryTitle = styled.div`
  max-width: 135px;
  overflow: hidden;
  font-weight: 700;
  font-size: 15px;
  line-height: 150%;
  text-align: center;
`;

const HistoryButton = styled.div`
  cursor: pointer;
  background-color: #ffffff;
  border: 2px solid #dedede;
  border-radius: 20px;
  display: inline-block;
  div {
    padding: 10px 20px;
  }
`;

export default BoardCardHistory;
