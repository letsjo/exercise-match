import React, { useState, useRef } from "react";
import styled, {css} from "styled-components";
import Popover from "./Popover";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { boardAction } from "../../redux/actions/boardAction";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inputRef = useRef();

  const [isPopperShown, setIsPopperShown] = useState(false);
  const [search, setSearch] = useState();

  const { isLogin, userProfile } = useSelector((state) => state.userReducer);
  const {selectedCity, selectedGu} = useSelector((state)=>state.locationReducer);
  console.log(selectedCity, selectedGu);

  const onSubmitSearch = (e) => {
    if (e.key === "Enter") {
      if (inputRef.current.value) {
        console.log("검색된다!!!");
        e.preventDefault();
        setSearch(inputRef.current.value);
        const keyword= inputRef.current.value;
        // console.log(keyword);
        navigate(`/search?keyword=${keyword}&city=${selectedCity}&gu=${selectedGu}&sort=title_Content&type=matching`);
        // try {
        //   const res = await dispatch(
        //     boardAction.searchBoard({ keyword: inputRef.current.value })
        //   ).unwrap();
        //   console.log(res);
           
        // } catch (e) {
        //   console.log(e);
        // }
      } else {
        window.alert("검색어를 입력해주세요!");
      }
    }
  };

  const onOpenerClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsPopperShown(!isPopperShown);
  };

  return (
    <NavBarWrap>
      <Wrap>
        <Logo href="/">
          <img src="/images/logoMainVer2.png" alt="" />
        </Logo>
        <SearchBox>
          <SearchWrap>
            <SearchIcon>
              <img src="/images/pngwing.com (2).png" alt="" />
            </SearchIcon>
            <SearchInput
              placeholder="어떤 서비스가 필요하세요?"
              type="search"
              onKeyPress={onSubmitSearch}
              ref={inputRef}
            />
          </SearchWrap>
        </SearchBox>
        {isLogin ? (
          <AfterLoginBox>
            <ProfileImg isPopperShown={isPopperShown} onClick={onOpenerClick}>
              <img
                src={
                  userProfile && userProfile != "undefined"
                    ? userProfile
                    : "/images/anonymousProfile.png"
                }
                alt=""
              />
            </ProfileImg>
            <Arrow>
              <div onClick={onOpenerClick}>
                {isPopperShown ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
            </Arrow>
            {isPopperShown && <Popover onOpenerClick={onOpenerClick} />}
          </AfterLoginBox>
        ) : (
          <BeforeLoginBox>
            <LoginBtn
              onClick={() => {
                navigate("/login");
              }}
            >
              로그인
            </LoginBtn>
            <SignupBtn
              onClick={() => {
                navigate("/signup");
              }}
            >
              회원가입
            </SignupBtn>
          </BeforeLoginBox>
        )}
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
  background-color: #ffffff;
  box-sizing: border-box;

  user-select: none;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  width: 1280px;
`;

const Logo = styled.a`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 162px;
  height: 44px;
  margin-right: 40px;
  text-decoration: none;
  color: black;
  overflow: hidden;
  img {
    width: 100%;
  }
`;

const SearchBox = styled.div`
  width: 476px;
  height: 44px;
  background-color: #f0f0f0;
  border-radius: 10px;
  /* :focus-within {
    box-shadow: 0px 0px 3px 3px #cccccc;
  } */
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
  cursor: pointer;
`;

const SignupBtn = styled.div`
  width: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: #000000;
  cursor: pointer;
`;

const AfterLoginBox = styled.div`
  display: flex;
  position: relative;
  margin-left: auto;
  width: 84px;
`;

const ProfileImg = styled.div`
  ${({ isPopperShown }) => {
    return css`
      width: 48px;
      height: 48px;
      border-radius: 25px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 10px;
      border: ${isPopperShown?"2px solid #00cfff;":"2px solid transparent;"}
      box-shadow: ${isPopperShown?"0px 0px 5px #a2e9fa;":""}; 
      img {
        width: 100%;
        height: 100%;
      }
    `;
  }}
`;

const Arrow = styled.div`
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
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
