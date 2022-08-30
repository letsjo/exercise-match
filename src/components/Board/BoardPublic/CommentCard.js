import React from 'react'
import styled from 'styled-components'

const CommentCard = ({content, title, date}) => {
  return (
    <Container>
        <Content>{content}</Content>
        <Title>{title}</Title>
        <Date>{date}</Date>
    </Container>
  )
}

const Container=styled.div`
    width:1000px;
    height: 121px;
    padding:10px;
    box-sizing: border-box;
    border-top: 1px solid #dedede;
`;

const Content =styled.div`
    height: 29px;
    font-size: 20px;
    margin-bottom: 10px;
    color:#000000;
`;

const Title =styled.div`
    height:29px;
    width: 100%;
    font-size: 20px;
    color:#494949;
    margin-bottom: 10px;
`;

const Date =styled.div`
    height: 23px;
    color: #494949;
    font-size: 15px;
`;


export default CommentCard