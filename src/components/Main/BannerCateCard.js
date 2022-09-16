import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { BsCalendarCheck } from "react-icons/bs";
import { MdPeople } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import TranslateCates from "../../utils/TranslateCates";
import GetDate from "../../utils/GetDate";

const BannerCateCard = ({ data, date }) => {
  const navigate = useNavigate();
  // const [detailsList, setDetailsList]= useState();
  // let detailsData=[];

  // detailsData

  if (data)
    return (
      <BoardCard onClick={(e) => navigate(`/detail/matching/${data.boardId}`)}>
        <ImageBox>
          <img src={data?.boardimage} alt="" />
        </ImageBox>
        <ContentBox>
          <Category>
            {data?.category && TranslateCates(data?.category)}
          </Category>
          <Title>{data?.title}</Title>
          <Nickname>{data?.nickname}</Nickname>
          <Box>
            <Icon>
              <BsCalendarCheck size={15} />
            </Icon>
            <Text>
    
              {date?.month + "월 " + date?.day + "일 " + date.week + "요일"
              }
            </Text>
          </Box>
          <Box>
            <Icon>
              <MdPeople size={18} />
            </Icon>
            <Text>
              {data?.currentEntry == data?.maxEntry
                ? "매칭완료"
                : data?.currentEntry + "/" + data?.maxEntry + " 매칭"}
            </Text>
          </Box>
        </ContentBox>
      </BoardCard>
    );
};

const BoardCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 486px;
  height: 156px;
  padding: 10px;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    text-decoration-line: underline;
  }
`;

const ImageBox = styled.div`
  margin-right: 20px;
  width: 156px;
  height: 136px;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const ContentBox = styled.div`
  width: 290px;
  height: 136px;
`;

const Category = styled.div`
  padding: 1px 5px;
  height: 19px;
  width: max-content;
  margin-bottom: 4px;
  box-sizing: border-box;
  border: 1px solid #a2e9fa;
  border-radius: 5px;
  color: #494949;
  font-size: 10px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  height: 42px;
  font-weight: 500;
  font-size: 15px;
  line-height: 140%;
  margin-bottom: 5px;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2; // 원하는 라인수
  -webkit-box-orient: vertical;
`;

const Nickname = styled.div`
  height: 15px;
  font-weight: 400;
  font-size: 10px;
  line-height: 150%;
  color: #494949;
  margin-bottom: 5px;
  box-sizing: border-box;
`;

const Box = styled.div`
  display: flex;
`;

const Icon = styled.div`
  width: 20px;
  height: 20px;
  margin: auto 10px auto 0px;
  box-sizing: border-box;
  color: #494949;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-size: 15px;
  height: 23px;
`;

export default BannerCateCard;
