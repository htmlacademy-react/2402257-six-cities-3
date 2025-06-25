import { Points } from '../types/types';
export const getUniqCities = (allOffers: Points) =>
  Array.from(new Set(allOffers.map((offer) => offer.city.name)));
