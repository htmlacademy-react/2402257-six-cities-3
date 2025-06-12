type Src = {
  src: string;
};

function OfferImgScreen({ src }: Src): JSX.Element {
  return (
    <div className="offer__image-wrapper">
      <img className="offer__image" src={src} alt="Photo studio" />
    </div>
  );
}

export default OfferImgScreen;
