import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BulletinContextCard from "./BulletinContextCard";
import BulletinLikeCard from "./BulletinLikeCard";

const BulletinCard = ({title, content, comment, like, createdAt, image, boardId}) => {
  const navigate = useNavigate();
  return (
    <Container onClick={()=>{navigate(`/detail/information/${boardId}`)}}>
    <BulletinContextCard title={title}
      content={content}
      image={image}
      />
    <BulletinLikeCard comment={comment}
      like={like}
      createdAt={createdAt}/>
    </Container>
  )
}

const Container =styled.div`
    width:958px;
    height:231px;
    border-top: 1px solid #f0f0f0;
    padding: 30px 0;
    box-sizing: border-box;
    cursor: pointer;
`;

export default BulletinCard