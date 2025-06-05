type PlacesRightScreenProps = {
  activeOfferId: number | string | null;
};

function PlacesRightScreen({
  activeOfferId,
}: PlacesRightScreenProps): JSX.Element {
  return (
    <div className="cities__right-section" id={`active-offer-${activeOfferId}`}>
      {/* пока так */}
      <section className="cities__map map" />
    </div>
  );
}

export default PlacesRightScreen;
