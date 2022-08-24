import React from 'react'
import styled from 'styled-components'

const DatePersonnelWrap = () => {
  return (
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
  background-color: aliceblue;
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