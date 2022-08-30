import mapAPI from "../../apis/mapAPI";
import userAPI from "../../apis/userAPI";
import CurrentLocation from "../../utils/CurrentLocation";
import { locationSliceAction } from "../reducers/locationReducer";
import { modalSliceAction } from "../reducers/modalReducer";
import Swal from "sweetalert2";

const loadLocalList = () => {
  return async (dispatch) => {
    await userAPI
      .get("/allow_info/dataRequest")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getLocation = () => {
  return async (dispatch) => {
    try {
      const { lat, lon } = await CurrentLocation();
      dispatch(
        locationSliceAction.currentLocation({
          currentLat: lat,
          currentLon: lon,
        })
      );
      await mapAPI
        .get(
          `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lon}&y=${lat}&input_coord=WGS84`
        )
        .then((res) => {
          dispatch(
            locationSliceAction.selectLocation({
              selectedCity: res.data.documents[0].address.region_1depth_name,
              selectedGu: res.data.documents[0].address.region_2depth_name,
            })
          );
        })
        .catch((e) => console.log(e));
    } catch (e) {
      console.log(e);
      Swal.fire({
        icon: "warning",
        title: "위치정보를 허용해 주세요!",
        text: "서비스 이용에 제한이 있을 수 있습니다.",
      });
      dispatch(modalSliceAction.modalLocalSelectOpen());
    }
  };
};

export const locationAction = {
  loadLocalList,
  getLocation,
};
