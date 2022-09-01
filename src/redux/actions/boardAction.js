import { boardSliceAction } from "../reducers/boardReducer";
import { createAsyncThunk } from "@reduxjs/toolkit";
import userAPI from "../../apis/userAPI";

function setBoardType(type, cate) {
  return async (dispatch) => {
    dispatch(boardSliceAction.setBoardType({type,cate}))
    // await userAPI
    //   .get(`/api/boards/${type}?cate=${cate}&page=1&amount=12`)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  };
}

const postBoard = (data) => {
  return async (dispatch) => {
    await userAPI
      .post("/api/board/create", data,{headers:{'Content-Type': 'multipart/form-data'}})
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const postLike = (boardId) => {
  return async (dispatch) => {
    await userAPI
      .post(`/board/${boardId}/likes`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const loadBoard = (type, cate,selectedCity, selectedGu, page) => {
  return async (dispatch) => {
    let loadURL;
    if (type === "matching") 
      loadURL = `/api/boards/${type}?cate=${cate}&page=${page}&amount=12&city=${selectedCity?selectedCity:"all"}&gu=${selectedGu?selectedGu:"all"}`;
    else
      loadURL = `/api/boards/${type}?cate=${cate}&page=${page}&amount=12`;
    
    await userAPI
      .get(loadURL)
      .then((response) => {
        dispatch(boardSliceAction.loadBoardData(response.data));
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const loadComments = (boardId) => {
  return async (dispatch) => {

    await userAPI
      .get(`/api/board/${boardId}/comments`)
      .then((response) => {
        dispatch(boardSliceAction.loadCommentsData(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const postComment = createAsyncThunk(
  "board/postComment",
  async ( {boardId, comment}, { rejectWithValue }) => {
    try {
      const res = await userAPI.post(
        `/api/board/${boardId}/comments`, comment
      );
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data.error);
    }
  }
);

const delBoard = createAsyncThunk(
  "board/delBoard",
  async ({ boardId }, { rejectWithValue }) => {
    try {
      const res = await userAPI.delete(
        `/api/board/${boardId}`
      );
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data.error);
    }
  }
);

const delComment = createAsyncThunk(
  "board/delComment",
  async ({ boardId, commentId }, { rejectWithValue }) => {
    try {
      const res = await userAPI.delete(
        `/api/board/${boardId}/comments/${commentId}`
      );
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data.error);
    }
  }
);

const applyBoard = createAsyncThunk(
  "board/apply",
  async ({ boardId }, { rejectWithValue }) => {
    try {
      const res = await userAPI.post(
        `/board/${boardId}/matchingentry`
      );
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data.error);
    }
  }
);

export const boardAction = {
  setBoardType,
  postBoard,
  postLike,
  loadBoard,
  loadComments,
  delComment,
  delBoard,
  applyBoard,
  postComment,
};
