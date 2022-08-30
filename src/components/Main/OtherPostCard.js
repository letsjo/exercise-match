import React from 'react'
import styled from 'styled-components'

const OtherPostCard = ({category, title, writer, image}) => {
  return (
    <CardWrap>
        <Image>
          <img src={image} alt=""/>
        </Image>
        <ContentBox>
        <Category>{category}</Category>
        <ContentTitle>{title}</ContentTitle>
        <Writer>{writer}</Writer>
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
    height: 279px;
    padding: 10px;
    margin: 0;
    box-sizing: border-box;
`;

const Image = styled.div`
    width: 230px;
    height: 148px;
    border-radius: 5px;
    border: 1px solid #dedede;
    margin-bottom:13px ;
    img{
      width: 100%;
      height: 100%;
    }
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