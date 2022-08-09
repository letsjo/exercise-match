import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Popover = ({ onClose }) => {
  const settingsWindowRef = useRef(null);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (!settingsWindowRef.current.contains(e.target)) {
        onClose();
      }
    };

    window.addEventListener("click", pageClickEvent, true);

    return () => {
      window.removeEventListener("click", pageClickEvent, true);
    };
  });

  return <Wrapper ref={settingsWindowRef}>
    <ProfileBox>
      <Image/>
      <Profile> 
        <Nickname>닉네임</Nickname>
        <ProfileManage>프로필 관리</ProfileManage>
      </Profile>
    </ProfileBox>
    <Line/>
    <Logout>로그아웃</Logout>
    </Wrapper>
};

const Wrapper = styled.div`
  position: absolute;
  width: 150px;
  border: 1px solid lightgray;
  right: 0;
  top: 58px;
  margin-right: 20px;
  border-radius: 3px;
`;

const ProfileBox = styled.div`
  padding: 10px;
  height : 30px;
`;

const Image = styled.img`
  float :left;
  width: 40px;
  height: 40px;
  margin-right: 5px;
  background-color: aliceblue;
`;

const Profile =styled.div`
  
`;

const Nickname = styled.div`
  font-weight: bold;
`;

const ProfileManage=styled.div`
  color: cornflowerblue;
  font-size: small;
  cursor: pointer;
`;

const Line = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  margin: 5px auto 0px;
`;

const Logout = styled.div`
padding :10px;
font-size: small;
cursor: pointer;
`;

export default Popover;
