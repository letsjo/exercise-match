import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import { FaPen } from "react-icons/fa";

const InputEditButton = ({
  title = "",
  initialState,
  editBt = true,
  fontSize = "25px",
  border = false,
}) => {
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
    <Container border={border}>
      <TitleFrame title={title}>{title}</TitleFrame>
      <InputFrame>
        <InputLine
          onChange={(e) => onChange(e)}
          ref={inputRef}
          value={inputValue}
          disabled={modifyable}
          fontSize={fontSize}
        />
        <IconFrame onClick={(e) => EditButton(e)} editBt={editBt}>
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
      border-top: ${border?("1px solid #a8a8a8"):("")};
      border-bottom: ${border?("1px solid #a8a8a8"):("")};
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
  ${({ editBt, fontSize }) => {
    return css`
      width: 36px;
      height: 36px;
      display: ${editBt ? "flex" : "none"};
      justify-content: center;
      align-items: center;
      cursor: pointer;
    `;
  }}
`;

export default InputEditButton;
