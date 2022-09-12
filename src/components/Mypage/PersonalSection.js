import React from "react";
import styled, { css } from "styled-components";
import { FaPen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PersonalSection = ({ title, data, editBt = true }) => {

  const navigate=useNavigate();
  const EditButton = (e) => {
    e.preventDefault();
    navigate("/passwordChange")
  };

  return (
    <Container>
      <TitleZone>{title}</TitleZone>
      <DataZone>
        {data}
        <IconFrame onClick={(e) => EditButton(e)} editBt={editBt}>
          <FaPen size={24} />
        </IconFrame>
      </DataZone>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 76px;
  display: flex;
  flex-direction: row;
`;

const TitleZone = styled.div`
  width: 168px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
`;

const DataZone = styled.div`
  display: flex;
  flex: 1;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
`;

const IconFrame = styled.div`
  ${({ editBt }) => {
    return css`
      width: 36px;
      height: 36px;
      display: ${editBt ? "flex" : "none"};
      justify-content: center;
      align-items: center;
      margin-right: 16px;
      cursor: pointer;
    `;
  }}
`;

export default PersonalSection;
