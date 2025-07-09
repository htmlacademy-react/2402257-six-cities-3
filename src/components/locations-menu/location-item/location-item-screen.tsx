import { useAppDispatch } from '../../../hooks';
import { useAppSelector } from '../../../hooks';
import cn from 'classnames';
import { getCurrentCity } from '../../../store/cities-process/selectors';
import { changeCity } from '../../../store/cities-process/cities-process';
import { changeSortingType } from '../../../store/sorting-process/sorting-process';
import { SortTypes } from '../../../const';
type City = { name: string };

function LocationItemScreen({ name }: City): JSX.Element {
  const dispatch = useAppDispatch();

  const isActiveCity = useAppSelector(getCurrentCity) === name;

  return (
    <li
      className="locations__item"
      onClick={() => {
        dispatch(changeCity(name));
        dispatch(changeSortingType(SortTypes.Popular));
      }}
    >
      <a
        className={cn(
          'locations__item-link',
          { 'tabs__item--active': isActiveCity },
          // prettier-ignore
          { 'tabs__item': !isActiveCity }
        )}
        href="#"
      >
        <span>{name}</span>
      </a>
    </li>
  );
}

export default LocationItemScreen;
