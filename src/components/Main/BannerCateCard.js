import React from "react";
import styled from "styled-components";

const BannerCateCard = () => {
  return (
      <BoardCard>
          <ImageBox>
            <img src="https://placehold.jp/156x136.png"/>
          </ImageBox>
      </BoardCard>
  );
};

const BoardCard = styled.div`
  display: flex;
  flex-direction: row;
`;

const ImageBox = styled.div`

`

export default BannerCateCard;
