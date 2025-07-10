const cities = [
  { name: 'Amsterdam', key: 1 },
  { name: 'Paris', key: 2 },
  { name: 'Cologne', key: 3 },
  { name: 'Brussels', key: 4 },
  { name: 'Hamburg', key: 5 },
  { name: 'Dusseldorf', key: 6 },
];

enum AppRoute {
  Main = '/',
  Offer = '/offer/:id',
  Login = '/login',
  Favorites = '/favorites',
  NotFound = '*',
}

enum SortTypes {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRated = 'Top rated first',
}
enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum ContainerRatingType {
  Review = 'reviews',
  Offer = 'offer',
  Place = 'place',
  Main = 'main',
}

enum PageType {
  Main = 'main',
  Offer = 'offer',
}

export enum NameSpace {
  Sort = 'SORT',
  User = 'USER',
  DetailedOffer = 'DETAILEDOFFER',
  Favorites = 'FAVORITES',
  Data = 'DATA',
  Cities = 'CITIES',
  Form = 'FORM',
}

enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Favorites = '/favorite',
  Comments = '/comments',
}
const FIRST_LOAD_CITY = 'Paris';

const URL_MARKER_DEFAULT = '../img/pin.svg';

const URL_MARKER_CURRENT = '../img/pin-active.svg';

export {
  cities,
  AppRoute,
  AuthorizationStatus,
  URL_MARKER_DEFAULT,
  URL_MARKER_CURRENT,
  ContainerRatingType,
  PageType,
  SortTypes,
  FIRST_LOAD_CITY,
  APIRoute,
};
