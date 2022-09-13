import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { locationAction } from "../../redux/actions/locationAction";
import { locationSliceAction } from "../../redux/reducers/locationReducer";
import { modalSliceAction } from "../../redux/reducers/modalReducer";
import CurrentLocation from "../../utils/CurrentLocation";

const CurrentLocationCard = ({ isDetail = false }) => {
  const dispatch = useDispatch();

  const { selectedCity, selectedGu } = useSelector(
    (state) => state.locationReducer
  );

  const OpenLocationModal = () => {
    dispatch(modalSliceAction.modalLocalSelectOpen());
  };

  return (
    <Container isDetail={isDetail}>
      <LocationFrame isDetail={isDetail} onClick={OpenLocationModal}>
        {(selectedCity === "all" ? "전국" : selectedCity) + " " + (selectedGu === "all"? "" : selectedGu )}
      </LocationFrame>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  ${({ isDetail }) => {
    return css`
      width: ${isDetail ? "1000px" : "100%"};
      justify-content: ${isDetail ? "flex-start" : "center"};
      margin-bottom: ${isDetail ? "0px" : "70px"};
      margin-top: ${isDetail ? "20px" : "0px"};
    `;
  }}
`;

const LocationFrame = styled.div`
  ${({ isDetail }) => {
    return css`
      width: ${isDetail ? "265px" : "550px"};
      height: ${isDetail ? "38px" : "60px"};
      background: ${isDetail ? "#F0F0F0" : "#dedede"};
    `;
  }}
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.02);
  border-radius: 10px;
`;

export default CurrentLocationCard;
