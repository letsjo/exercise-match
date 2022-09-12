import { boardSliceAction } from "../reducers/boardReducer";
import { createAsyncThunk } from "@reduxjs/toolkit";
import userAPI from "../../apis/userAPI";

function setBoardType(type, cate) {
  return async (dispatch) => {
    dispatch(boardSliceAction.setBoardType({ type, cate }));
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
      .post("/api/board/create", data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const postLike = createAsyncThunk(
  "board/postLike",
  async ({ boardType, boardId, isLike }, { rejectWithValue }) => {
    try {
      const res = await userAPI.post(`/board/likes`, {
        boardType: boardType,
        boardId: boardId,
        isLike: isLike,
      });
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data.error);
    }
  }
);

const loadComments = createAsyncThunk(
  "board/loadComments",
  async ({ boardId}, { rejectWithValue }) => {
    try {
      const res = await userAPI.get(`/api/board/${boardId}/comments`);
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data.error);
    }
  }
);

const loadReview = createAsyncThunk(
  "board/loadReview",
  async ({ id }, { rejectWithValue }) => {
    try {
      const res = await userAPI.get(`/api/reviewstar`);
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data.error);
    }
  }
);

const postReview = createAsyncThunk(
  "board/loadReview",
  async (reviewData, { rejectWithValue }) => {
    try {
      const res = await userAPI.post(`/api/reviewstar`, reviewData);
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data.error);
    }
  }
);

const postComment = createAsyncThunk(
  "board/postComment",
  async ({ boardId, comment }, { rejectWithValue }) => {
    try {
      const res = await userAPI.post(`/api/board/${boardId}/comments`, {
        content: comment,
      });
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
      const res = await userAPI.delete(`/api/board/${boardId}`);
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
  async ({ boardId, isMatching }, { rejectWithValue }) => {
    console.log(boardId, isMatching);
    try {
      const res = await userAPI.post(`/board/matchingentry`, {
        boardId: boardId,
        isMatching: isMatching,
      });
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data.error);
    }
  }
);

const loadDetail = (boardId) => {
  return async (dispatch) => {
    await userAPI
      .get(`/api/boards/matching/${boardId}`)
      .then((response) => {
        dispatch(boardSliceAction.loadDetailData(response.data));
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const loadInfoDetail = (boardId) => {
  return async (dispatch) => {
    await userAPI
      .get(`/api/boards/information/${boardId}`)
      .then((response) => {
        dispatch(boardSliceAction.loadInfoDetailData(response.data));
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const searchBoard = createAsyncThunk(
  "board/search",
  async ({ keyword }, { rejectWithValue }) => {
    console.log(keyword);
    try {
      const res = await userAPI.get(
        `/board/search?page=1&amount=10&city=대구&gu=달서구&sort=title_Content&keyword=${keyword}&boardType=matching`
      );
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data.error);
    }
  }
);

const loadMyMatchingComments = createAsyncThunk(
  "board/loadMyMatchingComments",
  async ({}, { rejectWithValue }) => {
    try {
      const res = await userAPI.get(`/api/mycomment/matching`);
      return res;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data.error);
    }
  }
);


const loadMyInformationComments = createAsyncThunk(
  "board/loadMyInformationComments",
  async ({}, { rejectWithValue }) => {
    try {
      const res = await userAPI.get(`/api/mycomment/information`);
      return res;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data.error);
    }
  }
);

const loadMyMatchings = createAsyncThunk(
  "board/loadMyMatchings",
  async ({ page }, { rejectWithValue }) => {
    try {
      const res = await userAPI.get(`/api/mypost/matching`);
      return res;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data.error);
    }
  }
);

const loadMyEntrys = createAsyncThunk(
  "board/loadMyEntrys",
  async ({ page }, { rejectWithValue }) => {
    try {
      const res = await userAPI.get(`/api/myentry`);
      return res;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data.error);
    }
  }
);

const loadMyInformation = createAsyncThunk(
  "board/loadMyInformation",
  async ({ page }, { rejectWithValue }) => {
    try {
      const res = await userAPI.get(`/api/mypost/information`);
      return res;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data.error);
    }
  }
);

const loadInformation = createAsyncThunk(
  "board/loadInformation",
  async ({ cate, page }, { rejectWithValue }) => {
    try {
      const res = await userAPI.get(
        `/api/boards/information?cate=${cate}&page=${page}&amount=12`
      );
      return res;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data.error);
    }
  }
);

const loadMatching = createAsyncThunk(
  "board/loadMatching",
  async ({ cate, page, city, gu }, { rejectWithValue }) => {
    try {
      const res = await userAPI.get(
        `/api/boards/matching?cate=${cate}&page=${page}&amount=12&city=${
          city ? city : "all"
        }&gu=${gu ? gu : "all"}`
      );
      return res;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data.error);
    }
  }
);

// const loadBoard = (type, cate, selectedCity, selectedGu, page) => {
//   return async (dispatch) => {
//     let loadURL;
//     if (type === "matching")
//       loadURL = `/api/boards/${type}?cate=${cate}&page=${page}&amount=12&city=${
//         selectedCity ? selectedCity : "all"
//       }&gu=${selectedGu ? selectedGu : "all"}`;
//     else loadURL = `/api/boards/${type}?cate=${cate}&page=${page}&amount=12`;

//     await userAPI
//       .get(loadURL)
//       .then((response) => {
//         dispatch(boardSliceAction.loadBoardData(response.data));
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };

export const boardAction = {
  setBoardType,
  postBoard,
  postLike,
  loadComments,
  delComment,
  delBoard,
  applyBoard,
  postComment,
  loadReview,
  postReview,
  loadDetail,
  loadInfoDetail,
  searchBoard,
  loadMyMatchingComments,
  loadMyInformationComments,
  loadMyMatchings,
  loadMyEntrys,
  loadMyInformation,
  loadInformation,
  loadMatching,
};
