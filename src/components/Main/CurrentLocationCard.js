import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { modalSliceAction } from "../../redux/reducers/modalReducer";
import CurrentLocation from "../../utils/CurrentLocation";

const CurrentLocationCard = () => {
  const [nowPosition, setNowPosition] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    CurrentLocation(setNowPosition);
  }, []);
  console.log(nowPosition);

  useEffect(() => {}, []);

  const OpenLocationModal = () => {
    dispatch(modalSliceAction.modalLocalSelectOpen());
  };

  return (
    <Container onClick={OpenLocationModal}>
      <LocationFrame>
        {nowPosition[0]?.address.region_1depth_name +
          " " +
          nowPosition[0]?.address.region_2depth_name}
      </LocationFrame>
      {/* <LocationFrame>{nowPosition[0]?.address.region_1depth_name }</LocationFrame> */}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 50px;
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
