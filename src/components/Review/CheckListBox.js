import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const CheckListBox = ({rate}) => {

  // const goodCommentList=["친절","매너","약속","운동","전문"]
  // const badCommentList=["불만","불만","불만","불만","불만"]
  
  // const [starRate,setStarRate]=useState(rate);
  const [commentList,setCommentList]=useState([]);
  
  useEffect(()=>{
    if(rate>3){
      setCommentList(["친절","매너","약속","운동","전문"])
    }else{
      setCommentList(["불만","불만","불만","불만","불만"])
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
        
        {/* <CheckList>
          <CheckBox>
          <input type="checkbox" />
          </CheckBox>
          <ListContent>{rate>3 ? "2 친절하고 매너가 좋아요.": "2 별로."}</ListContent>
        </CheckList>

        <CheckList>
          <CheckBox>
          <input type="checkbox"/>
          </CheckBox>
          <ListContent>{rate>3? "3 친절하고 매너가 좋아요.": "3 별로."}</ListContent>
        </CheckList>

        <CheckList>
          <CheckBox>
          <input type="checkbox" />
          </CheckBox>
          <ListContent>{rate>3? "4 친절하고 매너가 좋아요.": "4 별로."}</ListContent>
        </CheckList>

        <CheckList>
          <CheckBox>
          <input type="checkbox" />
          </CheckBox>
          <ListContent>{rate>3? "5 친절하고 매너가 좋아요.": "5 별로."}</ListContent>
        </CheckList>   */}
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