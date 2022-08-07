import mapAPI from "../apis/mapAPI";

export function CurrentLocation(setNowPosition) {
  var options = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000,
  };

  function error(err) {
    console.warn("ERROR(" + err.code + "): " + err.message);
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      // console.log(position);
      // setNowPosition({
      //   lat: position.coords.latitude,
      //   lng: position.coords.longitude,
      // });

      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      mapAPI
      .get(
        `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lon}&y=${lat}&input_coord=WGS84`
      )
      .then((res) => {
        setNowPosition(res.data.documents);
        // dispatch(
        //   changeRegion(res.data.documents[0].address.region_1depth_name)
        // );
        // dispatch(changeCity(res.data.documents[0].address.region_2depth_name));
      })
      .catch((e) => console.log(e));
    },
    error,
    options
  );
}
