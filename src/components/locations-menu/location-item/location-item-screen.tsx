import { useAppDispatch } from '../../../hooks';
import { useAppSelector } from '../../../hooks';
import cn from 'classnames';

type City = { name: string };

function LocationItemScreen({ name }: City): JSX.Element {
  const dispatch = useAppDispatch();

  const isActiveCity = useAppSelector((state) => state.currentCity) === name;

  return (
    <li
      className="locations__item"
      onClick={() => {
        dispatch({ type: 'changeCity', payload: name });
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
