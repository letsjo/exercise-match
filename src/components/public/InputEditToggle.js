import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import { FaPen } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { modalSliceAction } from "../../redux/reducers/modalReducer";
import TranslateCates from "../../utils/TranslateCates";

const InputEditToggle = ({
  title = "",
  initialState,
  editBt = true,
  fontSize = "25px",
  border = false,
}) => {
  const dispatch = useDispatch();

  const EditButton = (e) => {
    e.preventDefault();
    dispatch(modalSliceAction.modalInterestEditOpen());
  };

  console.log(initialState)

  return (
    <Container border={border}>
      <TitleFrame title={title}>{title}</TitleFrame>
      <InputFrame>
        <InputLine>
          {initialState && initialState?.map((interest, index) => (
            <InterestBox key={index}>{TranslateCates(interest)}</InterestBox>
          ))}
        </InputLine>
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

const InputLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 36px;
  flex: 1;
  gap: 10px;
`;

const InterestBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 31px;
  border: 1px solid #494949;
  border-radius: 5px;

  margin-top: 5px;
  padding: 0px 10px;

  font-weight: 700;
  font-size: 15px;
  line-height: 150%;
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

export default InputEditToggle;
