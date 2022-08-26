import React,{useState} from 'react'
import styled from 'styled-components';
import CommentCard from '../BoardPublic/CommentCard';
import Pagination from '../BoardPublic/Pagination';

const MyComment = () => {

  const [page, setPage] =useState(1);
  return (<>
    <CommentCard/>
    <CommentCard/>
    <CommentCard/>
    <CommentCard/>    
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

export default MyComment