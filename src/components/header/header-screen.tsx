import { Link } from 'react-router-dom';
import LogoScreen from '../logo/logo-screen';
import { Points } from '../../types/types';
type HeaderScreenProps = {
  headerData: {
    email: string;
  };
  cardsData: Points;
};
function HeaderScreen({
  headerData,
  cardsData,
}: HeaderScreenProps): JSX.Element {
  const favoritesCount = cardsData.filter((card) => card.isFavorite).length;

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
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to="/favorites"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      {headerData.email}
                    </span>

                    <span className="header__favorite-count">
                      {favoritesCount}
                    </span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
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
