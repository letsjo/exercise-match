import React from "react";
import styled from "styled-components";
import Comment from "../components/public/Comment";
import NavBar from "../components/public/NavBar";
import { BiDotsVerticalRounded} from "react-icons/bi";
import Swal from "sweetalert2";

const Detailpage = () => {

    const Alert =(e)=>{
        e.preventDefault();
        Swal.fire({
            // title: '',
            text: "게시물을 삭제하시겠습니까?",
            // icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#494949',
            cancelButtonColor: '#d33',
            confirmButtonText: '삭제',
            cancelButtonText:'취소',
            width:439,
            // heightAuto:false,
            // height:'359px'
          })
    }
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
          <Dot>
            <BiDotsVerticalRounded size={30} onClick={Alert}/>
          </Dot>
        </ProfileWrap>
        <TitleWrap>
          <Category>헬스</Category>
          <Title>헬스장 같이 등록할 사람?</Title>
          <Date>20xx.xx.xx</Date>
        </TitleWrap>

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
        <InfoWrap>
          <Icon />
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
`;

const TitleWrap = styled.div`
  height: 157px;
  border-bottom: 1px solid #dedede;
  margin-bottom: 50px;
  padding: 20px 0px;
  box-sizing: border-box;
`;

const Category = styled.div`
  width: 59px;
  height: 39px;
  border: 1px solid #f0f0f0;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  padding: 5px 10px;
  box-sizing: border-box;
`;

const Title = styled.div`
  height: 50px;
  font-size: 25px;
  font-weight: bold;
  /* padding : 10px auto 4px 10px; */
  padding: 10px 10px 4px;
  box-sizing: border-box;
`;

const Date = styled.div`
  width: 113px;
  height: 29px;
  font-size: 20px;
  padding: 0px 10px;
  box-sizing: border-box;
`;

const ContentWrap = styled.div`
  margin-bottom: 50px;
  padding: 10px;
  box-sizing: border-box;
`;

const ContentImage = styled.div`
  height: 317px;
  margin-bottom: 30px;
  background-color: #d9d9d9;
`;

const LocationWrap = styled.div`
  height: 315px;
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
  background-color: aliceblue;
`;

const CommentIcon = styled.div`
  height: 24px;
  width: 24px;
  margin: 2.5px 10px 2.5px 39px;
  background-color: aliceblue;
`;

const Text = styled.div`
  height: 29px;
  font-weight: bold;
  color: #494949;
  font-size: 20px;
`;

export default Detailpage;
