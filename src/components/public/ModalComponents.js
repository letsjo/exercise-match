import React, { useEffect } from "react";
import styled from "styled-components";
import { GrFormClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { modalSliceAction } from "../../redux/reducers/modalReducer";
import { useNavigate } from "react-router-dom";
import SelectLocation from "../Main/SelectLocation";

const ModalComponents = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const { ModalOpen, ModalRequiredName } = useSelector(
    (state) => state.modalReducer
  );

  useEffect(() => {
    const escKeyModalClose = (e) => {
      if (e.keyCode === 27) {
        dispatch(modalSliceAction.modalClose());
      }
    };
    window.addEventListener("keydown", escKeyModalClose);

    return () => window.removeEventListener("keydown", escKeyModalClose);
  }, []);

  console.log(ModalOpen,ModalRequiredName);

  return (
    <>
      {ModalOpen && (
        <Modal>
          <Overlay></Overlay>
          <ModalBody>
            {ModalRequiredName == "selectLocation" ? (
              <ModalContent>
                <SelectLocation/>
                <CloseModal>
                  <GrFormClose
                    size={35}
                    onClick={() => {
                      dispatch(modalSliceAction.modalClose());
                    }}
                  />
                </CloseModal>
              </ModalContent>
            ) : ModalRequiredName == "signup" ? (
              <ModalContent>
                {/* <Signup /> */}
                <CloseModal>
                  <GrFormClose
                    size={35}
                    onClick={() => {
                      dispatch(modalSliceAction.modalClose());
                    }}
                  />
                </CloseModal>
              </ModalContent>
            ) : ModalRequiredName == "comment" ? (
              <ModalComment>
                {/* <CommentPost /> */}
                <CloseModal>
                  <GrFormClose
                    size={35}
                    onClick={() => {
                      dispatch(modalSliceAction.modalClose());
                    }}
                  />
                </CloseModal>
              </ModalComment>
            ) : ModalRequiredName == "alertcart" ? (
              <ModalAlertCart>
                <ModalAlertFrame>
                  선택한 상품을 장바구니에 담았습니다.
                </ModalAlertFrame>
                <ModalAlertButton>
                  <button
                    onClick={() => {
                      dispatch(modalSliceAction.modalClose());
                    }}
                  >
                    계속쇼핑
                  </button>
                  <button
                    onClick={() => {
                      dispatch(modalSliceAction.modalClose());
                      navigator("/basket");
                    }}
                  >
                    장바구니
                  </button>
                </ModalAlertButton>
              </ModalAlertCart>
            ) : (
              <></>
            )}
          </ModalBody>
        </Modal>
      )}
    </>
  );
};

const ModalBody = styled.div``;

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 1;
`;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: rgba(49, 49, 49, 0.8);
`;

const CloseModal = styled.div`
  position: absolute;
  top: 32px;
  right: 24px;
  &:hover {
    color: "red";
  }
`;
////// ModalContent 여기가 흰 부분 입니다.
const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 20px;
  min-width: 550px;
  height: 85%;
  max-height: 890px;
`;

const ModalComment = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 34px 24px 24px;
  border-radius: 5px;
  min-width: 320px;
  min-height: 350px;
  width: 40%;

  @media screen and (max-width: 768px) {
    align-items: center;
    height: 100%;
    width: 100%;
  }
`;

const ModalAlertCart = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 5px;
  min-width: 290px;
  min-height: 175px;
  width: 20%;
`;

const ModalAlertFrame = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModalAlertButton = styled.div`
  button {
    width: 50%;
    height: 50px;
    background-color: white;
    border: 1px solid rgba(79, 79, 79, 0.2);
    cursor: pointer;
  }
  button:nth-child(1) {
    border-radius: 0 0 0 5px;
  }
  button:nth-child(2) {
    border-radius: 0 0 5px 0;
  }
  button:hover {
    border: 1px solid rgba(79, 79, 79, 0.5);
  }
`;

// 모달 컴포넌트 종료

export default ModalComponents;
