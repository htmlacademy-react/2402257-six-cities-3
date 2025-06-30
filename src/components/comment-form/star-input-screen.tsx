import { useAppDispatch } from '../../hooks';
import { setRating } from '../../store/action';

type StarInputProps = {
  settings: {
    title: string;
    rate: number;
  };
  isReadyToSubmit: boolean;
  isCommentPosted: boolean;
};

function StarInputScreen({
  settings,
  isReadyToSubmit,
  isCommentPosted,
}: StarInputProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        defaultValue={settings.rate}
        id={`${settings.rate}-stars`}
        type="radio"
        onChange={() => {
          dispatch(setRating(settings.rate));
        }}
        disabled={!isReadyToSubmit && !isCommentPosted}
      />
      <label
        htmlFor={`${settings.rate}-stars`}
        className="reviews__rating-label form__rating-label"
        title={settings.title}
      >
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  );
}

export default StarInputScreen;
