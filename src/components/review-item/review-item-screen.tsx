import { CardComment } from '../../types/types';
import RatingScreen from '../../components/rating/rating-screen';
import { ContainerRatingType } from '../../const';
import { humanizeCommentDate, classNameCommentDate } from '../../utils/day';

type CommentDataProps = {
  commentData: CardComment;
};

function ReviewItemScreen({ commentData }: CommentDataProps): JSX.Element {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={commentData.user.avatarUrl}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{commentData.user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <RatingScreen
            rating={commentData.rating}
            containerType={ContainerRatingType.Review}
          />
        </div>
        <p className="reviews__text">{commentData.comment}</p>
        <time
          className="reviews__time"
          dateTime={classNameCommentDate(new Date(commentData.date))}
        >
          {humanizeCommentDate(new Date(commentData.date))}
        </time>
      </div>
    </li>
  );
}

export default ReviewItemScreen;
