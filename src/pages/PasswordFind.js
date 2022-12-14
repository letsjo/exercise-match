// packages
import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";

// components
import SubNavbar from "../components/public/SubNavbar";
import ButtonBigMain from "../components/public/ButtonBigMain";
import { useDispatch, useSelector } from "react-redux";
import { signupSliceAction } from "../redux/reducers/signupReducer";
import { useNavigate } from "react-router-dom";
import PasswordFindAuth from "../components/PasswordFind/PasswordFindAuth";
import PasswordFindAuthPW from "../components/PasswordFind/PasswordFindAuthPW";

const PasswordFind = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { email, password } = useSelector((state)=> state.signupReducer.info);
  const [page, setPage] = useState(1);
  const [nextAvailable, setNextAvailable] = useState(false);
  const [leftArrow, setLeftArrow] = useState(true);
  const [rightArrow, setRightArrow] = useState(false);
  
  const [inputEmail, setInputEmail] = useState(email);
  const [inputPassword, setInputPassword] = useState(password);

  const NextPageAllow = (e) => {
    e.preventDefault();
    if (nextAvailable && page < 2) {
      dispatch(signupSliceAction.getInfo({inputEmail,inputPassword}));
      setPage(page + 1);
    } else if (nextAvailable && page >= 2) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title:'비밀번호가 변경되었습니다.',
        showConfirmButton: false,
        timer: 1500
      })
      navigate('/login');
    } else {
      WarningAlert(e);
    }
  };

  const WarningAlert = (e) => {
    e.preventDefault();
    Swal.fire({
      confirmButtonColor: '#3085d6',
      confirmButtonText: '확인',
      icon: "warning",
      title: "미작성된 항목이 있습니다.",
      text: "필수 항목을 모두 작성해주세요.",
    });
  };

  return (
    <Container>
      <SubNavbar
        pageState={{ page: page, setPage: setPage }}
        title={"비밀번호 찾기"}
        leftState={{ leftArrow, setLeftArrow }}
        rightState={{ rightArrow, setRightArrow }}
      />

      <SignupOutline onSubmit={NextPageAllow}>
        <PasswordFindBox>
          <ContentZone>
            {page == 1 ? (
              <PasswordFindAuth
                setNextAvailable={setNextAvailable}
                inputEmail={inputEmail}
                setInputEmail={setInputEmail}
                leftState={{ leftArrow, setLeftArrow }}
                rightState={{ rightArrow, setRightArrow }}
              />
            ) : page == 2 ? (
              <PasswordFindAuthPW
                setNextAvailable={setNextAvailable}
                inputPassword={inputPassword}
                setInputPassword={setInputPassword}
                leftState={{ leftArrow, setLeftArrow }}
                rightState={{ rightArrow, setRightArrow }}
              />
            ) : (
              <></>
            )}
          </ContentZone>
          <ButtonBigMain
            name={page == 2?("변경"):("다음")}
            nextAvailable={nextAvailable}
            NextPageAllow={NextPageAllow}
          />
        </PasswordFindBox>
      </SignupOutline>
    </Container>
  );
};

const Container = styled.div``;

const SignupOutline = styled.form`
  height: 800px;
  width: 800px;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 18px auto 0;
`;

const PasswordFindBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 650px;
  margin: 75px 50px;
`;

const ContentZone = styled.div``;

const NextButton = styled.div`
  width: 100%;
  height: 69px;
  background-color: #dedede;
  border-radius: 5px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default PasswordFind;
