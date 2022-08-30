import { boardSliceAction } from "../reducers/boardReducer";
import { createAsyncThunk } from "@reduxjs/toolkit";
import userAPI from "../../apis/userAPI";

function setBoardType(type, cate) {
  return async (dispatch) => {
    await userAPI
      .get(`/api/boards/${type}?cate=${cate}&page=1&amount=12`)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };
}

const postBoard = (tmpPostData) => {
  return async (dispatch) => {
    await userAPI
      .post("/api/board/create", tmpPostData)
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

const loadBoard = (type, cate) => {
  return async (dispatch) => {
    await userAPI
      .get(`/api/boards/${type}/${cate}`)
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
};
