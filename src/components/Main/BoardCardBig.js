import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BoardCardBig = ({
  title,
  content,
  writer, 
  image,
  boardId,
}) => {
  const navigate = useNavigate();
  return (
    <BoardCardFrame onClick={(e)=>navigate(`/detail/information/${boardId}`)}>
      <TopPhotoZone>
        <PhotoFrame>
          <img src={image} alt="" />
        </PhotoFrame>
      </TopPhotoZone>
      <BottomContentZone>
        <TitleZone>{title}</TitleZone>
        <WriterZone>{writer}</WriterZone>
        <ContentZone>
         {content}
        </ContentZone>
      </BottomContentZone>
    </BoardCardFrame>
  );
};

const BoardCardFrame = styled.div`
  width: 254px;
  height: 100%;
  cursor: pointer;
  &:hover{
    text-decoration-line: underline;
  }
`;

const TopPhotoZone = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* height: 155px; */
 
`;

const PhotoFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 5px;
  img {
    object-fit: cover;
    width: 254px;
    height: 155px;
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
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2; // 원하는 라인수
  -webkit-box-orient: vertical;
`;

export default BoardCardBig;
