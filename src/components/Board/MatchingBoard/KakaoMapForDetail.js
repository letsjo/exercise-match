import React, { useEffect } from "react";
import styled from "styled-components";

const { kakao } = window;

const KakaoMapForDetail = ({ address, selectPosition }) => {
  //처음 지도 그리기
  useEffect(() => {
    const container = document.getElementById("map");
    //,"Ma": 35.826131559945495
    const options = {
      center: new kakao.maps.LatLng(selectPosition.Ma, selectPosition.La),
      level: 3,
    };
    const kakaoMap = new kakao.maps.Map(container, options);
    // 마커가 표시될 위치입니다
    var markerPosition = new kakao.maps.LatLng(
      selectPosition.Ma,
      selectPosition.La
    );

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(kakaoMap);

    var iwContent =
        `<div style="padding:2px;">${address}<a href="https://map.kakao.com/link/map/${selectPosition.Ma},${selectPosition.La}" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/선택된 위치,${selectPosition.Ma},${selectPosition.La}" style="color:blue" target="_blank">길찾기</a></div>`,
      iwPosition = new kakao.maps.LatLng(selectPosition.Ma, selectPosition.La); //인포윈도우 표시 위치입니다

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
      position: iwPosition,
      content: iwContent,
    });

    // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
    infowindow.open(kakaoMap, marker);
  }, [selectPosition]);

  return <Map_wrap id="map" style={{ width: "100%", height: "281px" }}></Map_wrap>;
};

const Map_wrap = styled.div`
  border-radius: 10px 0 0 10px;
  z-index: 0;
`

export default KakaoMapForDetail;