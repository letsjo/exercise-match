import React from "react";
import NavBar from "../components/public/NavBar";
import styled from "styled-components";
import NoResultCards from "../components/Board/SearchBoard/NoResultCards";
import ResultCards from "../components/Board/SearchBoard/ResultCards";
import BulletinCard from "../components/Board/BulletinBoard/BulletinCard";
import SearchOption from "../components/Board/BoardPublic/SearchOption";
import { boardAction } from "../redux/actions/boardAction";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SearchPage = () => {
  const dispatch = useDispatch();

  const query = useLocation().search;
  const keyword = new URLSearchParams(query).get("keyword");
  console.log(keyword);
  const [searchList, setSearchList] = useState([]);
  // let boardData = [];

  useEffect(() => {
    loadSearch();
  }, [keyword]);

  const loadSearch = async () => {
    try {
      const res = await dispatch(boardAction.searchBoard({ keyword })).unwrap();
      const boardData = res.data;
      // console.log(res);
      // console.log(boardData);
      setSearchList(boardData);
    } catch (e) {
      console.log(e);
    }
  };

  console.log(searchList);

  const [search, setSearch]= useState();

    useEffect(()=>{
      console.log(search);
    },[search])



  return (
    <Container>
      <NavBar />
      <InlineContainer>
        {searchList == "" ? (
          <NoResultCards keyword={keyword} />
        ) : (
          <BulletinContainer>
            <CategorySelectBox>
              <SearchOption setSearch={setSearch} search={search} />
            </CategorySelectBox>
            <BulletinCard
              title="제목"
              content="내용"
              comment="3"
              like="3"
              createdAt="2022-08-29"
              image=""
              boardId=""
            />
          </BulletinContainer>
        )}
        {/* <NoResultCards/> */}
        {/* <ResultCards/> */}
      </InlineContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f0f0f0;
`;

const InlineContainer = styled.div`
  width: 1074px;
  height: 100vh;
  margin: 2px auto auto;
  background-color: #ffffff;
`;

const BulletinContainer = styled.div`
  width: 1074px;
  height: 100vh;
  margin: 2px auto auto;
  background-color: #ffffff;
  padding-top: 10px;
  padding-left: 70px;
  box-sizing: border-box;
`;

const CategorySelectBox = styled.div`
  height: 51px;
  display: flex;
  align-items: center;
`;

export default SearchPage;
