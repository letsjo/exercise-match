import mapAPI from "../../apis/mapAPI";
import CurrentLocation from "../../utils/CurrentLocation";
import { locationSliceAction } from "../reducers/locationReducer";

function loadLocalList() {}

const getLocation = () => {
  return async (dispatch) => {
    try {
      const { lat, lon } = await CurrentLocation();
      dispatch(locationSliceAction.currentLocation({currentLat:lat,currentLon:lon}));
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
    }
  };
};

export const locaionAction = {
  loadLocalList,
  getLocation,
};
