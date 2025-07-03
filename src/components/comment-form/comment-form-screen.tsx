import { useRef } from 'react';
import StarInputScreen from './star-input-screen';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setComment, setRating } from '../../store/action';
import { postCommentAction } from '../../store/api-actions';
import { useParams } from 'react-router-dom';

const starsSettings = [
  {
    title: 'perfect',
    rate: 5,
  },
  {
    title: 'good',
    rate: 4,
  },
  {
    title: 'not bad',
    rate: 3,
  },
  {
    title: 'badly',
    rate: 2,
  },
  {
    title: 'terribly',
    rate: 1,
  },
];

const resetStarsCheckedStatus = () => {
  const starsRating = document.querySelectorAll('.form__rating-input');
  starsRating.forEach((star) => {
    const element = star as HTMLInputElement;
    element.checked = false;
  });
};

function CommentFormScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const commentInputRef = useRef<HTMLTextAreaElement>(null);
  const currentRating = useAppSelector((state) => state.comment.rating);
  const currentComment = useAppSelector((state) => state.comment.commentText);
  const isCommentPosted = useAppSelector((state) => state.isCommentPosted);
  const isReadyToSubmit =
    currentRating !== 0 &&
    isCommentPosted &&
    currentComment.length >= 50 &&
    currentComment.length <= 300;
  const { id } = useParams();

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {starsSettings.map((star) => (
          <StarInputScreen
            key={star.rate}
            settings={star}
            isReadyToSubmit={isReadyToSubmit}
            isCommentPosted={isCommentPosted}
          />
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={''}
        onChange={() => {
          dispatch(setComment(commentInputRef.current!.value));
        }}
        ref={commentInputRef}
        minLength={50}
        maxLength={300}
        disabled={!isReadyToSubmit && !isCommentPosted}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        {isReadyToSubmit && isCommentPosted && (
          <button
            className="reviews__submit form__submit button"
            type="submit"
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(
                postCommentAction({
                  id: id ?? '',
                  comment: commentInputRef.current!.value,
                  rating: currentRating,
                })
              );
              commentInputRef.current!.value = '';
              dispatch(setRating(0));
              dispatch(setComment(''));
              resetStarsCheckedStatus();
            }}
          >
            Submit
          </button>
        )}
        {!isReadyToSubmit && (
          <button
            className="reviews__submit form__submit button"
            type="submit"
            disabled
          >
            Submit
          </button>
        )}
      </div>
    </form>
  );
}

export default CommentFormScreen;
