import { Points } from '../types/types';

export const getFavoritesOffers = (allOffers: Points) =>
  allOffers.filter((offer) => offer.isFavorite);
