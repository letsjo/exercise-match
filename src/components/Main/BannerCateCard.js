import React from "react";
import styled from "styled-components";

const BannerCateCard = () => {
  return (
      <BoardCard>
          <ImageBox>
            <img src="https://placehold.jp/156x136.png" alt=""/>
          </ImageBox>
          <ContentBox>
            <Category>배드민턴</Category>
            <Title>제목</Title>
            <Nickname>홍길동</Nickname>
            <DateBox>
              {/* <Date></Date> */}c
            </DateBox>
            <PersonalBox>
              {/* <Personal></Personal> */}c
            </PersonalBox>
          </ContentBox>
      </BoardCard>
  );
};


const BoardCard = styled.div`
  display: flex;
  flex-direction: row;
  width:486px;
  height: 156px;
  padding: 10px;
  box-sizing: border-box;
`;

const ImageBox = styled.div`
margin-right: 20px;
`;

const ContentBox=styled.div`
  width:290px;
  height: 136px;
`;

const Category=styled.div`
height:19px;
margin-bottom:
`;

const Title=styled.div`

`;

const Nickname=styled.div`

`;

const DateBox=styled.div`

`;

const PersonalBox =styled.div`

`;

export default BannerCateCard;
