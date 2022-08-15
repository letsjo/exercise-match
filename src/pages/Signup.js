// packages
import React, {useState} from "react";
import styled from "styled-components";

// components
import SignupAuth from "../components/SignupAuth";
import SignupNavbar from "../components/SignupNavbar";
import SignupAuthSecond from "../components/SignupAuthSecond";

const Signup = () => {
  const [page,setPage] = useState(1);
  return (
    <Container>
      <SignupNavbar pageState={{page,setPage}} title={"회원가입("+page+"/2)"} leftArrow={true} rightArrow={false} />

      <SignupOutline>
        <SignupBox>
          {/* {<SignupAuth />} */}
          <SignupAuthSecond/>
          <NextButton>다음</NextButton>
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
  width: 100%;

  margin: 75px 50px;
`;

const NextButton = styled.div`
  width: 100%;
  height: 69px;
  position: relative;
  bottom: 0;
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
