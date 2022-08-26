import React from "react";
import styled, { css } from "styled-components";

const BeforeMatchingCard = ({ completed=false }) => {


  return (
    <Container completed={completed}>
      <MatchingOrNot completed={completed}>{completed ? "매칭완료" : "매칭중"}</MatchingOrNot>
      <TitleWrap>
        <CategoryTag>배드민턴</CategoryTag>
        <Title>글 제목 (테니스 같이칠 사람?</Title>
      </TitleWrap>
      <DateWrap>
        <Date>
          <Icon></Icon>
          <Text>8월 17일 수요일</Text>
        </Date>
        <Personnel>
          <Icon></Icon>
          <Text>1/4 매칭</Text>
        </Personnel>
      </DateWrap>
      <Context>
        글 내용 (Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
        vestibulum sed at nullam odio. Lorem ipsum dolor sit amet, soo pretty,
        consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Vitae vestibulum sed at 글 내용 (Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Vitae vestibulum sed at nullam odio.
        Lorem ipsum dolor sit amet, soo pretty, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
        vestibulum sed at
      </Context>
      <WriterWrap>
        <InfoWrap>
          <ProfileImg />
          <Write>작성자(홍길동)</Write>
          <Dot>·</Dot>
          <Write>위치(강릉시)</Write>
        </InfoWrap>
        <Daysago>1일 전</Daysago>
      </WriterWrap>
    </Container>
  );
};

const Container = styled.div`
  ${({ completed }) => {
    return css`
      border-top: 1px solid #f0f0f0;
      height: 332px;
      width: 950px;
      box-sizing: border-box;
      padding: 30px 10px;
      background-color: ${completed?"#F0F0F0":"white"};
    `;
  }}
`;

const MatchingOrNot = styled.div`
  ${({completed})=>{
    return css`
    height: 29px;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    color: ${completed?"#a8a8a8":"#000000"};
    `;
  }}
`;

const TitleWrap = styled.div`
  height: 36px;
  display: flex;
  margin-bottom: 10px;
`;

const CategoryTag = styled.div`
  width: 76px;
  height: 31px;
  border-radius: 5px;
  border: 1px solid #a8a8a8;
  color: #494949;
  font-size: 15px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 18px;
`;

const Title = styled.div`
  width: 296px;
  height: 36px;
  font-size: 25px;
`;

const DateWrap = styled.div`
  height: 64px;
  margin-bottom: 10px;
`;

const Date = styled.div`
  width: 169px;
  height: 29px;
  display: flex;
  margin-bottom: 6px;
`;

const Icon = styled.div`
  width: 24px;
  height: 24px;
  margin: auto 0;
  box-sizing: border-box;
  background-color: aliceblue;
`;

const Text = styled.div`
  height: 29px;
  font-size: 20px;
  margin-left: 10px;
`;

const Personnel = styled.div`
  width: 108px;
  height: 29px;
  display: flex;
`;

const Context = styled.div`
  width: 930px;
  margin-bottom: 10px;
  font-size: 15px;
  color: #494949;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2; // 원하는 라인수
  -webkit-box-orient: vertical;
`;

const WriterWrap = styled.div`
  height: 23px;
  display: flex;
  justify-content: space-between;
`;

const InfoWrap = styled.div`
  width: 165px;
  height: 20px;
  display: flex;
`;

const ProfileImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 4px;
`;

const Write = styled.div`
  height: 15px;
  font-size: 10px;
  color: #494949;
  margin: auto 0px;
`;

const Dot = styled.div`
  font-size: 10px;
  color: #494949;
  width: 6px;
  margin: auto 10px;
`;

const Daysago = styled.div`
  width: 40px;
  font-size: 15px;
  color: #494949;
  margin-right: 30px;
  box-sizing: border-box;
`;

export default BeforeMatchingCard;
