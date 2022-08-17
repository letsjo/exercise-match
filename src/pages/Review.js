import React from 'react'
import styled from 'styled-components'
import ReviewBox from '../components/ReviewBox';
import SignupNavbar from '../components/SignupNavbar';

const Review = () => {
  return (
    <Container>
        <SignupNavbar
            title={"리뷰 보내기"}
            leftArrow={true}
            rightArrow={false}
            />
            <ReviewBox/>
    </Container>
  )
}

const Container=styled.div``;

export default Review