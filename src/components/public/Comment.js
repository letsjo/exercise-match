import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";
import { FiX } from "react-icons/fi";
import Swal from "sweetalert2";

const Comment = () => {
  const inputRef = useRef();
  const [commentButton, setCommentButton] = useState(false);
  const inputChange = () => {
    // console.log(inputRef.current.value);
    if (inputRef.current.value === "") {
      setCommentButton(false);
    } else {
      setCommentButton(true);
    }
  };

  const commentOnClick=(e)=>{
    e.preventDefault();
    if(inputRef.current.value===""){
        return;
    }
    console.log(inputRef.current.value);
    inputRef.current.value="";
  }

  const Alert = (e) => {
    e.preventDefault();
    Swal.fire({
      // title: '',
      text: "게시물을 삭제하시겠습니까?",
      // icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: "#494949",
      cancelButtonColor: "#d33",
      confirmButtonText: "삭제",
      cancelButtonText: "취소",
      width: 439,
      // heightAuto:false,
      // height:'359px'
    });
  };

  return (
    <Container>
      <CommentInputArea>
        <CommentInput
          placeholder="댓글을 남겨주세요"
          onChange={inputChange}
          ref={inputRef}
        />
        <CommentBtn commentButton={commentButton} onClick={(e)=>commentOnClick(e)}>{commentButton && "등록"}</CommentBtn>
      </CommentInputArea>
      <CommentWrap>
        <ProfileWrap>
          <Profile>
            <img
              src="http://file3.instiz.net/data/cached_img/upload/2018/09/15/0/28998558fac5abcead6e6e942d53194f.jpg"
              alt=""
            />
          </Profile>
          <Nickname>홍길동</Nickname>
          <Delete>
            <FiX size={20} onClick={Alert} />
          </Delete>
        </ProfileWrap>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Content>
        <Date>
          <div>22.xx.xx</div>
        </Date>
      </CommentWrap>

      <CommentWrap>
        <ProfileWrap>
          <Profile>
            <img
              src="http://file3.instiz.net/data/cached_img/upload/2018/09/15/0/28998558fac5abcead6e6e942d53194f.jpg"
              alt=""
            />
          </Profile>
          <Nickname>홍길동</Nickname>
        </ProfileWrap>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra elit
          donec nunc posuere pulvinar libero fermentum mi. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Viverra elit donec nunc posuere
          pulvinar libero fermentum mi.
        </Content>
        <Date>
          <div>22.xx.xx</div>
        </Date>
      </CommentWrap>

      <CommentWrap>
        <ProfileWrap>
          <Profile>
            <img
              src="http://file3.instiz.net/data/cached_img/upload/2018/09/15/0/28998558fac5abcead6e6e942d53194f.jpg"
              alt=""
            />
          </Profile>
          <Nickname>홍길동</Nickname>
        </ProfileWrap>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra elit
          donec nunc posuere pulvinar libero fermentum mi.
        </Content>
        <Date>
          <div>22.xx.xx</div>
        </Date>
      </CommentWrap>
    </Container>
  );
};

const Container = styled.div`
  width: 700px;
  box-sizing: border-box;
`;

const CommentInputArea = styled.form`
  width: 700px;
  height: 69px;
  background: transparent;
  display: flex;
`;

const CommentInput = styled.input`
  padding-left: 20px;
  width: 623px;
  height: 69px;
  border: 1px solid #a8a8a8;
  border-right: none;
  box-sizing: border-box;
  border-radius: 10px 0 0 10px;
  margin-bottom: 30px;
  font-size: 20px;
  outline: none;
`;

const CommentBtn = styled.button`
  width: 77px;
  height: 69px;
  border: 1px solid #a8a8a8;
  border-left: none;
  box-sizing: border-box;
  border-radius: 0 10px 10px 0;
  font-weight: bold;
  font-size: 20px;
  display: flex;
  background-color:transparent ;
  justify-content: center;
  align-items: center;
  ${({ commentButton }) => {
    return css`
   cursor: ${ commentButton? "pointer":"auto"}
     
    `;
  }}
`;

const CommentWrap = styled.div`
  padding: 20px 0px;
  border-bottom: 1px solid #dedede;
`;

const ProfileWrap = styled.div`
  height: 50px;
  display: flex;
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

const Delete = styled.div`
  width: 26px;
  height: 26px;
  margin: auto 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  padding: 10px 10px 10px 80px;
  font-size: 20px;
`;

const Date = styled.div`
  height: 29px;
  color: #494949;
  font-size: 20px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  div {
    margin-right: 10px;
  }
`;

export default Comment;
