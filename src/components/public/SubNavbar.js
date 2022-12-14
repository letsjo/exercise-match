import React from "react";
import styled, { css } from "styled-components";

const SubNavbar = ({ title, pageState, leftState, rightState }) => {
  
  const goToBack = () => {
    if (pageState && pageState.page > 1) pageState.setPage(pageState.page - 1);
    else window.history.back();
  };

  const goToFront = () => {
    if (pageState) pageState.setPage(pageState.page + 1);
    else window.history.forward();
  };

  return (
    <Container>
      <TitleFrame>
        <ArrowLeftBox onClick={goToBack} leftArrow={leftState.leftArrow} />
        <SignupTitle>{title}</SignupTitle>
        <ArrowRightBox onClick={goToFront} rightArrow={rightState.rightArrow} />
      </TitleFrame>
    </Container>
  );
};

const Container = styled.div`
  height: 94px;
  width: 100%;
  padding: 25px 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

const TitleFrame = styled.div`
  display: flex;
  flex-direction: row;
  margin: 25px auto;
  width: 800px;
`;

const ArrowLeftBox = styled.div`
  ${({ leftArrow }) => {
    return css`
      display: ${leftArrow ? "block" : "none"};
      height: 36px;
      width: 36px;

      cursor: pointer;

      :before {
        content: "\f104";
        color: #494949;
        font-family: "Font Awesome 5 Free";
        font-weight: 700;
        font-size: 36px;
      }
    `;
  }}
`;

const ArrowRightBox = styled.div`
  ${({ rightArrow }) => {
    return css`
      display: ${rightArrow ? "block" : "none"};
      height: 36px;
      width: 36px;

      cursor: pointer;

      :before {
        content: "\f105";
        color: #494949;
        font-family: "Font Awesome 5 Free";
        font-weight: 700;
        font-size: 36px;
      }
    `;
  }}
`;

const SignupTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 151px;
  font-size: 25px;
  font-weight: bold;
  color: #000000;
  margin: auto;
`;

export default SubNavbar;
