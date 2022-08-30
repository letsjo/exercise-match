import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import BulletinLikeCard from "../BulletinBoard/BulletinLikeCard";
import {BsCalendarCheck,BsFillPeopleFill} from "react-icons/bs";

const BeforeMatchingCard = ({ completed=false, category, title, date, number,context, writer, location}) => {

  const navigate = useNavigate();

  return (
    <Container onClick={()=>{navigate("/detail/5")}} completed={completed}>
      <MatchingOrNot completed={completed}>{completed ? "매칭완료" : "매칭중"}</MatchingOrNot>
      <TitleWrap>
        <CategoryTag>{category}</CategoryTag>
        <Title>{title}</Title>
      </TitleWrap>
      <DateWrap>
        <Date>
          <Icon>
            <BsCalendarCheck size={20}/>
          </Icon>
          <Text>{date}</Text>
        </Date>
        <Personnel>
          <Icon>
          <BsFillPeopleFill size={20}/>
          </Icon>
          <Text> {number}매칭</Text>
        </Personnel>
      </DateWrap>
      <Context>
        {context}
      </Context>
      <WriterWrap>
        <InfoWrap>
          <ProfileImg />
          <Write>{writer}</Write>
          <Dot>·</Dot>
          <Write>{location}</Write>
        </InfoWrap>
      </WriterWrap>
      {/* <LikeWrap>
          <Daysago>1일 전</Daysago>
      </LikeWrap> */}
      <BulletinLikeCard like="2" comment="3" daysago="4"/>
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
      cursor: pointer;
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
  display: flex;
  justify-content: center;
  align-items: center;
  color:gray;
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
  margin-bottom: 6px;
  font-size: 15px;
  color: #494949;
  height: 46px;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2; // 원하는 라인수
  -webkit-box-orient: vertical;
`;

const WriterWrap = styled.div`
  height: 20px;
  margin-bottom: 14px;
  box-sizing: border-box;
`;

const LikeWrap=styled.div`
margin-top: 14px;
box-sizing: border-box;
  height: 24px;
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
