import React from "react";
import styled from "styled-components";
import SimpleCard from "./SimpleCard";

const SimpleCommentsList = () => {
  return (
    <Container>
      <SimpleCard count={5} comment="친절하고 매너가 좋아요."/>
      <SimpleCard count={10} comment="친절하고 매너가 좋아요."/>
      <SimpleCard count={15} comment="친절하고 매너가 좋아요."/>
      <SimpleCard count={20} comment="친절하고 매너가 좋아요."/>
      <SimpleCard count={25} comment="친절하고 매너가 좋아요."/>
      <SimpleCard count={4} comment="친절하고 매너가 좋아요."/>
      <SimpleCard count={8} comment="친절하고 매너가 좋아요."/>
      <SimpleCard count={12} comment="친절하고 매너가 좋아요."/>
      <SimpleCard count={16} comment="친절하고 매너가 좋아요."/>
      <SimpleCard count={20} comment="친절하고 매너가 좋아요."/>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default SimpleCommentsList;
