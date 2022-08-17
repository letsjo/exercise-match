import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import { FaPen } from "react-icons/fa";

const InputEditButton = ({ title = "", initialState, editBt=true, fontSize = "25px" }) => {
  const [inputValue, setInputValue] = useState(initialState);
  const [modifyable, setModifyable] = useState(true);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();

    const pageClickEvent = (e) => {
      if (!inputRef.current.contains(e.target)) {
        onClose();
      }
    };

    window.addEventListener("click", pageClickEvent, true);

    return () => {
      window.removeEventListener("click", pageClickEvent, true);
    };
  });

  const onChange = (e) => {
    e.preventDefault();
    if (setInputValue) setInputValue(e.target.value);
  };

  const onClose = () => {
    setModifyable(true);
  };

  const EditButton = (e) => {
    e.preventDefault();
    setModifyable(!modifyable);
  };

  return (
    <Container>
      <TitleFrame title={title}>{title}</TitleFrame>
      <InputFrame>
        <InputLine
          onChange={(e) => onChange(e)}
          ref={inputRef}
          value={inputValue}
          disabled={modifyable}
        />
        <IconFrame onClick={(e) => EditButton(e)} editBt={editBt}>
          <FaPen size={24} />
        </IconFrame>
      </InputFrame>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 77px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  font-size: 25px;
  height: 36px;
  flex: 1;
  border: transparent;
  &:disabled {
    color: black;
    background-color: transparent;
  }
`;

const IconFrame = styled.div`
  ${({ editBt }) => {
    return css`
      width: 36px;
      height: 36px;
      display: ${editBt?"flex":"none"};
      justify-content: center;
      align-items: center;
      cursor: pointer;
    `;
  }}
`;

export default InputEditButton;
