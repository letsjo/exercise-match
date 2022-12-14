import React from 'react'
import styled from 'styled-components'
import {AiOutlineHeart} from "react-icons/ai"
import {MdChatBubble} from "react-icons/md"

const BulletinLikeCard = ({like, comment, createDate}) => {
  return (
    <Container>
    <LikeCommentBox>
        <IconBox>
            <AiOutlineHeart size={24} color= "#a8a8a8"/> 
            <Text>{like}개</Text>
        </IconBox>
        <IconBox>
        <MdChatBubble size={24} color= "#a8a8a8"/> <Text>{comment}개</Text>
        </IconBox>
    </LikeCommentBox>
    <Daysago>{createDate?.year?(createDate?.year+"년 "+createDate?.month+"월 "+createDate?.day+"일 ("+createDate?.week+") "+createDate?.hour+":"+createDate?.min+":"+createDate?.sec):("")}</Daysago>
    </Container>
  )
}

const Container =styled.div`
    height: 24px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const LikeCommentBox = styled.div`
    height: 24px;
    width: 146px;
    margin-left: 10px;
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
    width:200px;
    font-size:15px;
    color: #a8a8a8;
    text-align: right;
    margin-right:20px;
    box-sizing: border-box;
`;


export default BulletinLikeCard