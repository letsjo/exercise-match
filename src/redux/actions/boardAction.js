import { boardSliceAction } from "../reducers/boardReducer";
import userAPI from "../../apis/userAPI";

function setCategory(cate) {
    return async (dispatch) => {
      try {
        dispatch(boardSliceAction.setCategory(cate));
      } catch (errer) {

      }
    }
}

export const boardAction = {
    setCategory,
};
