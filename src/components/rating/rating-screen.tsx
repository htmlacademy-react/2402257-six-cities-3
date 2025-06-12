import { ContainerRatingType } from '../../const';
import cn from 'classnames';

type RatingScreenProps = {
  rating: number;
  containerType:
    | ContainerRatingType.Offer
    | ContainerRatingType.Review
    | ContainerRatingType.Place
    | ContainerRatingType.Main;
};

function RatingScreen({
  rating,
  containerType,
}: RatingScreenProps): JSX.Element {
  const getRatingPercent = (percentRating: number) => {
    if (!(percentRating.toString().slice(2, 3) === '5')) {
      percentRating = Math.round(rating);
    }

    percentRating = (percentRating * 100) / 5;
    return `${percentRating}%`;
  };

  const isReview = containerType === ContainerRatingType.Review;
  const isOffer = containerType === ContainerRatingType.Offer;
  const isPlace = containerType === ContainerRatingType.Place;
  const isMain = containerType === ContainerRatingType.Main;
  return (
    <div
      className={cn(
        'rating__stars',
        // prettier-ignore
        { 'reviews__stars': isReview },
        // prettier-ignore
        { 'offer__stars': isOffer },
        { 'place-card__stars': isPlace || isMain }
      )}
    >
      <span style={{ width: getRatingPercent(rating) }}></span>
      <span className="visually-hidden">{rating}</span>
    </div>
  );
}

export default RatingScreen;
