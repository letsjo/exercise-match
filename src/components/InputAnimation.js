import React, { useState } from "react";
import styled, { css } from "styled-components";
import { TiDelete } from "react-icons/ti";

const InputAnimation = ({ width = "700px", inputName = "이메일"}) => {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onReset = () => {
    setInput("");
  };

  return (
    <Container width={width}>
      <input
        type="text"
        value={input}
        onChange={onChange}
        required
        autocomplete="off"
      />
      <label className="label-wrapper">
        <span className="label-text">이메일</span>
      </label>
      {input && (
        <DelBtn onClick={onReset}>
          <TiDelete size={24} color="#a8a8a8" />
        </DelBtn>
      )}
    </Container>
  );
};

const Container = styled.div`
  ${({ width }) => {
    return css`
      position: relative;
      height: 43px;
      width: ${width};
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;

      input {
        position: absolute;
        height: 100%;
        width: 100%;
        order: 0;
        outline: 0;
        padding-top: 25px;
        font-size: 15px;
        font-weight: 700;
        border: none;
      }

      svg {
        position: absolute;
        right: 0;
        bottom: 2px;
      }

      .label-wrapper {
        position: absolute;
        height: 100%;
        width: 100%;
        bottom: 0;
        left: 0;
        pointer-events: none;
        border-bottom: 1px solid #a8a8a8;
      }

      .label-wrapper::after {
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        border-bottom: 2px solid #494949;
        left: 0;
        bottom: -1px;
        transform: translateX(-100%);
        transition: transform 0.2s ease;
      }

      .label-text {
        font-size: 20px;
        font-weight: 700;
        color: #a8a8a8;
        position: absolute;
        bottom: 5px;
        left: 0px;
        transition: all 0.2s ease;
      }

      input:focus + .label-wrapper .label-text,
      input:valid + .label-wrapper .label-text {
        font-size: 15px;
        transform: translateY(-80%);
      }

      input:focus + .label-wrapper .label-text {
        color: #494949;
      }

      input:focus + .label-wrapper::after {
        transform: translateX(0%);
      }

      input:blur + .label-wrapper .label-text {
        color: #a8a8a8;
      }

      input:blur + .label-wrapper::after {
        transform: translateX(100%);
      }
    `;
  }}
`;

const DelBtn = styled.div`
  display: block;
`;

export default InputAnimation;
