import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { BsStarFill, BsStar } from "react-icons/bs";
import { useState, useRef } from "react";
import ReviewBoxAfter from "./ReviewBoxAfter";
import { useDispatch, useSelector } from "react-redux";
import { boardAction } from "../../redux/actions/boardAction";
import { Navigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ReviewBox = () => {
  const dispatch = useDispatch();
  const [rate, setRate] = useState(5);
  const [show, setShow] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [otherMember, setOtherMember]= useState();
  const params = useParams();

  const checkboxRefForm = useRef();
  
  const {userNickName} = useSelector((state)=>state.userReducer);
 

  useEffect(()=>{
    loadReview(params.id);
  }, [])

  const loadReview = async(boardId) =>{
    try{
      const res = await dispatch(boardAction.loadReview({boardId})).unwrap();
      const memberName=res.data.otherMember;
      console.log(res);
      setOtherMember(memberName);
    } catch (e) {
      console.log(e);
    }
  }
  

  const save = async (e) => {
    e.preventDefault();

    const num = [];
    Array.from({ length: 5 }, (_, index) => {
      checkboxRefForm.current[index].checked && num.push(index+1);
    }
    );

    console.log(num);

    const reviewData = {
      score : rate,
      num: num,
      review: checkboxRefForm.current[5].value,
      boardId:params.id,
    };

    console.log(reviewData);
    console.log(checkboxRefForm);

    try{
      const res = await dispatch(boardAction.postReview(reviewData));
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: '매칭 리뷰가 작성되었습니다!',
        showConfirmButton: false,
        timer: 1500
      });

      
    } catch(e){
      console.log(e);
    }

  };

  return (
    <Container>
      <ReviewTitle>
        {userNickName} 님 ,<br />
        {otherMember}님과 매칭은 어떠셨나요?
      </ReviewTitle>
      <StarForm show={show} ref={checkboxRefForm} onSubmit={(e) => save(e)}>
        <StarBox show={show}>
          {Array.from({ length: 5 }, (_, idx) => {
            return  (!show && hovered < idx + 1 ) || (show && rate < idx + 1)? (
              <Star
                key={idx}
                onClick={() => {
                  if (!show) setRate(idx + 1);
                  setShow(!show);
                }}
                onMouseEnter={() => {if (!show) setHovered(idx + 1)}}
                onMouseLeave={() => {if (!show) setHovered(null)}}
              >
                <BsStar size={42} />
              </Star>
            ) : (
              <Star
                key={idx}
                onClick={() => {
                  if (!show) setRate(idx + 1);
                  setShow(!show);
                }}
                onMouseEnter={() => {if (!show) setHovered(idx + 1)}}
                onMouseLeave={() => {if (!show) setHovered(null)}}
              >
                <BsStarFill size={42} color="#00CFFF" />
              </Star>
            );
          })}
        </StarBox>
        {show && <ReviewBoxAfter rate={rate} />}
      </StarForm>
    </Container>
  );
};

const Container = styled.div`
  width: 600px;
  min-height: 600px;
  padding: 80px 100px;
  box-sizing: border-box;
  border-radius: 20px;
  margin: 31px auto 112px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;

const ReviewTitle = styled.div`
  width: 315px;
  height: 92px;
  padding: 10px;
  box-sizing: border-box;
  font-size: 25px;
  color: #000000;
  margin: auto;
`;

const StarForm = styled.form`
  transition: all 0.2s ease;
  ${({ show }) => {
    return css`
      transform: ${show ? "translateY(-40px)" : "translateY(+40px)"};
    `;
  }}
`;

const StarBox = styled.div`
  width: 320px;
  height: 60px;
  margin: 50px auto 50px;
  display: flex;
  justify-content: center;
  transition: transform 0.2s ease;
  ${({ show }) => {
    return css`
      transform: ${show ? "scale(60%)" : "scale(100%)"};
    `;
  }}
`;

const Star = styled.div`
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
`;

export default ReviewBox;
