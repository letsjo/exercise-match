import React from 'react'
import OtherPostCard from './OtherPostCard'
import styled from 'styled-components'

const OtherPostCardBig = () => {
  return (
    <OtherPostCardWrap>
        <OtherPostCard
        image="https://mblogthumb-phinf.pstatic.net/MjAyMDExMTNfMjIw/MDAxNjA1MjMyMTkzNDY4.fEFfKq34_rOYybwAXt8_s8LQ4eyZqPQs-rMsXIudOB0g.SiV6bxxfDbtCN11K_oMpWocArA3PeKXqHOu_TvlH3Skg.JPEG.younghanarin/b33c9c6fb020fde0b2e8dfd20a60a951.jpg?type=w800"
         category="헬스" 
        title="제목제목" 
        writer="닉네임"/>
        <OtherPostCard
        image="https://mblogthumb-phinf.pstatic.net/MjAyMDExMTNfMjIw/MDAxNjA1MjMyMTkzNDY4.fEFfKq34_rOYybwAXt8_s8LQ4eyZqPQs-rMsXIudOB0g.SiV6bxxfDbtCN11K_oMpWocArA3PeKXqHOu_TvlH3Skg.JPEG.younghanarin/b33c9c6fb020fde0b2e8dfd20a60a951.jpg?type=w800"
        category="배드민턴" 
       title="제목" 
       writer="닉네임"/>
        <OtherPostCard
        image="https://mblogthumb-phinf.pstatic.net/MjAyMDExMTNfMjIw/MDAxNjA1MjMyMTkzNDY4.fEFfKq34_rOYybwAXt8_s8LQ4eyZqPQs-rMsXIudOB0g.SiV6bxxfDbtCN11K_oMpWocArA3PeKXqHOu_TvlH3Skg.JPEG.younghanarin/b33c9c6fb020fde0b2e8dfd20a60a951.jpg?type=w800"
        category="골프" 
       title="제목제목" 
       writer="닉네임이다"/>
        <OtherPostCard
        image="https://mblogthumb-phinf.pstatic.net/MjAyMDExMTNfMjIw/MDAxNjA1MjMyMTkzNDY4.fEFfKq34_rOYybwAXt8_s8LQ4eyZqPQs-rMsXIudOB0g.SiV6bxxfDbtCN11K_oMpWocArA3PeKXqHOu_TvlH3Skg.JPEG.younghanarin/b33c9c6fb020fde0b2e8dfd20a60a951.jpg?type=w800"
        category="테니스" 
       title="제목닙니다" 
       writer="닉네임"/>
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