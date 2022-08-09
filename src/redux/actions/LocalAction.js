import localAPI from "../../apis/localAPI";

function loadLocalList() {
    return async (dispatch) => {
      await localAPI
        .get("")
        .then(function (response) {
          console.log(response)
        })
        .catch(function(err){
          console.log(err);
        });
    };
  }

export const LocalAction = {
    loadLocalList,
};