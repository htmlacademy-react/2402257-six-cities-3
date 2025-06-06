import { useState } from 'react';
import StarInputScreen from './star-input-screen';

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

function CommentFormScreen(): JSX.Element {
  const [commentData, setCommentData] = useState<{
    rate: number;
    comment: string;
  }>({
    rate: 5,
    comment: '',
  });

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
            setterFn={setCommentData}
            commentCurrentData={commentData}
          />
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={''}
        onChange={(evt) => {
          setCommentData({
            ...commentData,
            comment: evt.target.value,
          });
        }}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default CommentFormScreen;
