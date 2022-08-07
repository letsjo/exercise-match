import mapAPI from "../apis/mapAPI";

export function GetAddressName (position) {
    const lat = position.lat;
    const lon = position.lng;

    console.log(lat,lon)
    //kakao REST API에 get 요청을 보낸다.
    //파라미터 x,y에 lon,lat을 넣어주고 API_KEY를 Authorization헤더에 넣어준다.
    mapAPI
      .get(
        `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lon}&y=${lat}&input_coord=WGS84`
      )
      .then((res) => {
        console.log(res.data.documents);
        // dispatch(
        //   changeRegion(res.data.documents[0].address.region_1depth_name)
        // );
        // dispatch(changeCity(res.data.documents[0].address.region_2depth_name));
      })
      .catch((e) => console.log(e));
};

export default GetAddressName;
