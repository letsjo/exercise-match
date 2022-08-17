import React, { useState } from "react";
import styled from "styled-components";
import Popover from "./Popover";

const NavBar = () => {
  const [isPopperShown, setIsPopperShown] = useState(false);
  const onOpenerClick = (e) => {
    e.stopPropagation();
    
    setIsPopperShown(!isPopperShown);
  };

  console.log(isPopperShown);

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
        <SearchBox>
          <SearchWrap>
            <SearchIcon>
              <img src="/images/pngwing.com (2).png" alt="" />
            </SearchIcon>
            <SearchInput placeholder="어떤 서비스가 필요하세요?" />
          </SearchWrap>
        </SearchBox>
        {/* <BeforeLoginBox>
        <LoginBtn>로그인</LoginBtn>
        <SignupBtn>회원가입</SignupBtn>
      </BeforeLoginBox> */}
        <AfterLoginBox>
          <ProfileImg onClick={onOpenerClick}>
            <img src="https://item.kakaocdn.net/do/479d4f178d8d03980ffc52eeb66465c3f43ad912ad8dd55b04db6a64cddaf76d" />
          </ProfileImg>
          <Arrow onClick={onOpenerClick}>o</Arrow>

          {isPopperShown && (
            
            <Popover onClose={onClose}>

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
  /* background-color: aliceblue; */
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
  :focus-within {
    box-shadow: 0px 0px 3px 3px #cccccc;
  }
`;

const SearchWrap = styled.div`
  margin: 9.5px 236px 9.5px 10px;
  width: 450px;
  height: 25px;
  box-sizing: border-box;
  display: flex;
`;

const SearchIcon = styled.div`
  /* background-color: beige; */
  width: 25px;
  height: 25px;
  img {
    width: 25px;
    height: 25px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 23px;
  border: none;
  background-color: transparent;
  box-sizing: border-box;
  outline: none;
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
display: flex;
  position: relative;
  margin-left: auto;
  width: 84px;
`;

const ProfileImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: transparent;
  box-shadow: 1px 1px black;
  img {
    width: 100%;
  }
  margin-right: 10px;
`;

const Arrow = styled.div`
  width:24px;
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
