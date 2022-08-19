import React from "react";
import styled from "styled-components";
import { MdGroup } from "react-icons/md";

const SimpleCard = ({ count, comment }) => {
  return (
    <Container>
      <CountZone>
        <MdGroup size={24} />
        {count}
      </CountZone>
      <SimpleCommentZone>{comment}</SimpleCommentZone>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const CountZone = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 150%;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-left: 20px;
  width: 90px;
`;

const SimpleCommentZone = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  font-weight: 400;
  font-size: 15px;
  line-height: 150%;
  padding: 10px;
`;

export default SimpleCard;
