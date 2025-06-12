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

const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export {
  cities,
  AppRoute,
  AuthorizationStatus,
  URL_MARKER_DEFAULT,
  URL_MARKER_CURRENT,
  ContainerRatingType,
  PageType,
};
