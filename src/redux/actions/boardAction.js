import { boardSliceAction } from "../reducers/boardReducer";
import userAPI from "../../apis/userAPI";

function setBoardType(type,cate) {
    return async (dispatch) => {
      try {
        // await userAPI.get("").then((response)=>{

        // }).catch((error) => {

        // });
        
        dispatch(boardSliceAction.setBoardType({type,cate}));
      } catch (errer) {

      }
    }
}

export const boardAction = {
    setBoardType,
};
