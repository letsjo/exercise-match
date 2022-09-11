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

  const { detailData } = useSelector((state) => state.boardReducer);

  console.log(params.id);

  const [isPopperShown, setIsPopperShown] = useState(false);
  const onOpenerClick = (e) => {
    e.stopPropagation();

    setIsPopperShown(!isPopperShown);
  };

  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(detailData?.likeCount);

  const likeOnClick = async () => {
    try {
      const res = await dispatch(
        boardAction.postLike({ boardId: params.id, isLike: like })
      ).unwrap();
      console.log(res);
      setLike(!like);
      setLikeCount(res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    dispatch(boardAction.loadInfoDetail(params.id));
  }, []);

  console.log(detailData);
  console.log(params.type);

  return (
    <>
      <NavBar />
      <Container>
        <ProfileWrap>
          <>
            <Profile>
              <img src={detailData.memberSimpleDto?.profile} alt="" />
            </Profile>
            <Nickname>{detailData.memberSimpleDto?.nickname}</Nickname>
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
          isMatching={detailData.currentEntry >= detailData.maxEntry}
          category={TranslateCates(detailData.category)}
          title={detailData.title}
          writeDate={GetDate(detailData.createdAt)}
        />
        <ContentWrap>{detailData.content}</ContentWrap>
        {detailData.boardimage && (
          <ContentImage>
            <img src={detailData.boardimage} alt="" />
          </ContentImage>
        )}
        <InfoWrap>
          <Icon onClick={likeOnClick}>
            {like ? (
              <BsHeartFill color="red" size={24} />
            ) : (
              <BsHeart size={24} />
            )}
          </Icon>
          <Text>좋아요 {likeCount}개</Text>
          <CommentIcon>
            <MdComment size={24} />
          </CommentIcon>
          <Text>댓글 {detailData.commentCount}개</Text>
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
