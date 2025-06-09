import Map from '../map/map';
import { City, Points } from '../../types/types';

type PlacesRightScreenProps = {
  activeOfferId: number | string | null;
  cardsData: Points;
  city: City;
};

function PlacesRightScreen({
  activeOfferId,
  cardsData,
  city,
}: PlacesRightScreenProps): JSX.Element {
  const selectedPoint = cardsData.find((card) => card.id === activeOfferId);

  return (
    <div className="cities__right-section">
      <Map city={city} points={cardsData} selectedPoint={selectedPoint} />
    </div>
  );
}

export default PlacesRightScreen;
