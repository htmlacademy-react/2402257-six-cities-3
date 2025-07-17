import {
  formProcess,
  setRating,
  setComment,
  setIsCommentPosted,
} from './form-process';

describe('FormProcess : Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      userComments: [],
      rating: 0,
      commentText: '',
      isCommentPosted: false,
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
    };
    const expectedState = {
      userComments: [],
      rating: 3,
      commentText: '',
      isCommentPosted: false,
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
    };
    const expectedState = {
      userComments: [],
      rating: 0,
      commentText: 'Great place!',
      isCommentPosted: false,
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
    };
    const expectedState = {
      userComments: [],
      rating: 0,
      commentText: '',
      isCommentPosted: true,
    };

    const result = formProcess.reducer(state, setIsCommentPosted(true));

    expect(result).toEqual(expectedState);
  });
});
