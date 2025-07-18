import {
  getUserComments,
  getRating,
  getCommentText,
  getIsCommentPosted,
} from './selectors';
import { commentsData } from '../../mock/mock';
import { NameSpace } from '../../const';

describe('FormProcess : Selectors', () => {
  const state = {
    [NameSpace.Form]: {
      userComments: commentsData,
      rating: 3,
      commentText: 'smile',
      isCommentPosted: false,
      hasError: false,
    },
  };

  it('should return userComments', () => {
    const userComments = state[NameSpace.Form].userComments;
    const result = getUserComments(state);

    expect(result).toEqual(userComments);
  });

  it('should return rating', () => {
    const rating = state[NameSpace.Form].rating;
    const result = getRating(state);

    expect(result).toEqual(rating);
  });

  it('should return commentText', () => {
    const commentText = state[NameSpace.Form].commentText;
    const result = getCommentText(state);

    expect(result).toEqual(commentText);
  });

  it('should return isCommentPosted', () => {
    const isCommentPosted = state[NameSpace.Form].isCommentPosted;
    const result = getIsCommentPosted(state);

    expect(result).toEqual(isCommentPosted);
  });
});
