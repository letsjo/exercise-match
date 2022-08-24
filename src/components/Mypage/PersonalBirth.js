import React, { useRef, useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { FaPen } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { userSliceAction } from "../../redux/reducers/userReducer";

const PersonalBirth = ({ title, data, editBt = true }) => {
    const dispatch = useDispatch();
  const [available, setAvailable] = useState(true);

  const [birthYear, setBirthYear] = useState(data.Year);
  const [birthMonth, setBirthMonth] = useState(data.Month);
  const [birthDay, setBirthDay] = useState(data.Day);

  const inputRef = useRef(null);
  const birthRef = useRef(null);

  useEffect(() => {
    if (!available) {
      const pageClickEvent = (e) => {
        if (!birthRef.current.contains(e.target)) {
          onClose(e);
        }
      };

      window.addEventListener("click", pageClickEvent, true);

      return () => {
        window.removeEventListener("click", pageClickEvent, true);
      };
    }
  });

  console.log(birthYear, birthMonth, birthDay);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onClose(e);
    }
  };

  const EditButton = (e) => {
    e.preventDefault();
    setAvailable(!available);
  };

  const onChangeYear = (e) => {
    e.preventDefault();
    if (setBirthYear) setBirthYear(e.target.value);
  };

  const onChangeMonth = (e) => {
    e.preventDefault();
    if (setBirthMonth) setBirthMonth(e.target.value);
  };

  const onChangeDay = (e) => {
    e.preventDefault();
    if (setBirthDay) setBirthDay(e.target.value);
  };

  const onClose = (e) => {
    e.preventDefault();
    dispatch(userSliceAction.setUserBirthYear(birthYear));
    dispatch(userSliceAction.setUserBirthMonth(birthMonth));
    dispatch(userSliceAction.setUserBirthDay(birthDay));
    setAvailable(true);
  };

  return (
    <Container ref={birthRef}>
      <TitleZone>{title}</TitleZone>
      <DataZone>
        <InputFrame>
          <InputLine
            onChange={(e) => onChangeYear(e)}
            ref={inputRef}
            value={birthYear}
            disabled={available}
            available={available}
            fontSize={"20px"}
            onKeyPress={handleKeyPress}
          />
          년
          <InputLine
            onChange={(e) => onChangeMonth(e)}
            value={birthMonth}
            disabled={available}
            available={available}
            fontSize={"20px"}
            onKeyPress={handleKeyPress}
          />
          월
          <InputLine
            onChange={(e) => onChangeDay(e)}
            value={birthDay}
            disabled={available}
            available={available}
            fontSize={"20px"}
            onKeyPress={handleKeyPress}
          />
          일
        </InputFrame>
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
  min-width: 168px;
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
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
`;

const InputFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  gap: 5px;
`;

const InputLine = styled.input`
  ${({ available }) => {
    return css`
      text-align: right;
      width: 50px;
      height: 36px;
      font-weight: 700;
      font-size: 20px;
      line-height: 29px;
      margin-top: 2px;
      border: ${available ? "1px solid transparent" : "1px solid black"};
      &:disabled {
        color: black;
        background-color: transparent;
      }
    `;
  }}
`;

const IconFrame = styled.div`
  ${({ editBt }) => {
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

export default PersonalBirth;
