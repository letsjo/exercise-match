import React from 'react'
import styled from 'styled-components'

const TitleWrap = ({isMatching, category, title, writeDate, board}) => {
  console.log(board);
  return (
    <Container>
          <FirstLine>
            {board=="information"?(<Category>{category}</Category>):( <Matching>{isMatching?"매칭완료":"매칭중"}</Matching>)}
            
           
            </FirstLine>
          <SecondLine>
          {board=="information"?(<Title>{title}</Title>):(
            <>
          <Category>{category}</Category>
            <Title>{title}</Title>
            </>)}
          
            </SecondLine>
          <Date>{writeDate}</Date>
        </Container>
  )
}

const Container = styled.div`
  height: 157px;
  border-bottom: 1px solid #dedede;
  margin-bottom: 50px;
  padding: 20px 0px;
  box-sizing: border-box;
`;

const FirstLine = styled.div``;

const Category=styled.div`
    width: 59px;
  height: 39px;
  border: 1px solid #f0f0f0;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  padding: 5px 10px;
  box-sizing: border-box;
  margin:auto 8px auto 0;
`;

const Matching=styled.div`
    width: 56px;
    height: 29px;
    font-size: 20px;
    font-weight: bold;
`;

const SecondLine = styled.div`
height: 59px;
display:flex;
padding: 10px auto;
box-sizing: border-box;
`;

const Title=styled.div`
     height: 50px;
  font-size: 25px;
  font-weight: bold;
  padding: 10px 10px 4px;
  box-sizing: border-box;

`;

const Date = styled.div`
  width: 113px;
  height: 29px;
  font-size: 20px;
  padding: 0px 10px;
  box-sizing: border-box;
`;

export default TitleWrap