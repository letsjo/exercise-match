import React, {useState} from 'react'
import styled from 'styled-components';
import Pagination from '../BoardPublic/Pagination';
import MatchingCard from "../MatchingBoard/MatchingCard"


const MyMatching = () => {
  const [page, setPage] =useState(1);
  return (
        <>
         <MatchingCard completed={true}
         category="테니스" 
         title="제목들어갑니다" 
         date="8월 21일 수요일" 
         number="1/4"
         context="내용들어갈 공간 내용"
        writer="닉네임임" 
        location="부산"/>
        <MatchingCard 
         category="골프" 
         title="제목들" 
         date="6월 23일 수요일" 
         number="1/3"
         context="내용들어갈 공간 내용"
        writer="닉네임임" 
        location="대구"/>
        <PageFrame>
            <Frame>
            <Pagination
            total={5}
            limit={2}
            page={page}
            setPage={setPage}
            />
            </Frame>
        </PageFrame>
        </>
  )
}

const PageFrame =styled.div`    
    width:1000px;
    height: 110px;
    box-sizing: border-box;
    display: flex;
    `;

const Frame =styled.div`
    margin: auto;
`;

export default MyMatching