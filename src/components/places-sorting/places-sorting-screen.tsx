import { useAppDispatch } from '../../hooks/index';
import { SortTypes } from '../../const';
import cn from 'classnames';
import { Fragment, useState } from 'react';

type SortingState = {
  popular: boolean;
  priceLowToHigh: boolean;
  priceHighToLow: boolean;
  topRated: boolean;
};

function PlacesSortingScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const [sortingState, setSortingState] = useState<SortingState>({
    popular: true,
    priceLowToHigh: false,
    priceHighToLow: false,
    topRated: false,
  });
  const [activeSorting, setActiveSorting] = useState<SortTypes>(
    SortTypes.Popular
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const handleSortingChange = (type: SortTypes, key: keyof SortingState) => {
    dispatch({ type: 'sortOffers', payload: type });
    setSortingState({
      popular: false,
      priceLowToHigh: false,
      priceHighToLow: false,
      topRated: false,
      [key]: true,
    });
  };

  return (
    <Fragment>
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <ul
          className={cn('places__options places__options--custom', {
            'places__options--opened': isDropdownOpen,
          })}
        >
          {[
            { label: 'Popular', type: SortTypes.Popular, key: 'popular' },
            {
              label: 'Price: low to high',
              type: SortTypes.PriceLowToHigh,
              key: 'priceLowToHigh',
            },
            {
              label: 'Price: high to low',
              type: SortTypes.PriceHighToLow,
              key: 'priceHighToLow',
            },
            {
              label: 'Top rated first',
              type: SortTypes.TopRated,
              key: 'topRated',
            },
          ].map(({ label, type, key }) => (
            <li
              key={key}
              className={cn('places__option', {
                'places__option--active':
                  sortingState[key as keyof SortingState],
              })}
              tabIndex={0}
              onClick={() => {
                handleSortingChange(type, key as keyof SortingState);
                setActiveSorting(type);
                //prettier-ignore
              }}
            >
              {label}
            </li>
          ))}
        </ul>
        {activeSorting}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
    </Fragment>
  );
}

export default PlacesSortingScreen;
