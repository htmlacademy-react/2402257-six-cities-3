import { NameSpace } from '../../const';
import { State, UserComment } from '../../types/state';

export const getRating = (state: Pick<State, NameSpace.Form>): number =>
  state[NameSpace.Form].rating;

export const getCommentText = (state: Pick<State, NameSpace.Form>): string =>
  state[NameSpace.Form].commentText;

export const getUserComments = (
  state: Pick<State, NameSpace.Form>
): UserComment[] => state[NameSpace.Form].userComments;

export const getIsCommentPosted = (
  state: Pick<State, NameSpace.Form>
): boolean => state[NameSpace.Form].isCommentPosted;
