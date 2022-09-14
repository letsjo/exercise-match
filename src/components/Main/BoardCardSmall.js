import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BoardCardSmall = ({ title, writer, content, boardId, image }) => {
  const navigate = useNavigate();
  return (
    <BoardCardFrame onClick={(e)=>navigate(`/detail/information/${boardId}`)}>
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
  cursor: pointer;
  border-bottom: 1px solid #f0f0f0;
  &:hover{
    text-decoration-line: underline;
  }
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
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1; // 원하는 라인수
  -webkit-box-orient: vertical;
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
    width: 80px;
    height: 70px;
  }
`;

export default BoardCardSmall;
