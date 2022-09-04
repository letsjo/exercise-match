import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import { FaPen } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { userSliceAction } from "../../redux/reducers/userReducer";
import Swal from "sweetalert2";
import { userAction } from "../../redux/actions/userAction";

const InputEditButton = ({
  title = "",
  initialState,
  editBt = true,
  fontSize = "25px",
  border = false,
}) => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState(initialState);
  const [modifyable, setModifyable] = useState(true);
  const inputRef = useRef(null);
  const inputBeforeRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    if (!modifyable) {
      const pageClickEvent = (e) => {
        if (!inputRef.current.contains(e.target)) {
          onClose();
        }
      };

      window.addEventListener("click", pageClickEvent, true);

      return () => {
        window.removeEventListener("click", pageClickEvent, true);
      };
    }
  });

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onClose();
    }
  };

  const onChange = (e) => {
    e.preventDefault();
    if (setInputValue) setInputValue(e.target.value);
  };

  const onClose = async () => {
    setModifyable(true);
    if(inputBeforeRef.current!=inputValue)
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
        const res = await dispatch(userAction.editNickname(inputValue)).unwrap();
        dispatch(userSliceAction.setUserNickName(inputValue));
        Swal.fire({
          icon: 'success',
          title: '변경완료!',
          showConfirmButton: false,
          timer: 1500
        });
        console.log(res);
      } catch (e) {
        setInputValue(inputBeforeRef.current);
        inputRef.current.value = inputBeforeRef.current;
        Swal.fire({
          icon: 'warning',
          title: '변경실패!',
          text:"이미 중복된 닉네임이 있거나, 변경에 실패했습니다.",
        });
        console.log(e);
      }
  };

  const EditButton = (e) => {
    e.preventDefault();
    inputBeforeRef.current = inputValue;
    console.log(inputBeforeRef.current);
    setModifyable(!modifyable);
  };

  return (
    <Container border={border}>
      <TitleFrame title={title}>{title}</TitleFrame>
      <InputFrame>
        <InputLine
          onChange={(e) => onChange(e)}
          ref={inputRef}
          value={initialState}
          disabled={modifyable}
          fontSize={fontSize}
          onKeyPress={handleKeyPress}
        />
        <IconFrame onClick={(e) => EditButton(e)} modifyable={modifyable} editBt={editBt}>
          <FaPen size={24} />
        </IconFrame>
      </InputFrame>
    </Container>
  );
};

const Container = styled.div`
  ${({ border }) => {
    return css`
      width: 100%;
      height: 70px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-top: ${border ? "1px solid #a8a8a8" : ""};
      border-bottom: ${border ? "1px solid #a8a8a8" : ""};
    `;
  }}
`;

const TitleFrame = styled.div`
  ${({ title }) => {
    return css`
      display: ${title ? "block" : "none"};
      color: #a8a8a8;
      font-size: 10px;
    `;
  }}
`;

const InputFrame = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InputLine = styled.input`
  ${({ fontSize }) => {
    return css`
      font-size: ${fontSize};
      height: 36px;
      flex: 1;
      border: transparent;
      &:disabled {
        color: black;
        background-color: transparent;
      }
    `;
  }}
`;

const IconFrame = styled.div`
  ${({ modifyable, editBt }) => {
    return css`
      width: 36px;
      height: 36px;
      display: ${editBt&&modifyable ? "flex" : "none"};
      justify-content: center;
      align-items: center;
      cursor: pointer;
    `;
  }}
`;

export default InputEditButton;
