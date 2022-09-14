import React from 'react'
import styled from 'styled-components'
import {BsCalendarCheck,BsFillPeopleFill} from "react-icons/bs";

const DatePersonnelWrap = ({month, day, week}) => {
  console.log(month, day, week);
  if(month)
  return (
    <DateWrap>
        <Date>
          <Icon>
            <BsCalendarCheck size={20}/>
          </Icon>
          <Text>{month}월 {day}일 {week}요일</Text>
        </Date>
        <Personnel>
          <Icon>
          <BsFillPeopleFill size={20}/>
          </Icon>
          <Text>1/4 매칭</Text>
        </Personnel>
      </DateWrap>
  )
}

const DateWrap = styled.div`
  height: 64px;
  margin-bottom: 30px;
`;

const Date = styled.div`
  height: 29px;
  display: flex;
  margin-bottom: 6px;
`;

const Icon = styled.div`
  width: 24px;
  height: 24px;
  margin: auto 0 auto 10px;
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
  height: 29px;
  display: flex;
`;

export default DatePersonnelWrap