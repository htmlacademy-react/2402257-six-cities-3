import FavoritesCardScreen from '../favorites-card/favorites-card-screen';
import { Points } from '../../types/types';
type FavoritesLocationListProps = {
  name: string;
  favoritesOffers: Points;
};

function FavoritesLocationList({
  name,
  favoritesOffers,
}: FavoritesLocationListProps): JSX.Element | string {
  if (!favoritesOffers.some((card) => card.city.name === name)) {
    return '';
  }

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{name}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {favoritesOffers.map((card) => {
          if (card.city.name === name) {
            return <FavoritesCardScreen key={card.id} cardData={card} />;
          }
          return null;
        })}
      </div>
    </li>
  );
}
export default FavoritesLocationList;
