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
export { cities, AppRoute };
