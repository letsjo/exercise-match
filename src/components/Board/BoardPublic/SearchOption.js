import React from 'react';
import styled from 'styled-components';
import { useRef } from 'react';

const SearchOption = ({setSearch, search}) => {

    const SearchOption_ref= useRef();
    // const onChangeSelect =(e)=>{
    //   setSearch(e.target.value);
    // };

  return (
    <Container
        defaultValue="default"
            id="searchOption"
            name="searchOption"
            ref={SearchOption_ref}
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          >
            <option value="title_Content">제목+내용</option>
            <option value="title">제목</option>
            <option value="content">내용</option>

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
    /* color: aliceblue; */
    /* background-color: aliceblue; */
`;

export default SearchOption;