import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import NavBar from "../components/public/NavBar";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { MdComment } from "react-icons/md";
import Swal from "sweetalert2";
import DetailpagePopover from "../components/Detailpage/DetailpagePopover";
import TitleWrap from "../components/Detailpage/TitleWrap";
import { boardAction } from "../redux/actions/boardAction";
import Comment from "../components/public/Comment";
import TranslateCates from "../utils/TranslateCates";
import GetDate from "../utils/GetDate";

const InformationDetailPage = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const { isLogin } = useSelector((state) => state.userReducer);

  const [isPopperShown, setIsPopperShown] = useState(false);
  const onOpenerClick = (e) => {
    e.stopPropagation();

    setIsPopperShown(!isPopperShown);
  };

  const [detailsList, setDetailsList] = useState({});
  const [like, setLike] = useState(true);
  const [likeCount, setLikeCount] = useState(detailsList.likeCount);
  let detailsData = [];
  
  const likeOnClick = async () => {
    try {
      const res = await dispatch(
        boardAction.postLike({
          boardType: params.type,
          boardId: params.id,
          isLike: like,
        })
      ).unwrap();
      setLike(!like);
      setLikeCount(res.data.likeCount);
    } catch (e) {
      console.log(e);
      if (e.status === 403) {
        Swal.fire({
          icon: "warning",
          title: "본인 글에는 할 수 없습니다.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  const getParticipate = async () => {
    try {
      const res = await dispatch(
        boardAction.getParticipate({ boardId: params.id })
      ).unwrap();
      setLike(!res.data?.likeState);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const loadBoardDetails = async () => {
    try {
      const res = await dispatch(
        boardAction.loadInfoDetail({ boardId: params.id })
      ).unwrap();
      detailsData = res.data;
      detailsData["createDate"] = GetDate(res.data.createdAt);
      setDetailsList(detailsData)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadBoardDetails();
    getParticipate();
  }, [isLogin]);

  console.log(detailsList);
  console.log(params.type);

  return (
    <>
      <NavBar />
      <Container>
        <ProfileWrap>
          <>
            <Profile>
              <img src={detailsList.memberSimpleDto?.profile} alt="" />
            </Profile>
            <Nickname>{detailsList.memberSimpleDto?.nickname}</Nickname>
          </>
          <Dot>
            <BiDotsVerticalRounded size={30} onClick={onOpenerClick} />

            {isPopperShown && (
              <DetailpagePopover
                onOpenerClick={onOpenerClick}
                boardId={params.id}
              ></DetailpagePopover>
            )}
          </Dot>
        </ProfileWrap>
        <TitleWrap
          board={params.type}
          isMatching={detailsList.currentEntry >= detailsList.maxEntry}
          category={TranslateCates(detailsList.category)}
          title={detailsList.title}
          writeDate={GetDate(detailsList.createdAt)}
        />
        <ContentWrap>{detailsList.content}</ContentWrap>
        {detailsList.boardimage && (
          <ContentImage>
            <img src={detailsList.boardimage} alt="" />
          </ContentImage>
        )}
        <InfoWrap>
          <Icon onClick={likeOnClick}>
            {like ? (
              <BsHeart size={24} />
            ) : (
              <BsHeartFill color="red" size={24} />
            )}
          </Icon>
          <Text>좋아요 {likeCount ? likeCount : detailsList.likeCount}개</Text>
          <CommentIcon>
            <MdComment size={24} />
          </CommentIcon>
          <Text>댓글 {detailsList.commentCount}개</Text>
        </InfoWrap>
        <Comment boardId={params.id} />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 700px;
  margin: 15px auto 112px;
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

const Dot = styled.div`
  width: 30px;
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
  margin-bottom: 30px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
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

const JoinButton = styled.div`
  height: 89px;
  background-color: #00cfff;
  border: 1px solid #a8a8a8;
  font-size: 20px;
  font-weight: bold;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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
  cursor: pointer;
`;

const CommentIcon = styled.div`
  height: 24px;
  width: 24px;
  margin: 2.5px 10px 2.5px 0px;
`;

const Text = styled.div`
  height: 29px;
  font-weight: bold;
  color: #494949;
  font-size: 20px;
  margin-right: 39px;
`;

export default InformationDetailPage;
