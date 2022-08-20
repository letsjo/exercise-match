import React, { useState } from "react";
import styled from "styled-components";
import Pagination from "../Board/BoardPublic/Pagination";
import MypageReviewCard from "./MypageReviewCard";

const UserReviewList = () => {
  const [page, setPage] = useState(1);
  return (
    <Container>
      <MypageReviewCard/>
      <MypageReviewCard/>
      <MypageReviewCard/>
      <MypageReviewCard/>
      <Pagination total={10} limit={2} page={page} setPage={setPage} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default UserReviewList;
