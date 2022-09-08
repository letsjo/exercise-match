import React, { useState } from "react";
import styled from "styled-components";
import BulletinCard from "../BulletinBoard/BulletinCard";
import Pagination from "../BoardPublic/Pagination";

const MyBulletin = () => {
  const [page, setPage] = useState(1);

  return (
    <>
      <BulletinCard />
      <BulletinCard />
      <BulletinCard />
     
      <PageFrame>
        <Frame>
          <Pagination total={5} limit={2} page={page} setPage={setPage} />
        </Frame>
      </PageFrame>
    </>
  );
};

const PageFrame = styled.div`
  width: 1000px;
  height: 110px;
  box-sizing: border-box;
  display: flex;
`;

const Frame = styled.div`
  margin: auto;
`;

export default MyBulletin;
