import React from "react";
import styled from "styled-components";
import BadCheckList from "./BadCheckList";
import GoodCheckList from "./GoodCheckList";

const ReviewBoxAfter = (props) => {
  return (
    <Container>
      {props.rate > 3 ? (
        <>
          <ReviewOpinion>어떤 점이 좋았나요?</ReviewOpinion>
          <GoodCheckList />
        </>
      ) : (
        <>
          <ReviewOpinion>어떤 점이 아쉬웠나요?</ReviewOpinion>
          <BadCheckList />
        </>
      )}

      <WriteWrap>
        <WriteTitleWrap>
          <WriteTitle>건강한 매칭 리뷰를 남겨주세요!</WriteTitle>
          <WriteSubTitle>
            남겨주신 매칭 후기는 상대방의 프로필에 공개됩니다.
          </WriteSubTitle>
        </WriteTitleWrap>
        <WriteBox placeholder="(선택사항입니다)" />
      </WriteWrap>

      <button>Submit</button>
    </Container>
  );
};

const Container = styled.div``;

const ReviewOpinion = styled.div`
  width: 400px;
  height: 49px;
  margin: auto;
  font-size: 20px;
  padding-top: 10px;
  padding-left: 10px;
  box-sizing: border-box;
`;

const WriteWrap = styled.div`
  width: 400px;
  height: 207px;
  margin: auto;
`;

const WriteTitleWrap = styled.div`
  height: 57px;
  margin-bottom: 20px;
`;

const WriteTitle = styled.div`
  font-size: 20px;
  height: 29px;
  margin-bottom: 5px;
`;

const WriteSubTitle = styled.div`
  font-size: 15px;
  color: #494949;
  height: 23px;
`;

const WriteBox = styled.textarea`
  margin: auto;
  border-radius: 10px;
  border: 1px solid #a8a8a8;
  height: 130px;
  width: 400px;
  padding: 10px 20px;
  box-sizing: border-box;
  outline: none;
  font-size: 15px;
  resize: none;
  &::placeholder {
    color: #a8a8a8;
  }
`;

export default ReviewBoxAfter;
