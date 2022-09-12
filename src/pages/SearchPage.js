import React from "react";
import NavBar from "../components/public/NavBar";
import styled from "styled-components";
import NoResultCards from "../components/Board/SearchBoard/NoResultCards";
import ResultCards from "../components/Board/SearchBoard/ResultCards";
import BulletinCard from "../components/Board/BulletinBoard/BulletinCard";
import { boardAction } from "../redux/actions/boardAction";
import { useDispatch} from "react-redux";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SearchPage = () => {

  const dispatch=useDispatch();

    const query=useLocation().search;
    const keyword= new URLSearchParams(query).get("keyword");
    console.log(keyword);
    const [searchList, setSearchList] = useState([]);

    useEffect(()=>{
      loadSearch();
    },[keyword]);

    const loadSearch = async()=>{
      try {
        const res = await dispatch(
          boardAction.searchBoard({ keyword })
        ).unwrap();
        console.log(res);
        // setSearchList()
      } catch (e) {
        console.log(e);
      }
    }

  return (
    <Container>
      <NavBar />
      
      <NoResultCards/>
      {/* <ResultCards/> */}
      {/* <BulletinCard/> */}
    </Container>
  );
};

const Container = styled.div`
  background-color: #f0f0f0;
`;


export default SearchPage;
