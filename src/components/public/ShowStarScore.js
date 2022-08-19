import React from "react";
import styled, { css } from "styled-components";

const ShowStarScore = ({ point, width, height }) => {
  const starView = point * (width / 5);
  return (
    <CommentStarFrame>
      <FillingStar starView={starView} width={width} height={height}>
        <img src="https://velog.velcdn.com/images%2Fyshh0514%2Fpost%2Fe3ef6584-d916-4baa-8832-0258a8e13c36%2F%E1%84%91%E1%85%A1%E1%84%85%E1%85%A1%E1%86%AB%E1%84%87%E1%85%A7%E1%86%AF%E1%84%83%E1%85%B3%E1%86%AF.png" />
      </FillingStar>
      <EmptyStar width={width} height={height}>
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
  ${({ starView, width, height }) => {
    return css`
      position: absolute;
      z-index: 1000;
      width: ${starView + "px"};
      height: ${height + "px"};
      overflow: hidden;
      img {
        position: absolute;
        z-index: 10;
        height: ${height + "px"};
        width: ${width + "px"};
      }
    `;
  }}
`;

const EmptyStar = styled.div`
  ${({ width, height }) => {
    return css`
      display: flex;
      align-items: flex-end;
      img {
        width: ${width + "px"};
        height: ${height + "px"};
      }
    `;
  }}
`;

export default ShowStarScore;
