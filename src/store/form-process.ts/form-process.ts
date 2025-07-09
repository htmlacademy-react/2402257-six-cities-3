import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FormProcess } from '../../types/state';
import { nanoid } from 'nanoid';
import { postCommentAction } from '../api-actions';

const initialState: FormProcess = {
  userComments: [],
  rating: 0,
  commentText: '',
  isCommentPosted: true,
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
            id: string;
            comment: string;
            rating: number;
            user: {
              avatarUrl: string;
              isPro: boolean;
              name: string;
            };
          };
        }
      ) => {
        state.userComments = [
          ...state.userComments,
          {
            comment: action.payload.comment,
            date: new Date().toISOString(),
            id: nanoid(),
            rating: action.payload.rating,
            user: {
              avatarUrl: action.payload.user.avatarUrl,
              isPro: action.payload.user.isPro,
              name: action.payload.user.name,
            },
          },
        ];
        state.isCommentPosted = true;
      }
    );
    builder.addCase(postCommentAction.pending, (state) => {
      state.isCommentPosted = false;
    });
  },
});

export const { setRating, setComment, setIsCommentPosted } =
  formProcess.actions;
