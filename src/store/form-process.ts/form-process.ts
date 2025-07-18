import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FormProcess } from '../../types/state';
import { postCommentAction } from '../api-actions';

const initialState: FormProcess = {
  userComments: [],
  rating: 0,
  commentText: '',
  isCommentPosted: true,
  hasError: false,
};
export const formProcess = createSlice({
  name: NameSpace.Form,
  initialState,
  reducers: {
    setRating: (state, action: { payload: number }) => {
      state.rating = action.payload;
    },
    setComment: (state, action: { payload: string }) => {
      state.commentText = action.payload;
    },
    setIsCommentPosted: (state, action: { payload: boolean }) => {
      state.isCommentPosted = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(
      postCommentAction.fulfilled,
      (
        state,
        action: {
          payload: {
            comment: string;
            rating: number;
          };
        }
      ) => {
        state.userComments = [
          ...state.userComments,
          {
            comment: action.payload.comment,
            rating: action.payload.rating,
          },
        ];
        state.isCommentPosted = true;
      }
    );
    builder.addCase(postCommentAction.pending, (state) => {
      state.isCommentPosted = false;
    });
    builder.addCase(postCommentAction.rejected, (state) => {
      state.hasError = true;
    });
  },
});

export const { setRating, setComment, setIsCommentPosted } =
  formProcess.actions;
