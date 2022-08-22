import React from 'react'
import styled from 'styled-components'
import {AiOutlineHeart} from "react-icons/ai"
import {MdChatBubble} from "react-icons/md"

const BulletinLikeCard = () => {
  return (
    <Container>
    <LikeCommentBox>
        <IconBox>
            <AiOutlineHeart size={24} color= "#a8a8a8"/> <Text>x개</Text>
        </IconBox>
        <IconBox>
        <MdChatBubble size={24} color= "#a8a8a8"/> <Text>x개</Text>
        </IconBox>
    </LikeCommentBox>
    <Daysago>1일 전</Daysago>
    </Container>
  )
}

const Container =styled.div`
    height: 24px;
    width: 100%;
    display: flex;
`;

const LikeCommentBox = styled.div`
    height: 24px;
    width: 146px;
    margin-left: 10px;
    margin-right: 732px;
    display: flex;
    justify-content: space-between;
`;

const IconBox = styled.div`
    width: 58px;
    height: 24px;
    display: flex;
    justify-content: space-between;
`;

const Text =styled.div`
    width: 24px;
    height: 24px;
    color: #a8a8a8;
    font-size:15px;
`;

const Daysago = styled.div`
    width:40px;
    font-size:15px;
    color: #a8a8a8;

`;


export default BulletinLikeCard