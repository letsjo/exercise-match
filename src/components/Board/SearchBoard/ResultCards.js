import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import SearchOption from '../BoardPublic/SearchOption';
import BulletinCard from '../BulletinBoard/BulletinCard';
import Pagination from '../BoardPublic/Pagination';


const ResultCards = () => {

  const [page, setPage] = useState(1);

  return (
    <Container>
        <CategorySelectBox>
    <SearchOption/>
        </CategorySelectBox>
        <BulletinCard title="글 제목(배드민턴은 이렇게!"
        content="글 내용 (Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae vestibulum sed at nullam odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae vestibulum sed at nullam odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit..."
        image=""
        like=""
        comment="x"
        createdAt="1"/>

{/* <BulletinCard title="글 제목(배드민턴은 이렇게!"
        content="글 내용 (Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae vestibulum sed at nullam odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae vestibulum sed at nullam odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit..."
        image=""
        like="x"
        comment="x"
        createdAt="1"/>

<BulletinCard title="글 제목(배드민턴은 이렇게!"
        content="글 내용 (Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae vestibulum sed at nullam odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae vestibulum sed at nullam odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit..."
        image=""
        like="x"
        comment="x"
        createdAt="1"/>

<BulletinCard title="글 제목(배드민턴은 이렇게!"
        content="글 내용 (Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae vestibulum sed at nullam odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae vestibulum sed at nullam odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit..."
        image=""
        like="x"
        comment="x"
        createdAt="1"/> */}
        <PageFrame>
          <Frame>
            <Pagination total={5} limit={2} page={page} setPage={setPage} />
          </Frame>
        </PageFrame>
    </Container>
  )
}

const Container= styled.div`
  width: 1074px;
  height: 100vh;
  margin: 2px auto auto;
  background-color: #ffffff;
  padding-top:10px;
  padding-left:70px;
  box-sizing: border-box;
`;

const CategorySelectBox=styled.div`
    height:51px;
    display: flex;
    align-items: center;
`;

const PageFrame = styled.div`
  width: 1000px;
  height: 110px;
  box-sizing: border-box;
  display: flex;
`;

const Frame = styled.div`
  margin: auto;
`;

export default ResultCards