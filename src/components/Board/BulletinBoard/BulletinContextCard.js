import React from "react";
import styled from "styled-components";

const BulletinContextCard = ({ title, content, image }) => {
  return (
    <Container>
      <ContextBox>
        <Title>{title}</Title>
        <Context>{content}</Context>
      </ContextBox>
      {image && (
        <ImageBox>
          <Image src={image} />
        </ImageBox>
      )}
    </Container>
  );
};

const Container = styled.div`
  margin: auto auto 10px;
  width: 958px;
  height: 137px;
  display: flex;
`;

const ContextBox = styled.div`
  width: 820px;
  height: 137px;
  padding: 10px;
  box-sizing: border-box;
  margin-right: 2px;
`;

const ImageBox = styled.div`
  width: 136px;
  height: 136px;
  display: flex;
`;

const Title = styled.div`
  color: #000000;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Context = styled.div`
  width: 800px;
  font-size: 15px;
  color: #494949;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3; // 원하는 라인수
  -webkit-box-orient: vertical;
`;

const Image = styled.img`
  width: 116px;
  height: 116px;
  background-color: lightgray;
  margin: auto;
`;

export default BulletinContextCard;
