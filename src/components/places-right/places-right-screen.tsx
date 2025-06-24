import MapScreen from '../map/map';
import { City, Points } from '../../types/types';
import NoPlacesRightScreen from '../no-places-right/no-places-right-screen';

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
  if (cardsData.length === 0) {
    return <NoPlacesRightScreen />;
  }
  const selectedPoint = cardsData.find((card) => card.id === activeOfferId);

  return (
    <div className="cities__right-section">
      <MapScreen city={city} points={cardsData} selectedPoint={selectedPoint} />
    </div>
  );
}

export default PlacesRightScreen;
