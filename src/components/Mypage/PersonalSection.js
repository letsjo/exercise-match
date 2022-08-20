import React from "react";
import styled from "styled-components";

const PersonalSection = ({ type, title, data }) => {
  return (
    <Container>
      <TitleZone>{title}</TitleZone>
      <DataZone>
        {type == "gender" ? (
          <Gender>
            <RadioSection>
              {data == "남성" ? (
                <input type="radio" id="men" name="radio-group" defaultChecked />
              ) : (
                <input type="radio" id="men" name="radio-group" />
              )}
              <label htmlFor="men">남성</label>
            </RadioSection>
            <RadioSection>
              {data == "여성" ? (
                <input type="radio" id="women" name="radio-group" defaultChecked />
              ) : (
                <input type="radio" id="women" name="radio-group" />
              )}
              <label htmlFor="women">여성</label>
            </RadioSection>
          </Gender>
        ) : (
          data
        )}
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
  padding-left: 10px;
`;

const Gender = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
  width: 234px;
  height: 50px;
  input:checked,
  input:not(:checked) {
    position: absolute;
    left: -9999px;
  }

  input:checked + label,
  input:not(:checked) + label {
    font-size: 20px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-left: 45px;
    cursor: pointer;
    line-height: 20px;
    color: #666;
  }

  input:checked + label:before,
  input:not(:checked) + label:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 30px;
    height: 30px;
    border: 1px solid #ddd;
    border-radius: 100%;
    background: #a8a8a8;
  }

  input:checked + label:after,
  input:not(:checked) + label:after {
    content: "";
    width: 14px;
    height: 14px;
    background: #ddd;
    position: absolute;
    top: 9px;
    left: 9px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  input:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  input:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;

const RadioSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export default PersonalSection;
