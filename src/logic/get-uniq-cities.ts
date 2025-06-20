import { Points } from '../types/types';
export const getUniqCities = (allOffers: Points) =>
  new Set(allOffers.map((offer) => offer.city.name));
