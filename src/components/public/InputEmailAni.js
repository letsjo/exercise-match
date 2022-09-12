import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { RiCloseCircleFill } from "react-icons/ri";
import { BsCheckSquareFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { userAction } from "../../redux/actions/userAction";

const InputEmailAni = ({
  type = "text",
  width = "700px",
  Ref = null,
  inputName = "",
  inputEmail,
  setInputEmail,
  inputAvailable,
  validation = {},
}) => {
  const [validationLine, setValidationLine] = useState(false);
  const [validationComment, setValidationComment] = useState("");
  const dispatch = useDispatch();

  const ValidationCheck = (e) => {
    e.preventDefault();
    const email = inputEmail.trim();
    const regEmail =
      /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

    if (!regEmail.test(email)) {
      return false;
    } else {
      return true;
    }
  };

  useEffect(() => {}, [validation.validationState]);

  const onChange = (e) => {
    e.preventDefault();
    if (setInputEmail) setInputEmail(e.target.value);
    if (ValidationCheck(e)) {
      validation.setValidationState(true);
      // try {
      //   const checkResponse = dispatch(
      //     userAction.checkEmail(e.target.value)
      //   ).unwrap();
      //   console.log(checkResponse);
      // } catch (err) {
      //   setValidationLine(false);
      //   window.alert(err);
      // }
    } else {
      validation.setValidationState(false);
    }
  };

  const onBlur = (e) => {
    if (ValidationCheck(e)) {
    } else {
      setValidationLine(true);
    }
  };

  const onReset = (e) => {
    e.preventDefault();
    if (setInputEmail) setInputEmail("");
    if (Ref) Ref.current.value = "";
  };

  return (
    <Container>
      <InputFrame width={width} validationState={validation.validationState}>
        <input
          type={type}
          ref={Ref}
          value={inputEmail}
          onChange={onChange}
          onBlur={onBlur}
          required
          disabled={inputAvailable}
        />
        <label className="label-wrapper">
          <span className="label-text">{inputName}</span>
        </label>
        {!inputAvailable && inputEmail && (
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
      </InputFrame>
      <CommentAlert>아이디에 대한 조건 경고문</CommentAlert>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const CommentAlert = styled.div`
  ${({ validationLine }) => {
    return css`
      display: ${validationLine ? "block" : "none"};
      font-weight: 400;
      font-size: 10px;
      line-height: 150%;
      color: "#ca2323";
      margin-top: 5px;
    `;
  }}
`;

const InputFrame = styled.div`
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
        border-bottom: ${validationState || validationLine
          ? "1px solid #00CFFF"
          : "1px solid #a8a8a8"};
      }

      .label-wrapper::after {
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        border-bottom: 2px solid
          ${validationState || validationLine ? "#00CFFF" : "#494949"};
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

export default InputEmailAni;
