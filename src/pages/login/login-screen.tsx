import LogoScreen from '../../components/logo/logo-screen';
import { Helmet } from 'react-helmet-async';
import { useRef, FormEvent } from 'react';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { changeCity } from '../../store/cities-process/cities-process';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import { changeSortingType } from '../../store/sorting-process/sorting-process';
import { SortTypes } from '../../const';
import { getCitiesData } from '../../store/offers-data/selectors';
import { useAppSelector } from '../../hooks';

function LoginScreen(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const cities = useAppSelector(getCitiesData);
  const dispatch = useAppDispatch();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(
        loginAction({
          login: loginRef.current.value,
          password: passwordRef.current.value,
        })
      );
    }
  };
  const getRandomCity = () => {
    const randomIndex = Math.floor(Math.random() * cities.length);
    return cities[randomIndex];
  };

  const currentCity = getRandomCity();
  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>Авторизация</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <LogoScreen />
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  ref={loginRef}
                  autoComplete="email"
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="password"
                  required
                  ref={passwordRef}
                  pattern="^(?=.*[a-zA-Z])(?=.*\d).{2,}$"
                  minLength={2}
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to={AppRoute.Main}
                onClick={() => {
                  dispatch(changeCity(currentCity));
                  dispatch(changeSortingType(SortTypes.Popular));
                }}
              >
                <span>{currentCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginScreen;
