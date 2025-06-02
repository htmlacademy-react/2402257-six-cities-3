type StarInputProps = {
  settings: {
    title: string;
    rate: number;
  };
  setterFn: (commentData: { rate: number; comment: string }) => void;
  commentCurrentData: { rate: number; comment: string };
};

function StarInputScreen({
  settings,
  setterFn,
  commentCurrentData,
}: StarInputProps): JSX.Element {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        defaultValue={settings.rate}
        id={`${settings.rate}-stars`}
        type="radio"
        onChange={() => {
          setterFn({ ...commentCurrentData, rate: settings.rate });
        }}
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
