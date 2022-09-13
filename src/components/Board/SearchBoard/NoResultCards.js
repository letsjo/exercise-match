import React from 'react'
import styled from "styled-components";

const NoResultCards = ({keyword}) => {
  return (
    // <Container>
        <SearchNoneContainer>
          <NoneTitleBox>
            <NoneTextTop>'{keyword}'</NoneTextTop>
            <NoneTextBottom>에 대한 검색 결과가 없습니다.</NoneTextBottom>
          </NoneTitleBox>
          <NoneContentBox>
            <NoneContent>
              •&nbsp;&nbsp;&nbsp;단어의 철자가 정확한지 확인해 보세요
              <br />
              •&nbsp;&nbsp;&nbsp;보다 일반적인 검색어로 다시 검색해 보세요
              <br />
              •&nbsp;&nbsp;&nbsp;검색어의 띄어쓰기를 확인해 보세요
              <br />
              •&nbsp;&nbsp;한글을 영어로 혹은 영어를 한글로 입력했는지 확인해
              보세요
            </NoneContent>
          </NoneContentBox>
        </SearchNoneContainer>
      // </Container>
  )
}

// const Container= styled.div`
//   width: 1074px;
//   height: 100vh;
//   margin: 2px auto auto;
//   background-color: #ffffff;
// `;

const SearchNoneContainer = styled.div``;

const NoneTitleBox = styled.div`
  height: 272px;
  border-bottom: 3px solid #f0f0f0;
  padding: 100px 50px;
  box-sizing: border-box;
`;

const NoneTextTop = styled.div`
  width: 307px;
  height: 36px;
  margin: auto;
  font-weight: 700;
  font-size: 25px;
  line-height: 36px;
  color: #00cfff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NoneTextBottom = styled.div`
  width: 307px;
  height: 36px;
  margin: auto;
  font-weight: 700;
  font-size: 25px;
  line-height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NoneContentBox = styled.div`
  height: 192px;
  border-bottom: 3px solid #f0f0f0;
  display: flex;
  align-items: center;
  text-align: center;
`;

const NoneContent = styled.div`
  width: 399px;
  height: 92px;
  margin: auto;
  font-weight: 700;
  font-size: 15px;
  line-height: 150%;
`;


export default NoResultCards