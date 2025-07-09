import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { CardComment } from '../../types/types';

export const getRating = (state: State): number => state[NameSpace.Form].rating;

export const getCommentText = (state: State): string =>
  state[NameSpace.Form].commentText;

export const getUserComments = (state: State): CardComment[] =>
  state[NameSpace.Form].userComments;

export const getIsCommentPosted = (state: State): boolean =>
  state[NameSpace.Form].isCommentPosted;
