import { useAppDispatch } from '../../hooks/index';
import { SortTypes } from '../../const';

function PlacesSortingScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <ul className="places__options places__options--custom places__options--opened">
      <li className="places__option places__option--active" tabIndex={0}>
        Popular
      </li>
      <li
        className="places__option"
        tabIndex={0}
        onClick={() => {
          dispatch({ type: 'sortOffers', payload: SortTypes.PriceLowToHigh });
        }}
      >
        Price: low to high
      </li>
      <li
        className="places__option"
        tabIndex={0}
        onClick={() => {
          dispatch({ type: 'sortOffers', payload: SortTypes.PriceHighToLow });
        }}
      >
        Price: high to low
      </li>
      <li
        className="places__option"
        tabIndex={0}
        onClick={() => {
          dispatch({ type: 'sortOffers', payload: SortTypes.TopRated });
        }}
      >
        Top rated first
      </li>
    </ul>
  );
}

export default PlacesSortingScreen;
