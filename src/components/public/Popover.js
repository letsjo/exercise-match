import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; 

const Popover = ({ onOpenerClick }) => {
  const settingsWindowRef = useRef(null);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (!settingsWindowRef.current.contains(e.target)) {
        onOpenerClick(e);
      }
    };

      window.addEventListener("click", pageClickEvent, true);

      return () => {
        window.removeEventListener("click", pageClickEvent, true);
      };
  });

  const navigate=useNavigate();

  return (
    <Wrapper ref={settingsWindowRef}>
      <ProfileBox>
        <Nickname>닉네임</Nickname>
        <Nim>님</Nim>
        <Hello>안녕하세요!</Hello>
        </ProfileBox>
        <Boxes onClick={()=>navigate("/mypage")}>마이페이지</Boxes>
        <Boxes onClick={()=>navigate("/board?type=mymatch&cate=all&page=1&amount=12")}>나의 게시글</Boxes>
    <Logout onClick={()=>navigate("/")}>로그아웃</Logout>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  background-color:white;
  width:300px;
  height: 274px;
  right: 0;
  top: 58px;
  border-radius: 3px;
  z-index: 1;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;

const ProfileBox = styled.div`
  height: 63px;
  border-bottom: 0.5px solid #f0f0f0;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
`;

const Nickname = styled.div`
  width: 42px;
  font-weight: bold;
  font-size: 15px;
  margin-right: 5px;
`;

const Nim = styled.div`
  width: 14px;
  font-weight: bold;
  font-size: 15px;
  margin-right: 10px;
`;

const Hello = styled.div`
  width: 75px;
  font-weight: bold;
  font-size: 15px;
  color: #494949;
`;

const Boxes = styled.div`
  height: 43px;
  border-bottom: 0.5px solid #f0f0f0;
  padding: 10px 20px;
  box-sizing: border-box;
  font-size: 15px;
  font-weight: bold;
  display: flex;
  color: #494949;
  cursor: pointer;
`;

const Logout = styled.div`
  height: 45px;
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  color: #000000;
  font-weight: bold;
  font-size: 15px;
  border: #f0f0f0 solid 2px;
  margin-top: 80px;
`;

export default Popover;
