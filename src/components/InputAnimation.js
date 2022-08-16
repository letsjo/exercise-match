import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";
import { RiCloseCircleFill } from "react-icons/ri";
import { BsCheckSquareFill } from "react-icons/bs";

const InputAnimation = ({ width = "700px", inputName, validation, inputAvailable }) => {
  const [input, setInput] = useState("");
  const emailRef = useRef("");
  
  const ValidationCheck = (e) => {
    e.preventDefault();
    const email = emailRef.current.value.trim();
    const regEmail =
      /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

    if (!regEmail.test(email)) {
      validation.setValidationState(false);
    } else {
      validation.setValidationState(true);
    }
  };

  const onChange = (e) => {
    setInput(e.target.value);
    ValidationCheck(e);
  };

  const onReset = () => {
    setInput("");
  };

  return (
    <Container width={width}>
      <input
        type="text"
        ref={emailRef}
        value={input}
        onChange={onChange}
        required
        autocomplete="off"
        disabled={inputAvailable}
      />
      <label className="label-wrapper">
        <span className="label-text">{inputName}</span>
      </label>
      {input && (
        <InputBtn>
          {validation.validationState ? (
            <BsCheckSquareFill size={18} color="#494949" />
          ) : (
            <RiCloseCircleFill className="delIcon" onClick={onReset} size={24} color="#a8a8a8" />
          )}
        </InputBtn>
      )}
    </Container>
  );
};

const Container = styled.div`
  ${({ width }) => {
    return css`
      position: relative;
      height: 69px;
      width: ${width};
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      input {
        width: 100%;
        height: 24px;
        order: 0;
        outline: 0;
        font-size: 15px;
        font-weight: bold;
        border: none;
        margin-bottom: 10px;
      }

      svg {
        /* display: none; */
        position: absolute;
      }

      /* &:focus-within svg{
        display: block;
      } */

      .label-wrapper {
        position: absolute;
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
        transition: transform 0.1s ease;
      }

      .label-text {
        font-size: 20px;
        font-weight: bold;
        color: #a8a8a8;
        position: absolute;
        bottom: 10px;
        left: 0px;
        transition: all 0.2s ease;
        line-height: 150%;
      }

      input:disabled + .label-wrapper .label-text {
        color: #a8a8a8;
        font-size: 15px;
        transform: translateY(-35px);
      }

      input:focus + .label-wrapper .label-text,
      input:valid + .label-wrapper .label-text {
        font-size: 15px;
        /* transform: translateY(-190%); */
        transform: translateY(-35px);
      }

      /* input:focus + .label-wrapper .label-text {
        color: #494949;
      } */

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

const InputBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 24px;
  height: 24px;
  right: 0;
  bottom: 11px;
  .delIcon{
    cursor: pointer;
  }
`;

export default InputAnimation;
