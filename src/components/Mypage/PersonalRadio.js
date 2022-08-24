import React, { useRef, useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { FaPen } from "react-icons/fa";
import { useSelector } from "react-redux";

const PersonalRadio = ({ title, data, editBt = true }) => {
  const [available, setAvailable] = useState(true);
  const [gender, setGender] = useState(data);
  const radioRef = useRef(null);

  useEffect(() => {
    if (!available) {
      const pageClickEvent = (e) => {
        if (!radioRef.current.contains(e.target)) {
          onClose(e);
        }
      };

      window.addEventListener("click", pageClickEvent, true);

      return () => {
        window.removeEventListener("click", pageClickEvent, true);
      };
    }
  });

  const EditButton = (e) => {
    e.preventDefault();
    setAvailable(!available);
  };

  const onClose = (e) => {
    e.preventDefault();
    setAvailable(true);
  };

  console.log(gender);

  return (
    <Container ref={radioRef}>
      <TitleZone>{title}</TitleZone>
      <DataZone>
        <Gender available={available}>
          <RadioSection
            onClick={(e) => {
              if (!available) setGender("남성");
            }}
          >
            {gender == "남성" ? (
              <input
                type="radio"
                id="men"
                name="radio-group"
                disabled={available}
                defaultChecked
              />
            ) : (
              <input
                type="radio"
                id="men"
                name="radio-group"
                disabled={available}
              />
            )}
            <label htmlFor="men">남성</label>
          </RadioSection>
          <RadioSection
            onClick={(e) => {
              if (!available) setGender("여성");
            }}
          >
            {gender == "여성" ? (
              <input
                type="radio"
                id="women"
                name="radio-group"
                disabled={available}
                defaultChecked
              />
            ) : (
              <input
                type="radio"
                id="women"
                name="radio-group"
                disabled={available}
              />
            )}
            <label htmlFor="women">여성</label>
          </RadioSection>
        </Gender>
        <IconFrame onClick={(e) => EditButton(e)} editBt={editBt}>
          <FaPen size={24} />
        </IconFrame>
      </DataZone>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 76px;
  display: flex;
  flex-direction: row;
`;

const TitleZone = styled.div`
  width: 168px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
`;

const DataZone = styled.div`
  display: flex;
  flex: 1;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
`;

const Gender = styled.div`
  ${({ available }) => {
    return css`
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 40px;
      width: 234px;
      height: 50px;
      input:checked,
      input:not(:checked) {
        position: absolute;
        left: -9999px;
      }

      input:checked + label,
      input:not(:checked) + label {
        font-size: 20px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        padding-left: 45px;
        cursor: pointer;
        line-height: 20px;
        color: ${available ? "#666" : "#666"};
      }

      input:checked + label:before,
      input:not(:checked) + label:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 30px;
        height: 30px;
        border: 1px solid #ddd;
        border-radius: 100%;
        background: ${available ? "#a8a8a8" : "#666"};
      }

      input:checked + label:after,
      input:not(:checked) + label:after {
        content: "";
        width: 14px;
        height: 14px;
        background: #ddd;
        position: absolute;
        top: 9px;
        left: 9px;
        border-radius: 100%;
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
      }

      input:not(:checked) + label:after {
        opacity: 0;
        -webkit-transform: scale(0);
        transform: scale(0);
      }
      input:checked + label:after {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
      }
    `;
  }}
`;

const RadioSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const IconFrame = styled.div`
  ${({ editBt, fontSize }) => {
    return css`
      width: 36px;
      height: 36px;
      display: ${editBt ? "flex" : "none"};
      justify-content: center;
      align-items: center;
      margin-right: 16px;
      cursor: pointer;
    `;
  }}
`;

export default PersonalRadio;
