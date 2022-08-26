import React from "react";
import { useEffect } from "react";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import NavBar from "../components/public/NavBar";
import { boardAction } from "../redux/actions/boardAction";

const PostWrite = () => {
  const dispatch = useDispatch();
  const category_ref = useRef(null);
  const person_ref = useRef(null);
  const date_ref = useRef(null);
  const photoInput_ref = useRef();
  const titleInput_ref = useRef();
  const contentInput_ref = useRef();

  const [files, setFiles] = useState("");

  const onLoadFile = (e) => {
    const file = e.target.files;
    console.log(file);
    setFiles(file);
  };

  const handleClick = () => {
    photoInput_ref.current.click();
  };

  useEffect(() => {
    preview();

    return () => preview();
  });

  const preview = () => {
    if (!files) return false;

    const imgEL = document.querySelector(".img_box");

    const reader = new FileReader();

    reader.onload = () =>
      (imgEL.style.backgroundImage = `url(${reader.result})`);

    reader.readAsDataURL(files[0]);

    console.log(reader, "reader!!");
  };

  console.log(files[0]);

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    const tmpPostData = {
      // boardType: "information",
      boardType: "matching",
      category : "gym",
      title : titleInput_ref.current.value,
      person: person_ref.current.value,
      centent : contentInput_ref.current.value,
      // endDateAt : date_ref.current.value,
    }

    const object = new FormData();
    object.append("locationImage", files[0]);
    object.append("category", category_ref.current.value);
    object.append("person", person_ref.current.value);
    object.append("date", date_ref.current.value);
    object.append("title", titleInput_ref.current.value);
    object.append("content", contentInput_ref.current.value);
    console.log(e.target);

    for (var key of object.entries()) {
      console.log(`${key}`);
    }

    try {
      dispatch(boardAction.boardPost(tmpPostData));
      console.log(object);
    } catch (e) {
      console.log(e);
    }
  };
  //   console.log(category_ref);

  return (
    <>
      <NavBar />
      <form onSubmit={onHandleSubmit}>
        <Container>
          <Text>카테고리</Text>
          <CategoryDrop
            defaultValue="default"
            id="category"
            name="category"
            ref={category_ref}
          >
            <option value="default" disabled>
              카테고리 선택
            </option>
            <option value="gym">헬스 </option>
            <option value="running">러닝&조깅 </option>
            <option value="riding">라이딩 </option>
            <option value="badminton">배드민턴 </option>
            <option value="tennis">테니스 </option>
            <option value="golf">골프 </option>
            <option value="hiking">등산 </option>
          </CategoryDrop>
          <Text>제목</Text>
          <TitleInput
            placeholder="제목을 입력해주세요"
            name="title"
            ref={titleInput_ref}
          />
          <Text>내용</Text>
          <ContentInput
            placeholder="내용을 입력해주세요"
            name="context"
            ref={contentInput_ref}
          />
          <GatherWrap>
            <GatherText>모집 인원</GatherText>
            <PersonDrop
              defaultValue="default"
              id="person"
              name="person"
              ref={person_ref}
            >
              <option value="default" disabled>
                인원
              </option>
              {Array.from({length:20}, (item, idx)=>{
                return <option key={idx} value={idx+1}>{idx+1}</option>
              })}
            </PersonDrop>
            <GatherText>모집 날짜</GatherText>
              <input type="date" ref={date_ref} name="date"/>
          </GatherWrap>
          
          <Text>장소 위치</Text>
          <LocationMap />

          <ImageButton onClick={handleClick}>
            <input
              type="file"
              id="image"
              accept="img/*"
              onChange={onLoadFile}
              style={{ display: "none" }}
              ref={photoInput_ref}
            />
            이미지 등록(0/1)
          </ImageButton>
          <LocationImage className="img_box" name="locationImage" /> 
          
          <WriteButton type="submit">작성하기</WriteButton>
        </Container>
      </form>
    </>
  );
};

const Container = styled.div`
  width: 700px;
  /* height: 1349px; */
  margin: 15px auto 50px;

`;

const Text = styled.div`
  height: 29px;
  font-weight: bold;
  color: #494949;
  font-size: 20px;
  margin-bottom: 5px;
  box-sizing: border-box;
`;

const CategoryDrop = styled.select`
  width: 180px;
  height: 50px;
  margin-bottom: 40px;
  box-sizing: border-box;
`;

const TitleInput = styled.input`
  width: 700px;
  height: 50px;
  border: 1px solid #a8a8a8;
  box-sizing: border-box;
  font-size: 20px;
  padding-left: 10px;
  margin-bottom: 40px;
`;

const ContentInput = styled.textarea`
  width: 700px;
  height: 373px;
  box-sizing: border-box;
  border: 1px solid #a8a8a8;
  font-size: 20px;
  padding: 10px;
  margin-bottom: 40px;
  resize: none;
`;

const GatherWrap = styled.div`
  width: 700px;
  height: 50px;
  box-sizing: border-box;
  display: flex;
  margin-bottom: 40px;
`;

const GatherText = styled.div`
  height: 50px;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  justify-content: center;
  text-align: center;
  color: #494949;
  font-weight: bold;
  font-size: 20px;
  margin-right: 10px;
`;

const PersonDrop = styled.select`
  width: 110px;
  height: 50px;
  margin-right: 70px;
`;

const LocationMap = styled.div`
  width: 700px;
  height:281px;
  margin-bottom: 70px;
  box-sizing: border-box;
  border:1px solid #d9d9d9;
`;

const LocationImage = styled.div`
  width: 700px;
  height:317px;
  margin-bottom: 70px;           // 매칭, 정보공유에 따라 수정 필요
  box-sizing: border-box;
  background-color: #d9d9d9;
  /* background-size: contain;
  background-repeat: no-repeat; */
  background-size: cover;
`;

const ImageButton = styled.button`
  width: 700px;
  height: 50px;
  box-sizing: border-box;
  background-color: #dedede;
  font-size: 20px;
  border: none;
  margin-bottom: 20px;
`;

const WriteButton = styled.button`
  width: 700px;
  height: 89px;
  box-sizing: border-box;
  background-color: #494949;
  color: white;
  font-size: 20px;
  font-weight: bold;
  border: none;
  margin-top: 70px;
`;

export default PostWrite;
