import React from "react";
import styled from "styled-components";
import InputEditButton from "../public/InputEditButton";
import ShowStarScore from "../public/ShowStarScore";

const MyProfileShow = ({ mypage = true }) => {
  return (
    <Container>
      <LeftFrame>
        <LeftZone>
          <PhotoFrame>
            <img src="https://blog.kakaocdn.net/dn/WEMjR/btqyKIAbWD0/AMiEpF2AWAZN1cSIOFA8MK/img.jpg" />
          </PhotoFrame>
          <InfoFrame>
            <NameZone>홍길동</NameZone>
            <ShowStarScore point={4} width={128} height={25}/>
          </InfoFrame>
        </LeftZone>
      </LeftFrame>
      <RightFrame>
        <RightZone>
          <InputEditButton
            initialState="홍길동"
            editBt={mypage ? true : false}
          />
          <InputEditButton
            title="관심사"
            initialState="#관심사1 #관심사2 #관심사3"
            fontSize="15px"
            editBt={mypage ? true : false}
            border={true}
          />
          <InputEditButton
            title="참여횟수"
            initialState="헬스 n회 | 테니스 n회 | 기타 n회"
            editBt={false}
            fontSize="15px"
          />
          {mypage ? (
            <ButtonZone>
              <button>회원정보 보기</button>
            </ButtonZone>
          ) : (
            <></>
          )}
        </RightZone>
      </RightFrame>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  border: 1px solid #dedede;
  overflow: hidden;
  
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
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
`;

const NameZone = styled.div`
  font-size: 22px;
  font-weight: 400;
`;

const RightFrame = styled.div`
  width: 470px;
  background-color: white;
`;

const RightZone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 28px 35px;
`;

const ButtonZone = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  button {
    margin-right: 10px;
    width: 103px;
    height: 31px;
    background: #494949;
    border: 1px solid #494949;
    border-radius: 5px;
    color: white;
  }
`;

export default MyProfileShow;
