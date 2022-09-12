import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { userAction } from "../../redux/actions/userAction";
import { modalSliceAction } from "../../redux/reducers/modalReducer";
import { userSliceAction } from "../../redux/reducers/userReducer";
import TranslateCates from "../../utils/TranslateCates";
import AlertBox from "../Signup/AlertBox";
import Swal from "sweetalert2";

const InterestFrame = () => {
  const modalRef = useRef(null);
  const dispatch = useDispatch();

  const interestLists = [
    "running",
    "riding",
    "gym",
    "hiking",
    "ballet",
    "climbing",
    "pilates",
    "swimming",
    "boxing",
    "bowling",
    "badminton",
    "crossfit",
    "gymnastics",
    "skateboard",
    "golf",
    "skate",
    "pocketball",
    "ski",
    "futsal",
    "tennis",
    "pingpong",
    "basketball",
    "soccer",
    "volleyball",
    "baseball",
  ];

  const { userInterest } = useSelector((state) => state.userReducer);
  const [editInterest, setEditInterest] = useState(userInterest);
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

  const buttonEditInterest = async (e) => {
    e.preventDefault();
    try {
      Swal.fire({
        title: "변경중...",
        width: 439,
        timerProgressBar: true,
        hideClass: {
          popup: "",
        },
        didOpen: () => {
          Swal.showLoading();
        },
      });
      const res = await dispatch(userAction.editConcern(editInterest)).unwrap();
      dispatch(userSliceAction.setUserInterest(editInterest));
      dispatch(modalSliceAction.modalClose());
      Swal.fire({
        icon: "success",
        title: "변경완료!",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log(res);
    } catch (e) {
      Swal.fire({
        icon: "warning",
        title: "변경실패!",
        text: "관심사 변경에 실패했습니다.",
      });
      console.log(e);
    }
  };

  const onClick = (e, interest) => {
    e.preventDefault();
    const findIndex = editInterest?.findIndex((i) => i == interest);
    if (editInterest && editInterest?.length < 3 && findIndex === -1) {
      setEditInterest([...editInterest, interest]);
    } else if (editInterest?.length <= 3 && findIndex >= 0) {
      setEditInterest([
        ...editInterest.slice(0, findIndex),
        ...editInterest.slice(findIndex + 1),
      ]);
    } else {
      setAlertSent(true);
    }
    console.log(editInterest);
  };

  const onClose = () => {
    dispatch(modalSliceAction.modalClose());
  };


  return (
    <Container ref={modalRef}>
      <Frame>
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
              return (
                <InterestBox
                  onClick={(e) => onClick(e, interest)}
                  selected={
                    editInterest &&
                    editInterest.findIndex((i) => i == interest) >= 0
                      ? true
                      : false
                  }
                  value={interest}
                  key={index}
                >
                  {TranslateCates(interest)}
                </InterestBox>
              );
            })}
          </LineFrame>
          <ButtonFrame
            onClick={(e) => buttonEditInterest(e)}
            editInterest={editInterest}
          >
            등록 완료
          </ButtonFrame>
        </ContentsWrap>
      </Frame>
    </Container>
  );
};

const Container = styled.div`
  width: 630px;
  user-select: none;
`;

const Frame = styled.div`
  margin: 70px 87px 50px 87px;
`;

const ContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
`;

const LineFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 18px 38px;
  width: 100%;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  flex-wrap: wrap;
`;

const InterestBox = styled.div`
  ${({ selected }) => {
    return css`
      background: ${selected ? "#00CFFF" : "white"};
      border: 1px solid ${selected ? "#FFFFFF" : "#494949"};
      color: ${selected ? "#FFFFFF" : "#494949"};
      box-shadow: ${selected ? "0px 0px 4px #00CFFF" : "0px 0px 4px rgba(0, 0, 0, 0.25);"};
    `;
  }}
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 5px 10px;

  font-weight: 700;
  font-size: 15px;
  line-height: 150%;
`;

const ButtonFrame = styled.div`
  ${({ editInterest }) => {
    return css`
      background: ${editInterest && editInterest.length > 0
        ? "#00CFFF"
        : "#DEDEDE"};
      cursor: ${editInterest && editInterest.length > 0 ? "pointer" : "auto"};
    `;
  }}
  border: 1px solid #A8A8A8;
  margin-top: 20px;
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
