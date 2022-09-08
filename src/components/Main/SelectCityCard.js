import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { AiOutlineCheck } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { locationSliceAction } from "../../redux/reducers/locationReducer";

const SelectCityCard = ({ localData }) => {
  const selectedLocationRef = useRef(null);
  const dispatch = useDispatch();

  const { selectedCity, selectedGu, currentLat, currentLon } = useSelector(
    (state) => state.locationReducer
  );

  const [openCitySection, setOpenCitySection] = useState(
    selectedCity == localData?.city ? true : false
  );

  const LoadGu = () => {
    setOpenCitySection(!openCitySection);
  };

  const SelectGu = (e, guName = "") => {
    e.preventDefault();
    dispatch(
      locationSliceAction.selectLocation({
        selectedCity: localData?.city=="전국"?"all":localData?.city,
        selectedGu: guName,
      })
    );
  };

  useEffect(() => {
    selectedLocationRef.current?.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
  }, []);


  return (
    <Container>
      <CitySection openCitySection={openCitySection} onClick={LoadGu}>
        <NameZone>{localData?.city}</NameZone>
        <CheckZone>
          {openCitySection ? (
            <IoIosArrowUp size={26} color="#000000" />
          ) : (
            <IoIosArrowDown size={26} color="#A8A8A8" />
          )}
        </CheckZone>
      </CitySection>
      {openCitySection && (
        <>
          <GuSection onClick={(e) => SelectGu(e)}>
            <GuNameZone>{localData?.city} 전체</GuNameZone>
            {selectedCity == "all" && selectedGu == "" && (
              <CheckZone ref={selectedLocationRef}>
                <AiOutlineCheck size={26} color={"#00CFFF"}/>
              </CheckZone>
            )}
            {selectedCity == localData?.city && selectedGu == "" && (
              <CheckZone ref={selectedLocationRef}>
                <AiOutlineCheck size={26} color={"#00CFFF"}/>
              </CheckZone>
            )}
          </GuSection>
          {localData?.gu &&
            localData.gu.map((guName, index) => (
              <GuSection onClick={(e) => SelectGu(e, guName)} key={index}>
                <GuNameZone>{guName}</GuNameZone>
                {selectedCity == localData?.city && selectedGu == guName && (
                  <CheckZone ref={selectedLocationRef}>
                    <AiOutlineCheck size={26} color={"#00CFFF"}/>
                  </CheckZone>
                )}
              </GuSection>
            ))}
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  user-select: none;
`;

const CitySection = styled.div`
  ${({ openCitySection }) => {
    return css`
      background-color: ${openCitySection ? "#f0f0f0" : "white"};
    `;
  }}

  cursor: pointer;
  border-top: 1px solid #a8a8a8;
  display: flex;
  flex-direction: row;
`;

const GuSection = styled.div`
  cursor: pointer;
  background-color: white;
  border-top: 1px solid #a8a8a8;
  display: flex;
  flex-direction: row;
  transition: all 0.2s ease;
  &:hover{
    background-color: #DCF6FC;
  }
`;

const GuNameZone = styled.div`
  margin: 17px 52px;
  font-weight: 700;
  font-size: 25px;
  line-height: 36px;
`;

const NameZone = styled.div`
  margin: 17px auto 17px 24px;
  font-weight: 700;
  font-size: 25px;
  line-height: 36px;
`;

const CheckZone = styled.div`
  width: 36px;
  height: 36px;
  margin: 17px 29px 17px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default SelectCityCard;
