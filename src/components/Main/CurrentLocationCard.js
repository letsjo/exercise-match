import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { locaionAction } from "../../redux/actions/locationAction";
import { locationSliceAction } from "../../redux/reducers/locationReducer";
import { modalSliceAction } from "../../redux/reducers/modalReducer";
import CurrentLocation from "../../utils/CurrentLocation";

const CurrentLocationCard = () => {
  const dispatch = useDispatch();

  const { selectedCity, selectedGu } = useSelector(
    (state) => state.locationReducer
  );

  useEffect(() => {
    dispatch(locaionAction.getLocation());
  }, []);

  const OpenLocationModal = () => {
    dispatch(modalSliceAction.modalLocalSelectOpen());
  };

  return (
    <Container onClick={OpenLocationModal}>
      <LocationFrame>{selectedCity + " " + selectedGu}</LocationFrame>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 70px;
  cursor: pointer;
`;

const LocationFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: #dedede;
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.02);
  border-radius: 10px;

  width: 550px;
  height: 60px;
`;

export default CurrentLocationCard;
