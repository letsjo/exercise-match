import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import GetAddressName from "../../../utils/GetAddressName";

const { kakao } = window;

const KakaoMapForDetail = ({ address, selectPosition }) => {
  const { currentLat, currentLon } = useSelector(
    (state) => state.locationReducer
  );

  const [addressName,setAddressName] = useState("");
  
  let kakaoMap;

  useEffect(()=>{
    getName();
  },[address])

  const getName = async () => {
    await GetAddressName(address,setAddressName);
  }

  console.log(addressName);

  useEffect(() => {
    const container = document.getElementById("map");
    //,"Ma": 35.826131559945495
    const options = {
      center: new kakao.maps.LatLng(selectPosition.Ma, selectPosition.La),
      level: 3,
    };

    if (!kakaoMap) {
      kakaoMap = new kakao.maps.Map(container, options);
    }

    // // 마커를 생성합니다
    // var markerCurrent = new kakao.maps.Marker({
    //   position: new kakao.maps.LatLng(currentLat, currentLon),
    // });
    // markerCurrent.setMap(kakaoMap);

    // 마커가 표시될 위치입니다
    var markerPosition = new kakao.maps.LatLng(
      selectPosition.Ma,
      selectPosition.La
    );

    var imageSrc = "/images/marker.png", // 마커이미지의 주소입니다
      imageSize = new kakao.maps.Size(42, 42), // 마커이미지의 크기입니다
      imageOption = { offset: new kakao.maps.Point(20, 38) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    var markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    );

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage,
    });
    marker.setMap(kakaoMap);

    var iwContent = `<div style="padding:2px;">${addressName}<a href="https://map.kakao.com/link/map/${selectPosition.Ma},${selectPosition.La}" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/선택된 위치,${selectPosition.Ma},${selectPosition.La}" style="color:blue" target="_blank">길찾기</a></div>`,
      iwPosition = new kakao.maps.LatLng(selectPosition.Ma, selectPosition.La); //인포윈도우 표시 위치입니다

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
      position: iwPosition,
      content: iwContent,
    });

    // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
    infowindow.open(kakaoMap, marker);
  }, [selectPosition]);

  //처음 지도 그리기
  function panTo(e) {
    e.preventDefault();
    // 이동할 위도 경도 위치를 생성합니다.
    var moveLatLon = new kakao.maps.LatLng(currentLat, currentLon);
    // 지도 중심을 부드럽게 이동시킵니다
    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
    kakaoMap.panTo(moveLatLon);
  }

  return (
    <Container>
      <Map_wrap id="map" style={{ width: "100%", height: "281px" }}></Map_wrap>
      <CurrentButton onClick={(e) => panTo(e)}>
        <img src="/images/target.png" alt="" />
      </CurrentButton>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const Map_wrap = styled.div`
  border-radius: 10px 0 0 10px;
  z-index: 0;
`;

const CurrentButton = styled.div`
  position: absolute;
  bottom: 5px;
  right: 5px;
  width: 32px;
  height: 32px;
  z-index: 1;
  cursor: pointer;
  background-color: #f0f0f0;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 70%;
  }
`;

export default KakaoMapForDetail;
