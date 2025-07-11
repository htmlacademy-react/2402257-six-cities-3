import { Points } from '../types/types';

export const getFavoriteStatus = (
  favoriteOffers: Points,
  offerId: string | undefined
): number => {
  if (favoriteOffers.map((offer) => offer.id).includes(offerId!)) {
    return 0;
  }
  return 1;
};
