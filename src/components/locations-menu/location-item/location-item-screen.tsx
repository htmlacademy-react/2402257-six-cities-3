import { useAppDispatch } from '../../../hooks';

type City = { name: string };

function LocationItemScreen({ name }: City): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <li
      className="locations__item"
      onClick={() => {
        dispatch({ type: 'changeCity', payload: name });
      }}
    >
      <a className="locations__item-link tabs__item" href="#">
        <span>{name}</span>
      </a>
    </li>
  );
}

export default LocationItemScreen;
