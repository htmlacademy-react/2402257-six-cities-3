import { SortTypes } from '../../const';
import cn from 'classnames';
import { Fragment, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { getSorting } from '../../store/sorting-process/selectors';
import { changeSortingType } from '../../store/sorting-process/sorting-process';
function PlacesSortingScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const activeSortingType = useAppSelector(getSorting);

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const handleSortingChange = (type: SortTypes) => {
    dispatch({ type: 'sortOffers', payload: type });
    dispatch(changeSortingType(type));
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
                'places__option--active': type === activeSortingType,
              })}
              tabIndex={0}
              onClick={() => {
                handleSortingChange(type);
                //prettier-ignore
              }}
            >
              {label}
            </li>
          ))}
        </ul>
        {activeSortingType}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
    </Fragment>
  );
}

export default PlacesSortingScreen;
