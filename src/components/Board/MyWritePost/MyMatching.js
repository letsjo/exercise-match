import React, {useState} from 'react'
import styled from 'styled-components';
import Pagination from '../BoardPublic/Pagination';
import MatchingCard from "../MatchingBoard/MatchingCard"


const MyMatching = () => {
  const [page, setPage] =useState(1);
  return (
        <>
         <MatchingCard completed={true}/>
        <MatchingCard/>
        <MatchingCard/>
        <MatchingCard/>
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