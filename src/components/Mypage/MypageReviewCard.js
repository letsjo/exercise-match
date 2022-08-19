import React from "react";
import styled from "styled-components";

const MypageReviewCard = () => {
  return (
    <Container>
      <ProfileImage>
        <Image>
            <img src="https://image.fmkorea.com/files/attach/new2/20220312/14339012/3726389874/4424593526/b0074c5ac8c5a4fad7809f2004a41665.jpeg" alt=""/>
        </Image>
      </ProfileImage>
      <ContextWrap>
        <PersonalWrap>
            <SmallWrap>
            <Nickname>닉네임</Nickname>
            <Date>2022.xx.xx</Date>
            </SmallWrap>
            <StarRate>
                <Star></Star>
            </StarRate>
        </PersonalWrap>
        <Context>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
          vestibulum sed at nullam odio. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vitae vestibulum sed at nullam odio.Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Vitae vestibulum sed at nullam
          odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
          vestibulum sed at nullam odio.
        </Context>
        <ButtonWrap>
            <Matching>매칭글</Matching>
            <Join>테니스 같이 칠 사람?</Join>
        </ButtonWrap>
      </ContextWrap>
    </Container>
  );
};

const Container = styled.div`
  width: 780px;
  height: 152px;
  border-top: 1px solid #f0f0f0;
  box-sizing: border-box;
  padding: 20px 0px;
  display: flex;
`;

const ProfileImage = styled.div`
  width: 90px;
  height: 50px;
  padding: 0px 20px;
  box-sizing: border-box;
`;

const Image=styled.div`
    width: 50px;
    height: 50px;
    border-radius: 70px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const ContextWrap = styled.div`
  width: 692px;
  height: 112px;
`;

const PersonalWrap = styled.div`
  height: 39px;
  margin-bottom: 10px;
`;

const SmallWrap=styled.div`
    width: 660px;
    margin-left: 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
`;

const Nickname=styled.div`
    font-size: 15px;
    height: 23px;
`;

const Date =styled.div`
    width: 52px;
    height: 15px;
    font-size: 10px;
    font-weight:bold ;
    margin: auto 0px;
    box-sizing: border-box;
`;

const StarRate=styled.div`
    width:680px;
    height: 16px;
`;

const Star =styled.div`
    width: 80px;
    height: 16px;
    margin-left: 10px;
    box-sizing: border-box;
    background-color: snow;
`;

const Context = styled.div`
margin-bottom: 10px;
font-size: 10px;
  height: 30px;
  padding: 0px 10px;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2; // 원하는 라인수
  -webkit-box-orient: vertical;
`;

const ButtonWrap = styled.div`
    display: flex;
`;

const Matching =styled.div`
    border: 1px solid #A8A8A8;
    border-right: none;
    border-radius: 2px 0px 0px 2px;
    padding: 4px 6px;
    margin-left: 10px;
    box-sizing: border-box;
    font-size: 10px;
`;

const Join =styled.div`
    border: 1px solid #A8A8A8;
border-radius: 0px 2px 2px 0px;
padding: 4px;
box-sizing: border-box;
font-size: 10px;
`;

export default MypageReviewCard;
