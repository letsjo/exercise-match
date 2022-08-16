// packages
import React, { useState } from "react";
import styled from "styled-components";

// components
import SignupAuth from "../components/SignupAuth";
import SignupNavbar from "../components/SignupNavbar";
import SignupAuthSecond from "../components/SignupAuthSecond";
import ButtonBigMain from "../components/ButtonBigMain";

const Signup = () => {
  const [page, setPage] = useState(1);
  const [nextAvailable,setNextAvailable] = useState(false);

  return (
    <Container>
      <SignupNavbar
        pageState={{ page, setPage }}
        title={"회원가입(" + page + "/3)"}
        leftArrow={true}
        rightArrow={false}
      />

      <SignupOutline>
        <SignupBox>
          <ContentZone>
            {<SignupAuth setNextAvailable={setNextAvailable}/>}
            {/* <SignupAuthSecond /> */}
          </ContentZone>
          <ButtonBigMain name="다음" nextAvailable={nextAvailable}/>
        </SignupBox>
      </SignupOutline>
    </Container>
  );
};

const Container = styled.div``;

const SignupOutline = styled.div`
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
