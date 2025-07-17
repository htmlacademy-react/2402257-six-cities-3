import FavoritesCardScreen from '../favorites-card/favorites-card-screen';
import { Points } from '../../types/types';
import { AppRoute, SortTypes } from '../../const';
import { changeCity } from '../../store/cities-process/cities-process';
import { changeSortingType } from '../../store/sorting-process/sorting-process';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';

type FavoritesLocationListProps = {
  name: string;
  favoritesOffers: Points;
};

function FavoritesLocationList({
  name,
  favoritesOffers,
}: FavoritesLocationListProps): JSX.Element | string {
  const dispatch = useAppDispatch();

  if (!favoritesOffers.some((card) => card.city.name === name)) {
    return '';
  }

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link
            to={AppRoute.Main}
            onClick={() => {
              dispatch(changeCity(name));
              dispatch(changeSortingType(SortTypes.Popular));
            }}
            className="locations__item-link"
          >
            <span>{name}</span>
          </Link>
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
