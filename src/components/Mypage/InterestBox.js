import React, { useState } from "react";
import styled, { css } from "styled-components";

const InterestBox = ({ interest }) => {
  return <Container>{interest}</Container>;
};

const Container = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #494949;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 5px 10px;

  font-weight: 700;
  font-size: 15px;
  line-height: 150%;
`;

export default InterestBox;
