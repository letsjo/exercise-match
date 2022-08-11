import React, { useState } from "react";
import styled from "styled-components";
import Popover from "./Popover";

const NavBar = () => {
  const [isPopperShown, setIsPopperShown] = useState(false);
  const onOpenerClick = (e) => {
    e.stopPropagation();
    setIsPopperShown(!isPopperShown);
  };

  const onClose = () => {
    setIsPopperShown(false);
  };
  return (
    <NavBarWrap>
      <Wrap>
        {/* <Opener onClick={onOpenerClick}>profile</Opener>
      {isPopperShown && (
        <Popover onClose={onClose}>
          <Popper>Popper</Popper>
        </Popover>
      )} */}
        <Logo>LOGO</Logo>
        <SearchBox></SearchBox>

        {/* <BeforeLoginBox>
        <LoginBtn>로그인</LoginBtn>
        <SignupBtn>회원가입</SignupBtn>
      </BeforeLoginBox> */}

        <AfterLoginBox onClick={onOpenerClick}>
          <img src="/images/pngwing.com (1).png" alt="" />
          {isPopperShown && (
            <Popover onClose={onClose}>
              <Popper>Popper</Popper>
            </Popover>
          )}
        </AfterLoginBox>
      </Wrap>
    </NavBarWrap>
  );
};

const NavBarWrap = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  box-sizing: border-box;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  width: 1280px;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 92px;
  height: 44px;
  margin-right: 40px;
`;

const SearchBox = styled.div`
  width: 476px;
  height: 44px;
  background-color: #f0f0f0;
  border-radius: 10px;
`;

const BeforeLoginBox = styled.div`
  margin-left: auto;
  width: 232px;
  display: flex;
`;

const LoginBtn = styled.div`
  width: 82px;
  margin-right: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: #000000;
`;

const SignupBtn = styled.div`
  width: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: #000000;
`;

const AfterLoginBox = styled.div`
  margin-left: auto;
  width: 50px;
  height: 50px;
  img {
    width: 50px;
    height: 50px;
  }
`;

const Opener = styled.button`
  position: absolute;
  top: 0;
  right: 10px;
  width: 80px;
  height: 50px;
  font-size: 20px;
  border-radius: 5px;
  border: none;
`;

const Popper = styled.div`
  width: 200px;
  height: 150px;
  background-color: #fffcf0;
  padding: 20px;
  color: black;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;



export default NavBar;
