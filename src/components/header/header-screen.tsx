import { Link } from 'react-router-dom';
import LogoScreen from '../logo/logo-screen';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { AuthorizationStatus } from '../../const';
function HeaderScreen(): JSX.Element {
  const favoritesCount = useAppSelector(
    (state) => state.favoritesOffers
  ).length;
  const userLogin = useAppSelector((state) => state.login);
  const isAuth =
    useAppSelector((state) => state.authorizationStatus) ===
    AuthorizationStatus.Auth;
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logoutAction());
  };
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <LogoScreen />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                {!isAuth && (
                  <li className="header__nav-item user">
                    <Link
                      className="header__nav-link header__nav-link--profile"
                      to="/login"
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>
                )}
                {isAuth && (
                  <>
                    <li className="header__nav-item user">
                      <Link
                        className="header__nav-link header__nav-link--profile"
                        to="/favorites"
                      >
                        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                        <span className="header__user-name user__name">
                          {userLogin}
                        </span>
                        <span className="header__favorite-count">
                          {favoritesCount}
                        </span>
                      </Link>
                    </li>
                    <li className="header__nav-item">
                      <Link
                        className="header__nav-link"
                        to="/"
                        onClick={() => handleLogout()}
                      >
                        <span className="header__signout">Sign out</span>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <a className="header__nav-link" href="#"></a>
    </>
  );
}

export default HeaderScreen;
