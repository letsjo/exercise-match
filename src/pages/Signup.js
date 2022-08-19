// packages
import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";

// components
import SignupAuth from "../components/Signup/SignupAuth";
import SignupNavbar from "../components/public/SubNavbar";
import SignupAuthSecond from "../components/Signup/SignupAuthSecond";
import ButtonBigMain from "../components/public/ButtonBigMain";
import SignupAuthPW from "../components/Signup/SignupAuthPW";

const Signup = () => {
  const [page, setPage] = useState(1);
  const [nextAvailable, setNextAvailable] = useState(false);
  const [leftArrow, setLeftArrow] = useState(true);
  const [rightArrow, setRightArrow] = useState(false);

  const [signUpInfo, setSignUpInfo] = useState({
    email: "",
    password: "",
    username: "",
    nickname: "",
    gender: "",
    birth: "",
  });

  const NextPageAllow = (e) => {
    e.preventDefault();
    if (nextAvailable) {
      setPage(page + 1);
    } else {
      WarningAlert(e);
    }
  };

  const WarningAlert = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "warning",
      title: "미작성된 항목이 있습니다.",
      text: "필수 항목을 모두 작성해주세요.",
    });
  };

  console.log(page);

  return (
    <Container>
      <SignupNavbar
        pageState={{ page: page, setPage: setPage }}
        title={"회원가입(" + page + "/3)"}
        leftState={{ leftArrow, setLeftArrow }}
        rightState={{ rightArrow, setRightArrow }}
      />

      <SignupOutline onSubmit={NextPageAllow}>
        <SignupBox>
          <ContentZone>
            {page == 1 ? (
              <SignupAuth
                setNextAvailable={setNextAvailable}
                signUpInfo={signUpInfo}
                setSignUpInfo={setSignUpInfo}
                leftState={{ leftArrow, setLeftArrow }}
                rightState={{ rightArrow, setRightArrow }}
              />
            ) : page == 2 ? (
              <SignupAuthPW
                setNextAvailable={setNextAvailable}
                signUpInfo={signUpInfo}
                setSignUpInfo={setSignUpInfo}
                leftState={{ leftArrow, setLeftArrow }}
                rightState={{ rightArrow, setRightArrow }}
              />
            ) : page == 4 ? (
              <SignupAuthSecond
                setNextAvailable={setNextAvailable}
                signUpInfo={signUpInfo}
                setSignUpInfo={setSignUpInfo}
                leftState={{ leftArrow, setLeftArrow }}
                rightState={{ rightArrow, setRightArrow }}
              />
            ) : (
              <></>
            )}
          </ContentZone>
          <ButtonBigMain
            name={page == 2?("회원가입 완료"):("다음")}
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
