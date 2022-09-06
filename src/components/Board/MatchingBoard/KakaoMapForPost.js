import React, { useState } from "react";
import styled from "styled-components";
import KakaoMapForEdit from "./KakaoMapForEdit";

const KakaoMapForPost = ( { Place, setPlace, setMarkAddress, setSelectPosition } ) => {
  const [InputText, setInputText] = useState("");

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(InputText);
    setInputText("");
  };

  return (
    <KakaoMapWrap>
      <KakaoMapSearchWarp>
        <KakaoMapSearchFrom className="inputForm">
          <KakaoMapSearchInputWarp>
            <KakaoMapSearchInput
              placeholder="검색어를 입력하세요"
              onChange={onChange}
              value={InputText}
            />
          </KakaoMapSearchInputWarp>
            <KakaoMapSearchButton onClick={(e)=>handleSubmit(e)}>위치 찾기</KakaoMapSearchButton>
            {/* <button
          onClick={(e) => {
            console.log(selectPosition);
          }}
        >
          선택된위치좌표
        </button> */}
        </KakaoMapSearchFrom>
      </KakaoMapSearchWarp>
      <KakaoMapForEdit
        searchPlace={Place}
        setMarkAddress={setMarkAddress}
        setSelectPosition={setSelectPosition}
      />
    </KakaoMapWrap>
  );
};

const KakaoMapWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #0c8ce9;
  border-radius: 10px;
`;
const KakaoMapSearchWarp = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const KakaoMapSearchFrom = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

const KakaoMapSearchInputWarp = styled.div`
  width: 70%;
  height: 100%;
  border: 3px solid transparent;
  border-radius: 10px 0 0 0;
  &:focus-within {
    border: 3px solid #0c8ce9;
  }
`;

const KakaoMapSearchInput = styled.input`
  font-size: 20px;
  outline: none;
  background-color: white;
  border: 1rem solid white;
  width: 95%;
  border-radius: 10px 0 0 0;
`;

const KakaoMapSearchButton = styled.button`
  outline: none;
  border: 1.35rem solid #A2E9FA;
  border-radius: 0 10px 0 0;
  background: #A2E9FA;
  color: black;
  width: 30%;
  height: 100%;
  cursor: pointer;
`;

export default KakaoMapForPost;
