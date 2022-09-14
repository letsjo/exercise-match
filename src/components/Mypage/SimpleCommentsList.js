import React from "react";
import styled from "styled-components";
import SimpleCard from "./SimpleCard";

const SimpleCommentsList = () => {
  return (
    <Container>
      <SimpleCard count={2} comment="친절하고 매너가 좋아요."/>
      <SimpleCard count={3} comment="응답이 빨라요."/>
      <SimpleCard count={2} comment="세세하게 잘 가르쳐 줘요."/>
      <SimpleCard count={1} comment="해당 운동에 대한 이해도가 높아요."/>
      <SimpleCard count={2} comment="시간 약속을 잘지켜요."/>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default SimpleCommentsList;
