import { Points } from '../types/types';

export const separateFavoritesOffers = (allOffers: Points) =>
  allOffers.filter((offer) => offer.isFavorite);
