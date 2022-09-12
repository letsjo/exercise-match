import React, { useState } from "react";
import styled from "styled-components";
import Pagination from "../Board/BoardPublic/Pagination";
import MypageReviewCard from "./MypageReviewCard";

const UserReviewList = () => {
  const [page, setPage] = useState(1);
  return (
    <Container>
      <MypageReviewCard
        nickname="nickname"
        date="2022.08.13"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
          vestibulum sed at nullam odio. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vitae vestibulum sed at nullam odio.Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Vitae vestibulum sed at nullam
          odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
          vestibulum sed at nullam odio."
        score="4"
        image="https://image.fmkorea.com/files/attach/new2/20220312/14339012/3726389874/4424593526/b0074c5ac8c5a4fad7809f2004a41665.jpeg"
        category="테니스 같이 칠 사람?"
      />
      <MypageReviewCard
        nickname="nick"
        date="2022.07.13"
        content=""
        score="2"
        image=""
        category="테니스?"
      />
      <MypageReviewCard
        nickname="name"
        date="2022.05.13"
        content=""
        score="3"
        image=""
        category="같이 칠 사람?"
      />
      <MypageReviewCard
        nickname="cknam"
        date="2022.04.13"
        content=""
        score="1"
        image=""
        category="칠 사람?"
      />
      <Pagination total={10} amount={2} page={page} setPage={setPage} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default UserReviewList;
