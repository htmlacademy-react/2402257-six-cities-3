import {
  formProcess,
  setRating,
  setComment,
  setIsCommentPosted,
} from './form-process';
import { postCommentAction } from '../api-actions';

describe('FormProcess : Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      userComments: [],
      rating: 0,
      commentText: '',
      isCommentPosted: false,
      hasError: false,
    };

    const result = formProcess.reducer(expectedState, emptyAction);

    expect(result.userComments).toEqual([]);
    expect(result.rating).toBe(0);
    expect(result.commentText).toBe('');
    expect(result.isCommentPosted).toBe(false);
  });

  it('should return default initial state with empty action and undefined', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      userComments: [],
      rating: 0,
      commentText: '',
      isCommentPosted: true,
      hasError: false,
    };

    const result = formProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set rating', () => {
    const state = {
      userComments: [],
      rating: 0,
      commentText: '',
      isCommentPosted: false,
      hasError: false,
    };
    const expectedState = {
      userComments: [],
      rating: 3,
      commentText: '',
      isCommentPosted: false,
      hasError: false,
    };

    const result = formProcess.reducer(state, setRating(3));

    expect(result).toEqual(expectedState);
  });

  it('should set comment text', () => {
    const state = {
      userComments: [],
      rating: 0,
      commentText: '',
      isCommentPosted: false,
      hasError: false,
    };
    const expectedState = {
      userComments: [],
      rating: 0,
      commentText: 'Great place!',
      isCommentPosted: false,
      hasError: false,
    };

    const result = formProcess.reducer(state, setComment('Great place!'));

    expect(result).toEqual(expectedState);
  });

  it('should set isCommentPosted', () => {
    const state = {
      userComments: [],
      rating: 0,
      commentText: '',
      isCommentPosted: false,
      hasError: false,
    };
    const expectedState = {
      userComments: [],
      rating: 0,
      commentText: '',
      isCommentPosted: true,
      hasError: false,
    };

    const result = formProcess.reducer(state, setIsCommentPosted(true));

    expect(result).toEqual(expectedState);
  });

  it('should add user comment to "userComments" with postCommentAction.fulfilled', () => {
    const state = {
      userComments: [],
      rating: 0,
      commentText: '',
      isCommentPosted: false,
      hasError: false,
    };
    const expectedState = {
      userComments: [{ comment: 'Nice place!', rating: 5 }],
      rating: 0,
      commentText: '',
      isCommentPosted: true,
      hasError: false,
    };

    const result = formProcess.reducer(
      state,
      postCommentAction.fulfilled({ comment: 'Nice place!', rating: 5 }, '', {
        id: '1',
        comment: 'Nice place!',
        rating: 5,
      })
    );

    expect(result).toEqual(expectedState);
  });
  it('should set "isCommentPosted" to false with postCommentAction.pending', () => {
    const state = {
      userComments: [],
      rating: 0,
      commentText: '',
      isCommentPosted: true,
      hasError: false,
    };
    const expectedState = {
      userComments: [],
      rating: 0,
      commentText: '',
      isCommentPosted: false,
      hasError: false,
    };

    const result = formProcess.reducer(state, postCommentAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "hasError" to true with postCommentAction.rejected', () => {
    const state = {
      userComments: [],
      rating: 0,
      commentText: '',
      isCommentPosted: false,
      hasError: false,
    };
    const expectedState = {
      userComments: [],
      rating: 0,
      commentText: '',
      isCommentPosted: false,
      hasError: true,
    };

    const result = formProcess.reducer(state, postCommentAction.rejected);

    expect(result).toEqual(expectedState);
  });
});
