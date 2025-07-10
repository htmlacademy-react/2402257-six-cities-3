export const getFavoriteStatus = (
  favoriteOffers: string[],
  offerId: string | undefined
): number => {
  if (offerId !== undefined && favoriteOffers.includes(offerId)) {
    return 0;
  }
  return 1;
};
