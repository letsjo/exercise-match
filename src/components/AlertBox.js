import React, { useEffect } from "react";
import styled from "styled-components";

const AlertBox = ({ setAlertSent, alertcomment }) => {
  useEffect(() => {
    setTimeout(() => setAlertSent(false), 2000);
  });

  return (
    <Container>
      <TextField>{alertcomment}</TextField>
    </Container>
  );
};

const Container = styled.div`
  opacity: 0;
  position: absolute;
  top: 290px;
  left: 50%;
  width: 700px;
  height: 49px;
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
