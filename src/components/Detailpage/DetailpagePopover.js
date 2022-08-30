import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Swal from "sweetalert2";
import { boardAction } from "../../redux/actions/boardAction";

const DetailpagePopover = ({ onOpenerClick, boardId }) => {
  const settingsWindowRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (!settingsWindowRef.current.contains(e.target)) {
        onOpenerClick(e);
      }
    };

    window.addEventListener("click", pageClickEvent, true);

    return () => {
      window.removeEventListener("click", pageClickEvent, true);
    };
  });

  const onClose = (e) => {
    onOpenerClick(e);
  };

  const Alert = (e) => {
    e.preventDefault();
    onOpenerClick(e);
    Swal.fire({
      // title: '',
      text: "게시물을 삭제하시겠습니까?",
      // icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: "#494949",
      cancelButtonColor: "#d33",
      confirmButtonText: "삭제",
      cancelButtonText: "취소",
      width: 439,
      customClass: "swal-height",
      hideClass: {
        popup: "",
      },
      // heightAuto:false,
      // height:'359px'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          Swal.fire({
            // title: '',
            title: "삭제중",
            width: 439,
            timerProgressBar: true,
            showClass: {
              popup: "",
            },
            hideClass: {
              popup: "",
            },
            didOpen: () => {
              Swal.showLoading();
            },
          });
          const resDel = await dispatch(
            boardAction.delBoard({ boardId })
          ).unwrap();
          console.log(resDel);
          Swal.fire({
            icon: "success",
            title: "삭제완료!",
            showConfirmButton: false,
            timer: 1500,
          });
        } catch (e) {
          console.log(e);
          Swal.fire({
            icon: "warning",
            title: "삭제실패!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  return (
    <Wrapper ref={settingsWindowRef}>
      <Text>게시글 수정</Text>
      <Text onClick={Alert}>게시글 삭제</Text>
      <CloseBtn onClick={onClose}>닫기</CloseBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  background-color: white;
  width: 131px;
  height: 181px;
  right: 0;
  top: 58px;
  z-index: 1;
  border: 1px solid #f0f0f0;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;

const Text = styled.div`
  font-weight: bold;
  font-size: 15px;
  border-bottom: 0.5px solid #f0f0f0;
  height: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const CloseBtn = styled.div`
  font-weight: bold;
  font-size: 15px;
  border-top: 0.5px solid #f0f0f0;
  height: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  cursor: pointer;
`;

export default DetailpagePopover;
