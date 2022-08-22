import mapAPI from "../apis/mapAPI";

export function GetAddressName (position,setAddressName) {
    const lat = position.lat;
    const lon = position.lng;

    mapAPI
      .get(
        `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lon}&y=${lat}&input_coord=WGS84`
      )
      .then((res) => {
        console.log(res.data.documents);
        setAddressName(res.data.documents);
        // dispatch(
        //   changeRegion(res.data.documents[0].address.region_1depth_name)
        // );
        // dispatch(changeCity(res.data.documents[0].address.region_2depth_name));
      })
      .catch((e) => console.log(e));
};

export default GetAddressName;
