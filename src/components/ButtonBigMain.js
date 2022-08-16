import React from "react";
import styled, { css } from "styled-components";

const ButtonBigMain = ({ name, nextAvailable }) => {
    return <Container nextAvailable={nextAvailable}>{name}</Container>;
};

const Container = styled.div`
  ${({ nextAvailable }) => {
    return css`
      width: 100%;
      height: 69px;
      background-color: ${nextAvailable ? "#A8A8A8" : "#dedede"};
      border-radius: 5px;
      color: white;
      font-size: 20px;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: ${nextAvailable ? "pointer" : "auto"};
    `;
  }}
`;

export default ButtonBigMain;
