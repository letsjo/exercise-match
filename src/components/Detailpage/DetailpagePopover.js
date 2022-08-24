import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import Swal from "sweetalert2";

const DetailpagePopover = ({onOpenerClick}) => {
    const settingsWindowRef = useRef(null);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (!settingsWindowRef.current.contains(e.target)) {
        onOpenerClick(e);
      }
    };

    window.addEventListener("click", pageClickEvent, true);

    return () => {
      window.removeEventListener("click", pageClickEvent, true);
    };
  });

  const Alert =(e)=>{
    e.preventDefault();
    Swal.fire({
        // title: '',
        text: "게시물을 삭제하시겠습니까?",
        // icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#494949',
        cancelButtonColor: '#d33',
        confirmButtonText: '삭제',
        cancelButtonText:'취소',
        width:439,
        customClass:'swal-height'
        // heightAuto:false,
        // height:'359px'
      })
      
}

  return (
    <Wrapper ref={settingsWindowRef}>
        <Text>게시글 수정</Text>
        <Text onClick={Alert}>게시글 삭제</Text>
        <CloseBtn>닫기</CloseBtn>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  background-color: white;
  width:131px;
  height: 181px;
  right: 0;
  top: 58px;
  z-index: 1;
  border: 1px solid #F0F0F0;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`; 

const Text=styled.div`
    font-weight: bold;
  font-size: 15px;
  border-bottom: 0.5px solid #f0f0f0;
  height: 43px;
 display: flex;
 justify-content: center;
 align-items: center;
 cursor: pointer;
`;

const CloseBtn=styled.div`
    font-weight: bold;
  font-size: 15px;
  border-top: 0.5px solid #f0f0f0;
  height: 43px;
 display: flex;
 justify-content: center;
 align-items: center;
 margin-top: 50px;
 cursor: pointer;
`;



export default DetailpagePopover