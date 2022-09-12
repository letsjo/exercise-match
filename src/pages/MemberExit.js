import React, {useState} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import SubNavbar from '../components/public/SubNavbar';
import { useDispatch } from 'react-redux';
import { userAction } from '../redux/actions/userAction';
import Swal from 'sweetalert2';

const MemberExit = () => {
    const [leftArrow,setLeftArrow] = useState(true);
  const [rightArrow,setRightArrow] = useState(false);
  const navigate=useNavigate();
  const dispatch = useDispatch();

  const withdrawButton = (e) =>{
    e.preventDefault();
    Swal.fire({
        title: '비밀번호 입력해주세요.',
        text: '회원 탈퇴 후에는 복구가 불가능합니다.',
        input: 'password',
        inputPlaceholder: '비밀번호를 입력해주세요.',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: '확인',
        showLoaderOnConfirm: true,
        cancelButtonText: '취소',
        preConfirm: async (password) => { 
            try {
                const res = await dispatch(userAction.userWithdraw({password})).unwarp();
                console.log(res);
            } catch(err){
                console.log(err);
            }
          console.log(password);
        },
      })
  }

  return (
    <Container>
    <SubNavbar 
    title="회원탈퇴" 
    leftState={{leftArrow,setLeftArrow}}
    rightState={{rightArrow,setRightArrow}} />

    <BackgroundWrap>
    <ExitWrap>
    <TextWrap>
        <Title>홍길동님 잠시만요 !</Title>
        <ContentWrap>
            <Content>● 탈퇴 후에는 계정을 다시 살리거나 데이터를 복구할 수 없습니다.</Content>
            <Content>● 본 계정으로 다시는 로그인 할 수 없습니다.</Content>
            <Content>● 회원 탈퇴 시 현재 계정으로 작성한 게시글, 댓글 등을 수정할 수 없습니다.</Content>
        </ContentWrap>
    </TextWrap>

    <ButtonWrap>
        <Message>정말 탈퇴하시겠습니까?</Message>
        <Button>
        <CancelBtn onClick={ () => navigate(-1) }>취소</CancelBtn>
        <ExitBtn onClick={(e) => withdrawButton(e)}>탈퇴</ExitBtn>
        </Button>
    </ButtonWrap>
    </ExitWrap>
    </BackgroundWrap>
    </Container>
  )
}

const Container=styled.div`
min-height: 100vh;
background-color:#f0f0f0;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
`;



const BackgroundWrap=styled.div`
height: 800px;
width: 800px;
margin: 18px auto 112px;
padding:74px 10px;
box-sizing: border-box;
background-color: white;
`;

const ExitWrap=styled.div`
    height: 665px;
    width: 600px;
    padding: 10px;
    box-sizing: border-box;
    margin: auto;
`;

const TextWrap=styled.div`
    height: 323px;
    margin-bottom: 200px;
`;

const Title=styled.div`
    height: 51px;
    font-size:35px;
    font-weight:bold;
    margin-bottom:120px;
`;

const ContentWrap=styled.div`
    height: 109px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Content=styled.div`
    height: 23px;
    font-size: 15px;
`;

const ButtonWrap=styled.div`
height: 122px;
display: flex;
flex-direction: column;
justify-content: space-between;
`;

const Message=styled.div`
    height: 23px;
    font-size: 15px;
    font-weight: bold;
`;

const Button=styled.div`
    height: 69px;
    display: flex;
    justify-content: space-between;
`;

const CancelBtn=styled.div`
    width: 270px;
    height: 69px;
    background-color: #a8a8a8;
    font-size: 20px;
    border-radius: 5px;
    color:white;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const ExitBtn=styled.div`
    width:270px;
    height: 69px;
    background-color: #494949;
    font-size: 20px;
    color:white;
    font-weight: bold;
    display: flex;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export default MemberExit