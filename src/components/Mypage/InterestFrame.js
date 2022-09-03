import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { userAction } from "../../redux/actions/userAction";
import { modalSliceAction } from "../../redux/reducers/modalReducer";
import { userSliceAction } from "../../redux/reducers/userReducer";
import AlertBox from "../Signup/AlertBox";

const InterestFrame = () => {
  const modalRef = useRef(null);
  const dispatch = useDispatch();

  const interestLists = [
      {en:"running",ko:"조깅&러닝"},
      {en:"riding",ko:"라이딩"},
      {en:"gym",ko:"헬스"},
      {en:"hiking",ko:"등산"},
      {en:"ballet",ko:"발레"},
      {en:"climbing",ko:"클라이밍"},
      {en:"pilates",ko:"필라테스"},
      {en:"swimming",ko:"수영"},
      {en:"boxing",ko:"복싱"},
      {en:"bowling",ko:"볼링"},
      {en:"badminton",ko:"배드민턴"},
      {en:"crossfit",ko:"크로스핏"},
      {en:"gymnastics",ko:"체조"},
      {en:"skateboard",ko:"보드"},
      {en:"golf",ko:"골프"},
      {en:"skate",ko:"스케이트"},
      {en:"pocketball",ko:"당구"},
      {en:"ski",ko:"스키"},
      {en:"futsal",ko:"풋살"},
      {en:"tennis",ko:"테니스"},
      {en:"pingpong",ko:"탁구"},
      {en:"basketball",ko:"농구"},
      {en:"soccer",ko:"축구"},
      {en:"volleyball",ko:"배구"},
      {en:"baseball",ko:"야구"},
  ];


  const { userInterest } = useSelector((state) => state.userReducer);
  const [editInterest, setEditInterest] = useState(userInterest);
  const [editInterestKo, setEditInterestKo] = useState([]);
  const [alertcomment, setAlertcomment] = useState(
    "관심사는 최대 3개까지 선택이 가능합니다."
  );
  const [alertSent, setAlertSent] = useState(false);

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
    dispatch(userAction.editConcern(editInterest));
    dispatch(modalSliceAction.modalClose());
  };

  const onClick = (e, interest) => {
    e.preventDefault();
    const findIndex = editInterest.findIndex(i => i.en == interest["en"]);
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
          <LineFrame>
            {interestLists.map((interest, index) => {
              return <InterestBox
                onClick={(e) => onClick(e, interest)}
                selected={editInterest.findIndex(i => i.en == interest["en"]) >= 0 ? true : false}
                value={interest["en"]}
                key={index}
              >
                {interest["ko"]}
              </InterestBox>
            })}
          </LineFrame>
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
  justify-content: space-between;
  gap: 20px 40px;
  width: 100%;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  flex-wrap : wrap;
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
