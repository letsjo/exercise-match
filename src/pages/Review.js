import React, { useState } from 'react'
import styled from 'styled-components'
import ReviewBox from '../components/Review/ReviewBox';
import SubNavbar from '../components/public/SubNavbar';

const Review = () => {
  const [leftArrow,setLeftArrow] = useState(true);
  const [rightArrow,setRightArrow] = useState(false);

  return (
    <Container>
        <SubNavbar
            title={"리뷰 보내기"}
            leftState={{leftArrow,setLeftArrow}}
            rightState={{rightArrow,setRightArrow}}
            />
            <ReviewBox/>
    </Container>
  )
}

const Container=styled.div``;

export default Review