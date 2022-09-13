import { boardSliceAction } from "../reducers/boardReducer";
import { createAsyncThunk } from "@reduxjs/toolkit";
import userAPI from "../../apis/userAPI";

function setBoardType(type, cate) {
  return async (dispatch) => {
    dispatch(boardSliceAction.setBoardType({ type, cate }));
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
      return rejectWithValue(err.response.data);
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
      const res = await userAPI.get(`/api/review`);
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
      const res = await userAPI.post(`/api/review`, reviewData);
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
      return rejectWithValue(err.response.data);
    }
  }
);

const loadDetail = createAsyncThunk(
  "board/loadDetail",
  async ({ boardId }, { rejectWithValue }) => {
    try {
      const res = await userAPI.get(`/api/boards/matching/${boardId}`);
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

const loadInfoDetail = createAsyncThunk(
  "board/loadInfoDetail",
  async ({ boardId }, { rejectWithValue }) => {
    try {
      const res = await userAPI.get(`/api/boards/information/${boardId}`);
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

//새로 만들고 있는 부분!!
// const searchBoards = ({keyword})=>{
//   return async(dispatch) =>{
//     await userAPI
//     .get(`/board/search?page=1&amount=10&city=대구&gu=달서구&sort=title_Content&keyword=${keyword}&boardType=matching`)
//     .then((response)=>{
//       dispatch(boardSliceAction.loadSearchData(response.data));
//       console.log(response.data);
//     })
//     .catch((e)=>{
//       console.log(e);
//     });
//   };
// };

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
  async ({ page, amount }, { rejectWithValue }) => {
    try {
      const res = await userAPI.get(`/api/mycomment/matching?page=${page}&amount=${amount}`);
      return res;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data.error);
    }
  }
);


const loadMyInformationComments = createAsyncThunk(
  "board/loadMyInformationComments",
  async ({ page, amount }, { rejectWithValue }) => {
    try {
      const res = await userAPI.get(`/api/mycomment/information?page=${page}&amount=${amount}`);
      return res;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data.error);
    }
  }
);

const loadMyMatchings = createAsyncThunk(
  "board/loadMyMatchings",
  async ({ page, amount }, { rejectWithValue }) => {
    try {
      const res = await userAPI.get(`/api/mypost/matching?page=${page}&amount=${amount}`);
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  }
);

const loadMyEntrys = createAsyncThunk(
  "board/loadMyEntrys",
  async ({ page, amount }, { rejectWithValue }) => {
    try {
      const res = await userAPI.get(`/api/myentry?page=${page}&amount=${amount}`);
      return res;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
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
      return rejectWithValue(err);
    }
  }
);

const loadInformation = createAsyncThunk(
  "board/loadInformation",
  async ({ cate, page, amount }, { rejectWithValue }) => {
    try {
      const res = await userAPI.get(
        `/api/boards/information?cate=${cate}&page=${page}&amount=${amount}`
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
  async ({ cate, page, amount, city, gu }, { rejectWithValue }) => {
    try {
      const res = await userAPI.get(
        `/api/boards/matching?cate=${cate}&page=${page}&amount=${amount}&city=${
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

const getParticipate = createAsyncThunk(
  "board/getParticipate",
  async ({ boardId }, { rejectWithValue }) => {
    try {
      const res = await userAPI.post(`/board/statecheck/${boardId}`);
      return res;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data.error);
    }
  }
);

const mainMyMatching = createAsyncThunk(
  "board/mainMyMatching",
  async ({ category }, { rejectWithValue }) => {
    try {
      const res = await userAPI.get(`/api/mainboards/matching/${category}`);
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
  getParticipate,
  mainMyMatching,
};
