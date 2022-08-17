import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStar } from "react-icons/bs";
import { useState } from "react";
import ReviewBoxAfter from "./ReviewBoxAfter";

const ReviewBox = () => {
  const [rate, setRate] = useState(5);
  const [show, setShow] = useState(false);

  return (
    <Container>
      <ReviewTitle>
        홍길동님 ,<br />
        ___님과 매칭은 어떠셨나요?
      </ReviewTitle>
      <StarBox>
        {Array.from({ length: 5 }, (item, idx) => {
          return rate < idx + 1 ? (
            <Star
              key={idx}
              onClick={() => {
                setRate(idx + 1);
                setShow(true);
              }}
            >
              <BsStar size={42} />
            </Star>
          ) : (
            <Star
              key={idx}
              onClick={() => {
                setRate(idx + 1);
                setShow(true);
              }}
            >
              <BsStarFill size={42} />
            </Star>
          );
        })}
      </StarBox>
      {show &&<ReviewBoxAfter rate={rate}/>}
    </Container>
  );
};

const Container = styled.div`
  width: 600px;
  min-height: 600px;
  padding: 80px 100px;
  box-sizing: border-box;
  border-radius: 20px;
  margin: 31px auto;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;

const ReviewTitle = styled.div`
  width: 315px;
  height: 92px;
  padding: 10px;
  box-sizing: border-box;
  font-size: 25px;
  color: #000000;
  margin: auto;
`;

const StarBox = styled.div`
  width: 320px;
  height: 60px;
  margin: 50px auto 50px;
  display: flex;
  justify-content: space-between;
  gap: 5px;
`;

const Star = styled.div`
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;



export default ReviewBox;
