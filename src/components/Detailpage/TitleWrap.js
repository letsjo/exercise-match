import React from "react";
import styled, { css } from "styled-components";

const TitleWrap = ({ isMatching, category, title, writeDate, board }) => {
  console.log(writeDate);
  return (
    <Container>
      <FirstLine>
        {board == "information" ? (
          <Category>{category}</Category>
        ) : (
          <Matching isMatching={isMatching}>
            {isMatching ? "매칭완료" : "매칭중"}
          </Matching>
        )}
      </FirstLine>
      <SecondLine>
        {board == "information" ? (
          <Title>{title}</Title>
        ) : (
          <>
            <Category>{category}</Category>
            <Title>{title}</Title>
          </>
        )}
      </SecondLine>
      <Date>
        {writeDate?.year
          ? writeDate.year +
            "/" +
            writeDate.month +
            "/" +
            writeDate.day +
            " " +
            writeDate.hour +
            ":" +
            writeDate.min +
            ":" +
            writeDate.sec
          : "-"}
      </Date>
    </Container>
  );
};

const Container = styled.div`
  height: 157px;
  border-bottom: 1px solid #dedede;
  margin-bottom: 50px;
  padding: 20px 0px;
  box-sizing: border-box;
`;

const FirstLine = styled.div`
  display: table;
`;

const Category = styled.div`
  height: 39px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  padding: 5px 10px;
  box-sizing: border-box;
  margin: auto 8px auto 0;
  border: 1px solid #a2e9fa;
  border-radius: 5px;
`;

const Matching = styled.div`
  ${({ isMatching }) => {
    return css`
      color: ${isMatching?"#A8A8A8":"#00CFFF"};
    `;
  }}
  width: 56px;
  height: 29px;
  font-size: 20px;
  font-weight: bold;
`;

const SecondLine = styled.div`
  height: 59px;
  display: flex;
  padding: 10px auto;
  box-sizing: border-box;
`;

const Title = styled.div`
  height: 50px;
  font-size: 25px;
  font-weight: bold;
  padding: 10px 10px 4px;
  box-sizing: border-box;
`;

const Date = styled.div`
  height: 29px;
  font-size: 20px;
  padding: 0px 10px;
  box-sizing: border-box;
`;

export default TitleWrap;
