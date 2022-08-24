import React,{useState} from "react";
import styled from "styled-components";
import Comment from "../components/public/Comment";
import NavBar from "../components/public/NavBar";
import { BiDotsVerticalRounded} from "react-icons/bi";
import {BsHeart, BsHeartFill} from "react-icons/bs"
import DetailpagePopover from "../components/Detailpage/DetailpagePopover";
import TitleWrap from "../components/Detailpage/TitleWrap";
import DatePersonnelWrap from "../components/Detailpage/DatePersonnelWrap";

const Detailpage = () => {
    const [isPopperShown, setIsPopperShown] = useState(false);
  const onOpenerClick = (e) => {
    e.stopPropagation();
    
    setIsPopperShown(!isPopperShown);
  };

  // const onClose = () => {
  //   setIsPopperShown(false);
  // };

  const [like, setLike] = useState(false);

  const likeOnClick= ()=>{
    // if(like){
    //   setLike(false);
    // }else{
    //   setLike(true);
    // }
    setLike(!like);
  }

  console.log(like);

    
  return (
    <>
      <NavBar />
      <Container>
        <ProfileWrap>
            <>
          <Profile>
            <img
              src="http://file3.instiz.net/data/cached_img/upload/2018/09/15/0/28998558fac5abcead6e6e942d53194f.jpg"
              alt=""
            />
          </Profile>
          <Nickname>홍길동</Nickname>
          </>
          <Dot >
            <BiDotsVerticalRounded size={30} onClick={onOpenerClick}/>

{isPopperShown &&(
            <DetailpagePopover onOpenerClick={onOpenerClick}></DetailpagePopover>
          )}
          </Dot>
         
        </ProfileWrap>
        <TitleWrap/>

        <DatePersonnelWrap/>

        <ContentWrap>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra elit
          donec nunc posuere pulvinar libero fermentum mi. Lobortis vulputate
          consectetur suspendisse massa mauris. Lacus odio pretium enim gravida.
          Netus sit a, enim enim quam quam egestas arcu.
        </ContentWrap>
        <ContentImage />
        <LocationWrap>
          <LocationTitle>장소 위치</LocationTitle>
          <LocationImg></LocationImg>
        </LocationWrap>
        <JoinButton>참여하기 X/X</JoinButton>
        <InfoWrap>
          <Icon  onClick={likeOnClick}>
            {like?< BsHeartFill color="red" size={24}/>:<BsHeart size={24}/>}
            
          </Icon>
          <Text>좋아요 0개</Text>
          <CommentIcon />
          <Text>댓글 0개</Text>
        </InfoWrap>
        <Comment />     
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 700px;
  margin: 15px auto;
`;

const ProfileWrap = styled.div`
  display: flex;
  height: 50px;
`;

const Profile = styled.div`
  height: 50px;
  width: 50px;
  margin-right: 30px;
  border-radius: 70px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const Nickname = styled.div`
  width: 75px;
  height: 29px;
  margin: auto auto auto 0px;
`;

const Dot =styled.div`
    width:30px;
    height: 30px;
    margin: auto 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const ContentWrap = styled.div`
  margin-bottom: 50px;
  padding: 10px;
  box-sizing: border-box;
  font-size: 20px;
`;

const ContentImage = styled.div`
  height: 317px;
  margin-bottom: 30px;
  background-color: #d9d9d9;
`;

const LocationWrap = styled.div`
  height: 315px;
  margin-bottom: 50px;
`;

const LocationTitle = styled.div`
  height: 29px;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 5px;
`;

const LocationImg = styled.div`
  height: 281px;
  border: 1px solid lightgray;
  border-radius: 20px;
`;

const JoinButton=styled.div`
  height: 89px;
  background-color: #494949;
  font-size: 20px;
  font-weight: bold;
  color:white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoWrap = styled.div`
  height: 129px;
  border-bottom: 1px solid #dedede;
  display: flex;
  margin-bottom: 50px;
  padding: 50px 0px;
  box-sizing: border-box;
`;

const Icon = styled.div`
  height: 24px;
  width: 24px;
  margin: 2.5px 10px 2.5px 0px;
`;

const CommentIcon = styled.div`
  height: 24px;
  width: 24px;
  margin: 2.5px 10px 2.5px 0px;
  background-color: aliceblue;
`;

const Text = styled.div`
  height: 29px;
  font-weight: bold;
  color: #494949;
  font-size: 20px;
  margin-right: 39px;
`;


export default Detailpage;
