import React, { useState } from "react";
import styled from "styled-components";
import SimpleCommentsList from "./SimpleCommentsList";
import UserReviewList from "./UserReviewList";

const UserDataFrame = ({ title }) => {
  return (
    <Container>
      <Frame>
        <TitleZone>{title}</TitleZone>
        <ContentsZone>
          {title == "매칭 간단 평가" ? (
            <SimpleCommentsList />
          ) : title == "매칭 후기" ? (
            <UserReviewList />
          ) : (
            <></>
          )}
        </ContentsZone>
      </Frame>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: white;
  border: 1px solid #dedede;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const Frame = styled.div`
  margin: 10px;
  overflow: hidden;
`;

const TitleZone = styled.div`
  width: 100%;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  padding: 10px 30px;
  border-bottom: 1px solid #f0f0f0;
`;

const ContentsZone = styled.div`
  width: 100%;
  margin-bottom: ;
`;

export default UserDataFrame;
