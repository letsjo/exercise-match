import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const CheckListBox = ({rate}) => {

  // const goodCommentList=["친절","매너","약속","운동","전문"]
  // const badCommentList=["불만","불만","불만","불만","불만"]
  
  // const [starRate,setStarRate]=useState(rate);
  const [commentList,setCommentList]=useState([]);
  
  useEffect(()=>{
    if(rate>3){
      setCommentList(["시간 약속을 잘지켜요.","친절하고 매너가 좋아요.","응답이 빨라요.","해당 운동에 대한 이해도가 높아요.","세세하게 잘 가르쳐 줘요."])
    }else{
      setCommentList(["불친절해요.","시간 약속을 안 지켜요.","채팅을 보내도 답이 늦거나 없어요.","모임 직전에 취소했어요.","약속장소에 나타나지 않았어요."])
    }
  },[rate]); 

  return (
        <ReviewCheck>
          
        {commentList.map((comment, idx)=>{
          return(
            <CheckList key={idx}>
          <CheckBox>
            <input type="checkbox" />
          </CheckBox>
          <ListContent>{rate>3 ? comment: comment}</ListContent>
        </CheckList>
          )
        })}
      </ReviewCheck>


  )
}

const ReviewCheck = styled.div`
  width: 400px;
  height: 220px;
  margin: auto auto 50px;
`;

const CheckList = styled.div`
  display: flex;
  padding: 10px;
  box-sizing: border-box;
  height: 44px;
`;

const CheckBox = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const ListContent = styled.div`
  height: 23px;
  font-size: 15px;
`;

export default CheckListBox