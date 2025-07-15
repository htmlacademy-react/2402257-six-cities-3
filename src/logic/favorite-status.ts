import { Points } from '../types/types';

export const getFavoriteStatus = (
  favoriteOffers: Points,
  offerId: string | undefined
): boolean => favoriteOffers.map((offer) => offer.id).includes(offerId!);
