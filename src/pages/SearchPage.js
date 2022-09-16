import React from "react";
import NavBar from "../components/public/NavBar";
import styled from "styled-components";
import NoResultCards from "../components/Board/SearchBoard/NoResultCards";
import ResultCards from "../components/Board/SearchBoard/ResultCards";
import BulletinCard from "../components/Board/BulletinBoard/BulletinCard";
import SearchOption from "../components/Board/BoardPublic/SearchOption";
import CurrentLocationCard from "../components/Main/CurrentLocationCard";
import TranslateCates from "../utils/TranslateCates";
import { boardAction } from "../redux/actions/boardAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MatchingCard from "../components/Board/MatchingBoard/MatchingCard";

const SearchPage = () => {
  const dispatch = useDispatch();

  const { selectedCity, selectedGu } = useSelector(
    (state) => state.locationReducer
  );

  const querys = useLocation().search;
  const query = new URLSearchParams(querys);
  // const query = useLocation().search;
  const keyword = query.get("keyword");
  const city = query.get("city");
  const gu = query.get("gu");
  const sort = query.get("sort");
  const boardType = query.get("boardType");
  console.log(keyword, city, gu);

  const [search, setSearch] = useState(sort ? sort : "title_Content");
  const [type, setType] = useState(boardType ? boardType : "matching");

  useEffect(() => {
    query.set("city", selectedCity);
    query.set("gu", selectedGu);
    window.history.pushState(
      null,
      null,
      `/search?keyword=${keyword ? keyword : ""}&city=${
        selectedCity ? selectedCity : "all"
      }&gu=${selectedGu ? selectedGu : "all"}&sort=${
        search ? search : "title_Content"
      }&boardType=${type ? type : "matching"}&page=1&amount=10`
    );
    loadSearch();
  }, [selectedCity, selectedGu, keyword, search, type]);

  const [searchList, setSearchList] = useState([]);

  const matchingClick = () => {
    setType("matching");
  };

  const infoClick = () => {
    setType("information");
  };

  console.log("타입확인!!!", type);

  // useEffect(() => {
  //   console.log(search);

  // }, [search]);

  const loadSearch = async () => {
    try {
      const res = await dispatch(
        boardAction.searchBoard({ keyword, search, selectedCity, selectedGu })
      ).unwrap();
      const boardData = res.data;
      // console.log(res);
      // console.log(boardData);
      setSearchList(boardData);
    } catch (e) {
      console.log(e);
    }
  };

  console.log(searchList);

  return (
    <Container>
      <NavBar />
      <InlineContainer>
        {searchList == "" ? (
          <NoResultCards keyword={keyword} />
        ) : (
          <>
            <BulletinContainer>
              <CurrentLocationCard isDetail={true} />
              <SelectLine>
                <CategorySelectBox>
                  <SearchOption setSearch={setSearch} search={search} />
                </CategorySelectBox>
                <SelectCategory>
                  <SelectMatching onClick={matchingClick}>매칭</SelectMatching>
                  <Line />
                  <SelectInformation onClick={infoClick}>
                    정보공유
                  </SelectInformation>
                </SelectCategory>
              </SelectLine>
              {type === "matching" &&
                searchList &&
                searchList.map((list, idx) => (
                  <MatchingCard
                    key={idx}
                    category={TranslateCates(list.category)}
                    title={list.title}
                    context={list.content}
                    comment={list.commentCount}
                    like={list.likeCount}
                    createdDate={list.createdAt}
                    image={list.boardimage}
                    boardId={list.id}
                    endDate={list.endDate}
                    currentEntry={list.currentEntry}
                    maxEntry={list.maxEntry}
                    writerNickname={list.nickname}
                    writerProfile={list.profile}
                    locationCity={list.city}
                    locationGu={list.gu}
                  />
                ))}
              {type === "information" &&
                searchList &&
                searchList.map((list, idx) => (
                  <BulletinCard
                    key={idx}
                    title={list.title}
                    content={list.content}
                    comment={list.commentCount}
                    like={list.likeCount}
                    createdAt={list.createdAt}
                    image={list.boardimage}
                    boardId={list.id}
                  />
                ))}
            </BulletinContainer>
          </>
        )}

        {/* <NoResultCards/> */}
        {/* <ResultCards/> */}
      </InlineContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f0f0f0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
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

const SelectLine = styled.div`
  display: flex;
  align-items: center;
`;

const SelectCategory = styled.div`
  width: 110px;
  margin-left: 41px;
  box-sizing: border-box;
  height: 31px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SelectMatching = styled.div`
  &:hover {
    font-weight: bold;
  }
`;

const SelectInformation = styled.div`
  &:hover {
    font-weight: bold;
  }
`;

const Line = styled.div`
  border-left: 1px solid gray;
  height: 18px;
`;

const CategorySelectBox = styled.div`
  height: 51px;
  display: flex;
  align-items: center;
`;

export default SearchPage;
