import React from "react";
import styled, { css } from "styled-components";

const ShowStarScore = ({ point }) => {
  const starView = point * 25.6;
  return (
    <CommentStarFrame>
      <FillingStar starView={starView}>
        <img src="https://velog.velcdn.com/images%2Fyshh0514%2Fpost%2Fe3ef6584-d916-4baa-8832-0258a8e13c36%2F%E1%84%91%E1%85%A1%E1%84%85%E1%85%A1%E1%86%AB%E1%84%87%E1%85%A7%E1%86%AF%E1%84%83%E1%85%B3%E1%86%AF.png" />
      </FillingStar>
      <EmptyStar>
        <img src="https://velog.velcdn.com/images%2Fyshh0514%2Fpost%2F096cefa5-d345-487d-9fa8-f0cc66f3d6f7%2F%E1%84%92%E1%85%AC%E1%84%89%E1%85%A2%E1%86%A8%E1%84%87%E1%85%A7%E1%86%AF%E1%84%83%E1%85%B3%E1%86%AF.png" />
      </EmptyStar>
    </CommentStarFrame>
  );
};

const CommentStarFrame = styled.div`
  display: flex;
  align-items: flex-end;
`;

const FillingStar = styled.div`
  ${({ starView }) => {
    return css`
      position: absolute;
      z-index: 1000;
      width: ${starView + "px"};
      height: 25px;
      overflow: hidden;
      img {
        z-index: 10;
        height: 25px;
        width: 128px;
      }
    `;
  }}
`;

const EmptyStar = styled.div`
  display: flex;
  align-items: flex-end;
  img {
    width: 128px;
    height: 25px;
  }
`;

export default ShowStarScore;
