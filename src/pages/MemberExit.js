import React, {useState} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import SubNavbar from '../components/public/SubNavbar';

const MemberExit = () => {
    const [leftArrow,setLeftArrow] = useState(true);
  const [rightArrow,setRightArrow] = useState(false);
  const navigate=useNavigate();

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
        <ExitBtn>탈퇴</ExitBtn>
        </Button>
    </ButtonWrap>
    </ExitWrap>
    </BackgroundWrap>
    </Container>
  )
}

const Container=styled.div`
height: 100vh;
background-color:#DCF6FC;
`;



const BackgroundWrap=styled.div`
height: 800px;
width: 800px;
margin: 18px auto auto;
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