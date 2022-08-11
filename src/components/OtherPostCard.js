import React from 'react'
import styled from 'styled-components'

const OtherPostCard = () => {
  return (
    <CardWrap>
        <Image/>
        <ContentBox>
        <Category>카테고리 종류</Category>
        <ContentTitle>게시글 제목(Lorem ipsum dolor sit amet, consectetur)</ContentTitle>
        <Writer>작성자</Writer>
        </ContentBox>
    </CardWrap>
  )
}

const CardWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
    width: 250px;
    height: 276px;
    padding: 10px;
    border: 1px solid lightgray;
    margin: auto;
`;

const Image = styled.div`
    width: 230px;
    height: 148px;
    border-radius: 5px;
    border: 1px solid #dedede;
    margin-bottom:13px ;
`;

const ContentBox = styled.div`
  width: 230px;
  height: 98px;
`;

const Category = styled.div`
  font-size: 10px;
  color:#494949;
  width: 249px;
  height: 15px;
`;

const ContentTitle = styled.div`
  width: 230px;
  height: 45px;
  margin: 12px 0 3px;
  font-size: 15px;
  color: #000000
  `;

const Writer = styled.div`
  font-size: 15px;
  color: #494949;
  height:23px ;
`;

export default OtherPostCard