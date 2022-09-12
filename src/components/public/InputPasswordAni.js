import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";
import { RiCloseCircleFill } from "react-icons/ri";
import { BsCheckSquareFill } from "react-icons/bs";

const InputPasswordAni = ({
  type = "password",
  width = "700px",
  Ref = null,
  inputName = "",
  inputValue,
  setInputValue,
  ValidationCheck = () => {},
  validation = {},
  inputDisAvailable = false,
  validationState,
  setValidationState,
}) => {

  const [validationLine, setValidationLine] = useState(false);

  const onChange = (e) => {
    e.preventDefault();
    if (setInputValue) setInputValue(e.target.value);
    if (ValidationCheck(e)) {
      setValidationState(true);
    } else {
      setValidationState(false);
    }
  };
  
  const onBlur = (e) => {
    if (ValidationCheck(e)){
      setValidationLine(false);
    } else {
      setValidationLine(true);
    }
      
  };

  const onReset = (e) => {
    e.preventDefault();
    if (setInputValue) setInputValue("");
    if (Ref) Ref.current.value = "";
  };

  return (
    <Container width={width} validationLine={validationLine}>
      <input
        type={type}
        ref={Ref}
        value={inputValue}
        onChange={onChange}
        onBlur={onBlur}
        required
        disabled={inputDisAvailable}
      />
      <label className="label-wrapper">
        <span className="label-text">{inputName}</span>
      </label>
      {!inputDisAvailable && inputValue && (
        <InputBtn>
          {validation.validationState ? (
            <BsCheckSquareFill size={18} color="#00CFFF" />
          ) : (
            <RiCloseCircleFill
              className="delIcon"
              onClick={(e) => onReset(e)}
              size={24}
              color="#a8a8a8"
            />
          )}
        </InputBtn>
      )}
    </Container>
  );
};

const Container = styled.div`
  ${({ width, validationState, validationLine }) => {
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
        border-bottom: ${validationLine||validationState?"1px solid #00CFFF":"1px solid #a8a8a8"};;
      }

      .label-wrapper::after {
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        border-bottom: 2px solid ${validationLine||validationState?"#00CFFF":"#494949"};
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
  .delIcon {
    cursor: pointer;
  }
`;

export default InputPasswordAni;
