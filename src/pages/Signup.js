// packages
import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";

// components
import SignupAuth from "../components/Signup/SignupAuth";
import SignupNavbar from "../components/public/SubNavbar";
import ButtonBigMain from "../components/public/ButtonBigMain";
import SignupAuthPW from "../components/Signup/SignupAuthPW";
import { useDispatch, useSelector } from "react-redux";
import { signupSliceAction } from "../redux/reducers/signupReducer";
import { useNavigate } from "react-router-dom";
import { userAction } from "../redux/actions/userAction";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { email, password } = useSelector((state) => state.signupReducer.info);
  const [page, setPage] = useState(1);
  const [authNum, setAuthNum] = useState("");
  const [nextAvailable, setNextAvailable] = useState(false);
  const [leftArrow, setLeftArrow] = useState(true);
  const [rightArrow, setRightArrow] = useState(false);

  const [inputEmail, setInputEmail] = useState(email);
  const [inputPassword, setInputPassword] = useState(password);
  const [inputPasswordCheck, setInputPasswordCheck] = useState();

  const NextPageAllow = async (e) => {
    e.preventDefault();
    if (nextAvailable && page == 1) {
      try {
        const res = await dispatch(
          userAction.signUpCheckAuth({ username: inputEmail, authNum })
        ).unwrap();
        console.log(res);
        setPage(page + 1);
      } catch (e) {
        console.log(e);
      }
    } else if (nextAvailable && page >= 2) {
      try {
        const res = await dispatch(
          userAction.signUp({
            username: inputEmail,
            password: inputPassword,
            passwordCheck: inputPasswordCheck,
          })
        ).unwrap();
        console.log(res);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "회원가입이 완료되었습니다.",
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (e) {
        console.log(e);
      }
      navigate("/");
    } else {
      WarningAlert(e);
    }
  };

  const WarningAlert = (e) => {
    e.preventDefault();
    Swal.fire({
      confirmButtonColor: "#3085d6",
      confirmButtonText: "확인",
      icon: "warning",
      title: "미작성된 항목이 있습니다.",
      text: "필수 항목을 모두 작성해주세요.",
    });
  };

  return (
    <Container>
      <SignupNavbar
        pageState={{ page: page, setPage: setPage }}
        title={"회원가입(" + page + "/2)"}
        leftState={{ leftArrow, setLeftArrow }}
        rightState={{ rightArrow, setRightArrow }}
      />

      <SignupOutline onSubmit={NextPageAllow}>
        <SignupBox>
          <ContentZone>
            {page == 1 ? (
              <SignupAuth
                setNextAvailable={setNextAvailable}
                inputEmail={inputEmail}
                setAuthNum={setAuthNum}
                setInputEmail={setInputEmail}
                leftState={{ leftArrow, setLeftArrow }}
                rightState={{ rightArrow, setRightArrow }}
              />
            ) : page == 2 ? (
              <SignupAuthPW
                setNextAvailable={setNextAvailable}
                inputPassword={inputPassword}
                inputPasswordCheck={inputPasswordCheck}
                setInputPassword={setInputPassword}
                setInputPasswordCheck={setInputPasswordCheck}
                leftState={{ leftArrow, setLeftArrow }}
                rightState={{ rightArrow, setRightArrow }}
              />
            ) : (
              <></>
            )}
          </ContentZone>
          <ButtonBigMain
            name={page == 2 ? "회원가입 완료" : "다음"}
            nextAvailable={nextAvailable}
            NextPageAllow={NextPageAllow}
          />
        </SignupBox>
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

const SignupBox = styled.div`
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

export default Signup;
