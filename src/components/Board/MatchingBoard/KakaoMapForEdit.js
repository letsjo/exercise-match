import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import GetAddressName from "../../../utils/GetAddressName";

const { kakao } = window;

const KakaoMapForEdit = ({
  searchPlace,
  setMarkAddress,
  setSelectPosition,
}) => {
  const { currentLat, currentLon } = useSelector(
    (state) => state.locationReducer
  );

  let map;
  const [position, setPosition] = useState({
    lat: currentLat ? currentLat : "33.450701",
    lon: currentLon ? currentLon : "126.570667",
  });

  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(position.lat, position.lon),
      level: 3,
    };

    if (!map) {
      map = new kakao.maps.Map(container, options);
      console.log(map);
    }

    var imageSrc = "/images/marker.png", // 마커이미지의 주소입니다
      imageSize = new kakao.maps.Size(42, 42), // 마커이미지의 크기입니다
      imageOption = { offset: new kakao.maps.Point(20, 38) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.


    // // 마커를 생성합니다
    // var markerCurrent = new kakao.maps.Marker({
    //   position: new kakao.maps.LatLng(position.lat, position.lon),
    // });

    // markerCurrent.setMap(map);

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    var markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption,
    );

    var geocoder = new kakao.maps.services.Geocoder(); // 주소-좌표 변환 객체를 생성합니다
    var marker = new kakao.maps.Marker({
      image: markerImage,
    }); // 클릭한 위치를 표시할 마커입니다
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 2 }); // 클릭한 위치에 대한 주소를 표시할 인포윈도우입니다
    var ps = new kakao.maps.services.Places();

    ps.keywordSearch(searchPlace, placesSearchCB);

    // 현재 지도 중심좌표로 주소를 검색해서 지도 좌측 상단에 표시합니다
    searchAddrFromCoords(map.getCenter(), displayCenterInfo);

    // 지도를 클릭했을 때 클릭 위치 좌표에 대한 주소정보를 표시하도록 이벤트를 등록합니다
    kakao.maps.event.addListener(map, "click", function (mouseEvent) {
      searchDetailAddrFromCoords(mouseEvent.latLng, function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
          var detailAddr =
            "<div>지번 주소 : " + result[0].address.address_name + "</div>";

          var content =
            '<div class="bAddr">' +
            '<span class="title">선택된 주소정보</span>' +
            detailAddr +
            "</div>";

          // 마커를 클릭한 위치에 표시합니다
          setSelectPosition(mouseEvent.latLng);
          // setMarkAddress(detailAddr);
          marker.setPosition(mouseEvent.latLng);
          marker.setMap(map);
          GetAddressName(
            { lat: mouseEvent.latLng.Ma, lng: mouseEvent.latLng.La },
            setMarkAddress
          );
          // 인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보를 표시합니다
          infowindow.setContent(content);
          infowindow.open(map, marker);
        }
      });
    });

    // 중심 좌표나 확대 수준이 변경됐을 때 지도 중심 좌표에 대한 주소 정보를 표시하도록 이벤트를 등록합니다
    kakao.maps.event.addListener(map, "idle", function () {
      searchAddrFromCoords(map.getCenter(), displayCenterInfo);
    });

    function searchAddrFromCoords(coords, callback) {
      // 좌표로 행정동 주소 정보를 요청합니다
      geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
    }

    function searchDetailAddrFromCoords(coords, callback) {
      // 좌표로 법정동 상세 주소 정보를 요청합니다
      geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
    }

    // 지도 좌측상단에 지도 중심좌표에 대한 주소정보를 표출하는 함수입니다
    function displayCenterInfo(result, status) {
      if (status === kakao.maps.services.Status.OK) {
        var infoDiv = document.getElementById("centerAddr");

        for (var i = 0; i < result.length; i++) {
          // 행정동의 region_type 값은 'H' 이므로
          if (result[i].region_type === "H") {
            infoDiv.innerHTML = result[i].address_name;
            break;
          }
        }
      }
    }

    ////////////////////
    /// 검색으로 찾기 ///
    ////////////////////

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        map.setBounds(bounds);
      }
    }

    function displayMarker(place) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, "click", function () {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent(
          '<div style="padding:5px;font-size:12px;">' +
            place.place_name +
            "</div>"
        );
        infowindow.open(map, marker);
      });
    }
  }, [searchPlace]);

  //처음 지도 그리기
  function panTo(e) {
    e.preventDefault();
    // 이동할 위도 경도 위치를 생성합니다.
    var moveLatLon = new kakao.maps.LatLng(currentLat, currentLon);

    // 지도 중심을 부드럽게 이동시킵니다
    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
    map.panTo(moveLatLon);
  }

  return (
    <Map_wrap>
      <div
        id="myMap"
        style={{
          width: "700px",
          height: "281px",
        }}
      ></div>
      <div className="hAddr">
        <span className="title">주소정보</span>
        <span id="centerAddr"></span>
      </div>
      <CurrentButton onClick={(e) => panTo(e)}>
        <img src="/images/target.png" alt="" />
      </CurrentButton>
    </Map_wrap>
  );
};

const Map_wrap = styled.div`
  position: relative;
  width: 700px;
  height: 281px;
  z-index: 0;
  div:first-child {
    border-radius: 0 0 10px 10px;
  }
  .hAddr {
    position: absolute;
    left: 10px;
    top: 10px;
    border-radius: 2px;
    background: rgba(255, 255, 255, 0.8);
    z-index: 1;
    padding: 5px;
    #centerAddr {
      display: block;
      margin-top: 2px;
      font-weight: normal;
      .bAddr {
        padding: 5px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }
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

export default KakaoMapForEdit;
