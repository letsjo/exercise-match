import React, { useRef, useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { FaPen } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../redux/actions/userAction";
import { userSliceAction } from "../../redux/reducers/userReducer";
import Swal from "sweetalert2";

const PersonalRadio = ({ title, editBt = true }) => {
  const dispatch = useDispatch();

  const { userGender } = useSelector((state) => state.userReducer);

  const [available, setAvailable] = useState(true);
  const [gender, setGender] = useState(userGender);
  const radioFrameRef = useRef(null);
  const radioBeforeRef = useRef(null);

  useEffect(() =>{
    setGender(userGender);
  },[userGender])
  
  useEffect(() => {
    if (!available) {
      const pageClickEvent = (e) => {
        if (!radioFrameRef.current.contains(e.target)) {
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
    radioBeforeRef.current = gender;
    setAvailable(!available);
  };

  const onClose = async (e) => {
    e.preventDefault();
    setAvailable(true);
    if (radioBeforeRef.current != gender)
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
        const res = await dispatch(userAction.editGender(gender)).unwrap();
        dispatch(userSliceAction.setUserGender(gender));
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
        setGender(radioBeforeRef.current);

        console.log("실패 복귀:", radioBeforeRef.current);
        console.log(e);
      }
  };

  return (
    <Container>
      <TitleZone>{title}</TitleZone>
      <DataZone>
        <Gender ref={radioFrameRef} available={available}>
          <RadioSection
            onClick={(e) => {
              if (!available) setGender("male");
            }}
          >
              <input
                type="radio"
                value="male"
                name="radio-group"
                checked={gender === "male"}
                disabled={available}
              />
            <label htmlFor="male">남성</label>
          </RadioSection>
          <RadioSection
            onClick={(e) => {
              if (!available) setGender("female");
            }}
          >
              <input
                type="radio"
                value="female"
                name="radio-group"
                checked={gender === "female"}
                disabled={available}
              />
            <label htmlFor="female">여성</label>
          </RadioSection>
        </Gender>
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
  ${({ editBt, available, fontSize }) => {
    return css`
      width: 36px;
      height: 36px;
      display: ${editBt && available ? "flex" : "none"};
      justify-content: center;
      align-items: center;
      margin-right: 16px;
      cursor: pointer;
    `;
  }}
`;

export default PersonalRadio;
