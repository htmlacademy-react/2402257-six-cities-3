import { NameSpace } from '../../const';
import { cardsData, citiesData } from '../../mock/mock';
import {
  getIsOffersDataLoading,
  getOfferList,
  getCitiesData,
  getOriginOffers,
  getHasError,
  getFavoriteOffers,
  getFavoritesIsLoading,
} from './selectors';

describe('OffersData: Selectors', () => {
  const state = {
    [NameSpace.Data]: {
      isOffersDataLoading: false,
      originOffers: [...cardsData],
      citiesData: [...citiesData],
      offerList: [...cardsData],
      hasError: false,
      favoriteOffers: [...cardsData],
      favoritesIsLoading: false,
    },
  };
  it('should return favoriteOffers', () => {
    expect(getFavoriteOffers(state)).toEqual([...cardsData]);
  });
  it('should return isOffersDataLoading', () => {
    expect(getIsOffersDataLoading(state)).toBe(false);
  });
  it('should return originOffers', () => {
    expect(getOriginOffers(state)).toEqual([...cardsData]);
  });
  it('should return citiesData', () => {
    expect(getCitiesData(state)).toEqual([...citiesData]);
  });
  it('should return offerList', () => {
    expect(getOfferList(state)).toEqual([...cardsData]);
  });
  it('should return hasError', () => {
    expect(getHasError(state)).toBe(false);
  });
  it('should return favoritesIsLoading', () => {
    expect(getFavoritesIsLoading(state)).toBe(false);
  });
});
