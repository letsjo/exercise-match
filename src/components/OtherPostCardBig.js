import React from 'react'
import OtherPostCard from './OtherPostCard'
import styled from 'styled-components'

const OtherPostCardBig = () => {
  return (
    <OtherPostCardWrap>
        <OtherPostCard/>
        <OtherPostCard/>
        <OtherPostCard/>
        <OtherPostCard/>
    </OtherPostCardWrap>
  )
}

const OtherPostCardWrap =styled.div`
    width:1010px;
    height: 279px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    margin: auto;
`;

export default OtherPostCardBig