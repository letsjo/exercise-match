import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const ReviewBoxAfter = ({ rate }) => {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    if (rate > 3) {
      setCommentList([
        "시간 약속을 잘지켜요.",
        "친절하고 매너가 좋아요.",
        "응답이 빨라요.",
        "해당 운동에 대한 이해도가 높아요.",
        "세세하게 잘 가르쳐 줘요.",
      ]);
    } else {
      setCommentList([
        "불친절해요.",
        "시간 약속을 안 지켜요.",
        "채팅을 보내도 답이 늦거나 없어요.",
        "모임 직전에 취소했어요.",
        "약속장소에 나타나지 않았어요.",
      ]);
    }
  }, [rate]);

  // const onClick = (e, interest) => {
  //   e.preventDefault();
  //   const findIndex = editInterest?.findIndex((i) => i == interest);
  //   if (editInterest && editInterest?.length < 3 && findIndex === -1) {
  //     setEditInterest([...editInterest, interest]);
  //   } else if (editInterest?.length <= 3 && findIndex >= 0) {
  //     setEditInterest([
  //       ...editInterest.slice(0, findIndex),
  //       ...editInterest.slice(findIndex + 1),
  //     ]);
  //   } else {
  //     setAlertSent(true);
  //   }
  //   console.log(editInterest);
  // };

  return (
    <Container>
      {rate > 3 ? (
        <ReviewOpinion>어떤 점이 좋았나요?</ReviewOpinion>
      ) : (
        <ReviewOpinion>어떤 점이 아쉬웠나요?</ReviewOpinion>
      )}

      <ReviewCheck>
        {commentList.map((comment, idx) => {
          return (
            <CheckList
            key={idx}>
              <CheckBox>
                <input type="checkbox" />{comment}
              </CheckBox>
            </CheckList>
          );
        })}
      </ReviewCheck>

      <WriteWrap>
        <WriteTitleWrap>
          <WriteTitle>건강한 매칭 리뷰를 남겨주세요!</WriteTitle>
          <WriteSubTitle>
            남겨주신 매칭 후기는 상대방의 프로필에 공개됩니다.
          </WriteSubTitle>
        </WriteTitleWrap>
        <WriteBox placeholder="(선택사항입니다)" />
      </WriteWrap>

      <SubmitBtn>작성하기</SubmitBtn>
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

const SubmitBtn = styled.button`
  width: 400px;
  height: 69px;
  border: none;
  background-color: #00CFFF;
  padding: 20px 0px;
  box-sizing: border-box;
  color: white;
  margin-top: 50px;
  font-size: 20px;
  font-weight: bold;
`;

const ReviewCheck = styled.div`
  width: 400px;
  height: 220px;
  margin: auto auto 50px;
`;

const CheckList = styled.div`
  display: flex;
  padding: 10px;
  box-sizing: border-box;
  height: 44px;
`;

const CheckBox = styled.label`
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const ListContent = styled.div`
  height: 23px;
  font-size: 15px;
`;

export default ReviewBoxAfter;
