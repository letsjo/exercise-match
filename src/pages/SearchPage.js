import React from "react";
import NavBar from "../components/public/NavBar";
import styled from "styled-components";
import NoResultCards from "../components/Board/SearchBoard/NoResultCards";
import ResultCards from "../components/Board/SearchBoard/ResultCards";

const SearchPage = () => {
  return (
    <Container>
      <NavBar />
      {/* <NoResultCards/> */}
      <ResultCards/>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f0f0f0;
`;


export default SearchPage;
