import React from "react";
import styled from "styled-components";

const BoardCardBig = () => {
  return (
    <BoardCardFrame>
      <TopPhotoZone>
        <PhotoFrame>
          <img src="https://placehold.jp/250x150.png" />
        </PhotoFrame>
      </TopPhotoZone>
      <BottomContentZone>
        <TitleZone>게시글 제목</TitleZone>
        <WriterZone>작성자</WriterZone>
        <ContentZone>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
          vestibulum sed at nullam odio.
        </ContentZone>
      </BottomContentZone>
    </BoardCardFrame>
  );
};

const BoardCardFrame = styled.div`
  width: 254px;
  height: 100%;
`;

const TopPhotoZone = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 250px;
  width: 250px;
`;

const PhotoFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 5px;
  img {
    object-fit: cover;
    width: 100%;
  }
`;

const BottomContentZone = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const TitleZone = styled.div`
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 5px;
`;
const WriterZone = styled.div`
  font-weight: 400;
  font-size: 15px;
  margin-bottom: 5px;
`;

const ContentZone = styled.div`
  font-weight: 400;
  font-size: 10px;
`;

export default BoardCardBig;
