import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BulletinContextCard from "./BulletinContextCard";
import BulletinLikeCard from "./BulletinLikeCard";

const BulletinCard = () => {
  const navigate = useNavigate();
  return (
    <Container onClick={()=>{navigate("/detail/5")}}>
    <BulletinContextCard title="글 제목입니다"
      content="글 내용 부분 "
      />
    <BulletinLikeCard comment="3"
      like="2"
      daysago="4"/>
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