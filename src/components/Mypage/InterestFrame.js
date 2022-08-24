import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { modalSliceAction } from "../../redux/reducers/modalReducer";
import { userSliceAction } from "../../redux/reducers/userReducer";
import AlertBox from "../Signup/AlertBox";

const InterestFrame = () => {
  const modalRef = useRef(null);
  const dispatch = useDispatch();

  const { userInterest } = useSelector((state) => state.userReducer);
  const [editInterest, setEditInterest] = useState(userInterest);
  const [alertcomment, setAlertcomment] = useState(
    "관심사는 최대 3개까지 선택이 가능합니다."
  );
  const [alertSent, setAlertSent] = useState(false);

  const interestLists = [
    ["조깅&러닝", "라이딩", "헬스", "등산", "발레"],
    ["클라이밍", "필라테스", "수영", "복싱", "볼링"],
    ["배드민턴", "크로스핏", "체조", "보드", "골프"],
    ["스케이트", "당구", "스키", "풋살", "테니스"],
    ["탁구", "농구", "축구", "배구", "야구"],
  ];

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (!modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    window.addEventListener("click", pageClickEvent, true);

    return () => {
      window.removeEventListener("click", pageClickEvent, true);
    };
  });

  const buttonEditInterest = (e) => {
    e.preventDefault();
    dispatch(userSliceAction.setUserInterest(editInterest));
    dispatch(modalSliceAction.modalClose());
  };

  const onClick = (e, interest) => {
    e.preventDefault();
    const findIndex = editInterest.indexOf(interest);
    if (editInterest.length < 3 && findIndex === -1) {
      setEditInterest([...editInterest, interest]);
      //   dispatch(userSliceAction.setInterest(userInterest));
    } else if (editInterest.length <= 3 && findIndex >= 0) {
      setEditInterest([
        ...editInterest.slice(0, findIndex),
        ...editInterest.slice(findIndex + 1),
      ]);
    } else {
      setAlertSent(true);
    }
  };

  const onClose = () => {
    dispatch(modalSliceAction.modalClose());
  };

  return (
    <Container ref={modalRef}>
      <ContentsWrap>
        <LineFrame>3개의 카테고리를 선택해주세요.</LineFrame>
        {alertSent ? (
          <AlertBox
            alertcomment={alertcomment}
            setAlertSent={setAlertSent}
            position="240px"
            width="500px"
            height="100px"
          />
        ) : (
          <></>
        )}
        {interestLists.map((interestList, line) => (
          <LineFrame key={line}>
            {interestList.map((interest, index) => (
              <InterestBox
                onClick={(e) => onClick(e, interest)}
                selected={editInterest.indexOf(interest) >= 0 ? true : false}
                key={index}
              >
                {interest}
              </InterestBox>
            ))}
          </LineFrame>
        ))}
        <ButtonFrame
          onClick={(e) => buttonEditInterest(e)}
          editInterest={editInterest}
        >
          등록 완료
        </ButtonFrame>
      </ContentsWrap>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  user-select: none;
`;

const ContentsWrap = styled.div`
  padding: 70px 87px 50px 87px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;

const LineFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 40px;
  width: 100%;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
`;

const InterestBox = styled.div`
  ${({ selected }) => {
    return css`
      background: ${selected ? "#A8A8A8" : "white"};
      border: 1px solid ${selected ? "#FFFFFF" : "#494949"};
      color: ${selected ? "#FFFFFF" : "#494949"};
    `;
  }}
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 5px 10px;

  font-weight: 700;
  font-size: 15px;
  line-height: 150%;
`;

const ButtonFrame = styled.div`
  ${({ editInterest }) => {
    return css`
      background: ${editInterest.length > 0 ? "#494949" : "#DEDEDE"};
      cursor: ${editInterest.length > 0 ? "pointer" : "auto"};
    `;
  }}
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 69px;
  color: white;

  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
`;

export default InterestFrame;
