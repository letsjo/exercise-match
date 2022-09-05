import React, { useRef, useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { FaPen } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { userSliceAction } from "../../redux/reducers/userReducer";
import { userAction } from "../../redux/actions/userAction";
import Swal from "sweetalert2";

const PersonalBirth = ({ title, editBt = true }) => {
  const dispatch = useDispatch();

  const {userBirthYear,userBirthMonth,userBirthDay} = useSelector((state) => state.userReducer);

  const [available, setAvailable] = useState(true);
  const [birthYear, setBirthYear] = useState(userBirthYear);
  const [birthMonth, setBirthMonth] = useState(userBirthMonth);
  const [birthDay, setBirthDay] = useState(userBirthDay);

  const inputBeforeYearRef = useRef(null);
  const inputBeforeMonthRef = useRef(null);
  const inputBeforeDayRef = useRef(null);
  const birthFrameRef = useRef(null);

  useEffect(() => {
    if (!available) {
      const pageClickEvent = (e) => {
        if (!birthFrameRef.current.contains(e.target)) {
          onClose(e);
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
      onClose(e);
    }
  };

  const EditButton = (e) => {
    e.preventDefault();
    inputBeforeYearRef.current = birthYear;
    inputBeforeMonthRef.current = birthMonth;
    inputBeforeDayRef.current = birthDay;
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

  const onClose = async (e) => {
    e.preventDefault();
    setAvailable(true);

    if (
      inputBeforeYearRef.current != birthYear ||
      inputBeforeMonthRef.current != birthMonth ||
      inputBeforeDayRef.current != birthDay
    )
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
        const res = await dispatch(
          userAction.editBirth({ birthYear, birthMonth, birthDay })
        ).unwrap();

        dispatch(userSliceAction.setUserBirth({birthYear,birthMonth,birthDay}));

        Swal.fire({
          icon: "success",
          title: "변경완료!",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(res);
      } catch (e) {
        Swal.fire({
          icon: "warning",
          title: "변경실패!",
          showConfirmButton: false,
          timer: 1500,
        });
        setBirthYear(inputBeforeYearRef.current);
        setBirthMonth(inputBeforeMonthRef.current);
        setBirthDay(inputBeforeDayRef.current);

        console.log(e);
      }
  };

  return (
    <Container>
      <TitleZone>{title}</TitleZone>
      <DataZone>
        <InputFrame ref={birthFrameRef}>
          <InputLine
            onChange={(e) => onChangeYear(e)}
            value={userBirthYear}
            disabled={available}
            available={available}
            fontSize={"20px"}
            onKeyPress={handleKeyPress}
          />
          년
          <InputLine
            onChange={(e) => onChangeMonth(e)}
            value={userBirthMonth}
            disabled={available}
            available={available}
            fontSize={"20px"}
            onKeyPress={handleKeyPress}
          />
          월
          <InputLine
            onChange={(e) => onChangeDay(e)}
            value={userBirthDay}
            disabled={available}
            available={available}
            fontSize={"20px"}
            onKeyPress={handleKeyPress}
          />
          일
        </InputFrame>
        <IconFrame
          onClick={(e) => EditButton(e)}
          available={available}
          editBt={editBt}
        >
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
  ${({ available, editBt }) => {
    return css`
      width: 36px;
      height: 36px;
      display: ${available && editBt ? "flex" : "none"};
      justify-content: center;
      align-items: center;
      margin-right: 16px;
      cursor: pointer;
    `;
  }}
`;

export default PersonalBirth;
