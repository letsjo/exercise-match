import React from "react";
import styled from "styled-components";

const BoardCardSmall = ({ title, writer, content, image }) => {
  return (
    <BoardCardFrame>
      <LeftContentZone>
        <TitleZone>{title}</TitleZone>
        <WriterZone>{writer}</WriterZone>
        <ContentZone>
          {content}
        </ContentZone>
      </LeftContentZone>
      <RightPhotoZone>
        <PhotoFrame>
          <img src={image} alt="" />
        </PhotoFrame>
      </RightPhotoZone>
    </BoardCardFrame>
  );
};

const BoardCardFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 410px;
  height: 90px;
  margin: 5px 10px;
`;

const LeftContentZone = styled.div`
  margin: 10px 10px auto 10px;
  width: 100%;
`;

const TitleZone = styled.div`
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 3px;
`;

const WriterZone = styled.div`
  font-weight: 400;
  font-size: 15px;
`;

const ContentZone = styled.div`
  font-weight: 400;
  font-size: 10px;
`;

const RightPhotoZone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 80px;
  width: 80px;
`;

const PhotoFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  overflow: hidden;
  border-radius: 5px;
  img {
    object-fit: cover;
    width: 100%;
  }
`;

export default BoardCardSmall;
