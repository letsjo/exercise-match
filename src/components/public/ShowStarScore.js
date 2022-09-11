import React from "react";
import styled, { css } from "styled-components";

const ShowStarScore = ({ score, width, height }) => {
  const starView = score * (width / 5);
  return (
    <CommentStarFrame>
      <FillingStar starView={starView} width={width} height={height}>
        <img src="/images/starFiveFill.png" />
      </FillingStar>
      <EmptyStar width={width} height={height}>
        <img src="/images/starFiveEmpty.png" />
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
      z-index: 1;
      width: ${starView + "px"};
      height: ${height + "px"};
      overflow: hidden;
      img {
        position: absolute;
        z-index: 1;
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
