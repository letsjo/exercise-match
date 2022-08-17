import React from "react";
import styled from "styled-components";
import InputEditButton from "../public/InputEditButton";
import ShowStarScore from "../public/ShowStarScore";

const MyProfileShow = () => {
  return (
    <Container>
      <LeftFrame>
        <LeftZone>
          <PhotoFrame>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfUdO7mjLq0t2Z84miXEHCrcg9B6P3_WBOJZJMtjLfmfPPhhbgQquqw_MibaCMhlX1aBw&usqp=CAU" />
          </PhotoFrame>
          <InfoFrame>
            <div>홍길동</div>
            <ShowStarScore point={4} />
          </InfoFrame>
        </LeftZone>
      </LeftFrame>
      <RightFrame>
        <RightZone>
          <InputEditButton initialState="홍길동" />
          <InputEditButton title="관심사" initialState="테스트" />
          <InputEditButton title="참여횟수" initialState="헬스 n회 | 테니스 n회 | 기타 n회" editBt={false} />
        </RightZone>
      </RightFrame>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  border: 1px solid #dedede;
`;

const LeftFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  border: 10px solid #ffffff;
  width: 310px;
  height: 280px;
  gap: 10px;
`;

const LeftZone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PhotoFrame = styled.div`
  width: 127px;
  height: 127px;
  border-radius: 70px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const InfoFrame = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  div{
    font-size: 25px;
    font-weight: 400;
  }
`;

const RightFrame = styled.div`
  width: 470px;
`;

const RightZone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 28px 35px;
`;

export default MyProfileShow;
