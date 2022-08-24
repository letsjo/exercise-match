import React, { useEffect } from "react";
import styled, { css } from "styled-components";

const AlertBox = ({
  setAlertSent,
  alertcomment,
  position = "345px",
  width = "700px",
  height = "49px",
}) => {
  useEffect(() => {
    setTimeout(() => setAlertSent(false), 2000);
  });

  return (
    <Container position={position} width={width} height={height}>
      <TextField>{alertcomment}</TextField>
    </Container>
  );
};

const Container = styled.div`
  ${({ position, width, height }) => {
    return css`
      top: ${position};
      width: ${width};
      height: ${height};
    `;
  }}
  opacity: 0;
  position: absolute;
  left: 50%;
  background-color: black;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  animation: fadein 2s;
  -moz-animation: fadein 2s; /* Firefox */
  -webkit-animation: fadein 2s; /* Safari and Chrome */
  -o-animation: fadein 2s; /* Opera */

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @-moz-keyframes fadein {
    /* Firefox */
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @-webkit-keyframes fadein {
    /* Safari and Chrome */
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @-o-keyframes fadein {
    /* Opera */
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const TextField = styled.div`
  color: white;
  text-align: center;
`;

export default AlertBox;
