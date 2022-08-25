import React from 'react';
import styled from 'styled-components';
import { useRef } from 'react';

const SearchOption = () => {

    const SearchOption_ref= useRef();

  return (
    <Container
        defaultValue="default"
            id="searchOption"
            name="searchOption"
            ref={SearchOption_ref}
          >
            <option value="제목+내용">제목+내용</option>
            <option value="제목">제목</option>
            <option value="내용">내용</option>

    </Container>
  )
}

const Container= styled.select`
    width:114px;
    height: 31px;
    border: 1px solid #a8a8a8;
    outline: none;
    padding-left: 10px;
    box-sizing: border-box;
    font-size:15px;
`;

export default SearchOption;