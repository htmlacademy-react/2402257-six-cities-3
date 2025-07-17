import { offersData } from './offers-data';
import { cardsData, citiesData } from '../../mock/mock';
import { setUniqCities, toggleFavoriteOffer } from './offers-data';
import { fetchOffersAction, fetchFavoritesOffers } from '../api-actions';

describe('OffersData: Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      isOffersDataLoading: false,
      originOffers: [...cardsData],
      citiesData: [...citiesData],
      offerList: [...cardsData],
      hasError: false,
      favoriteOffers: [...cardsData],
      favoritesIsLoading: false,
    };

    const result = offersData.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });
  it('should return default initial state with empty action and undefined', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      isOffersDataLoading: false,
      originOffers: [],
      citiesData: [],
      offerList: [],
      hasError: false,
      favoriteOffers: [],
      favoritesIsLoading: false,
    };

    const result = offersData.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set uniq cities', () => {
    const cities = ['Paris', 'London', 'Berlin'];

    const state = {
      isOffersDataLoading: false,
      originOffers: [],
      citiesData: [],
      offerList: [],
      hasError: false,
      favoriteOffers: [],
      favoritesIsLoading: false,
    };
    const expectedState = {
      isOffersDataLoading: false,
      originOffers: [],
      citiesData: cities,
      offerList: [],
      hasError: false,
      favoriteOffers: [],
      favoritesIsLoading: false,
    };

    const result = offersData.reducer(state, setUniqCities(cities));

    expect(result).toEqual(expectedState);
  });

  it('should toggle favorite offer', () => {
    const state = {
      isOffersDataLoading: false,
      originOffers: [...cardsData],
      citiesData: [...citiesData],
      offerList: [...cardsData],
      hasError: false,
      favoriteOffers: [],
      favoritesIsLoading: false,
    };

    const offerIdToToggle = cardsData[0].id;
    const expectedState = {
      ...state,
      favoriteOffers: [cardsData[0]],
    };

    const result = offersData.reducer(
      state,
      toggleFavoriteOffer(offerIdToToggle)
    );

    expect(result).toEqual(expectedState);
  });

  it('should untoggle favorite offer', () => {
    const state = {
      isOffersDataLoading: false,
      originOffers: [...cardsData],
      citiesData: [...citiesData],
      offerList: [...cardsData],
      hasError: false,
      favoriteOffers: [...cardsData],
      favoritesIsLoading: false,
    };

    const offerIdToToggle = cardsData[0].id;
    const expectedState = {
      ...state,
      favoriteOffers: [...cardsData.slice(1)],
    };

    const result = offersData.reducer(
      state,
      toggleFavoriteOffer(offerIdToToggle)
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "hasError" to false, "isOffersDataLoading" to false," "originOffers", "citiesData", "offerList", "favoriteOffers" with "fetchOffersAction.fulfilled"', () => {
    const expectedState = {
      isOffersDataLoading: false,
      originOffers: [...cardsData],
      citiesData: [...citiesData],
      offerList: [...cardsData],
      hasError: false,
      favoriteOffers: [...cardsData],
      favoritesIsLoading: false,
    };

    const result = offersData.reducer(
      expectedState,
      fetchFavoritesOffers.fulfilled([...cardsData], '', undefined)
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "hasError" with "fetchOffersAction.rejected"', () => {
    const expectedState = {
      isOffersDataLoading: false,
      originOffers: [],
      citiesData: [],
      offerList: [],
      hasError: true,
      favoriteOffers: [],
      favoritesIsLoading: false,
    };

    const result = offersData.reducer(
      undefined,
      fetchOffersAction.rejected(null, '', undefined)
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "isOffersDataLoading" to true with "fetchOffersAction.pending"', () => {
    const expectedState = {
      isOffersDataLoading: true,
      originOffers: [],
      citiesData: [],
      offerList: [],
      hasError: false,
      favoriteOffers: [],
      favoritesIsLoading: false,
    };

    const result = offersData.reducer(
      undefined,
      fetchOffersAction.pending('', undefined)
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "favoritesIsLoading" to true with "fetchFavoritesOffers.pending"', () => {
    const expectedState = {
      isOffersDataLoading: false,
      originOffers: [],
      citiesData: [],
      offerList: [],
      hasError: false,
      favoriteOffers: [],
      favoritesIsLoading: true,
    };

    const result = offersData.reducer(
      undefined,
      fetchFavoritesOffers.pending('', undefined)
    );

    expect(result).toEqual(expectedState);
  });
  it('should set "favoritesIsLoading" to false with "fetchFavoritesOffers.fulfilled"', () => {
    const expectedState = {
      isOffersDataLoading: false,
      originOffers: [],
      citiesData: [],
      offerList: [],
      hasError: false,
      favoriteOffers: [],
      favoritesIsLoading: false,
    };

    const result = offersData.reducer(
      undefined,
      fetchFavoritesOffers.fulfilled([], '', undefined)
    );

    expect(result).toEqual(expectedState);
  });
  it('should set "hasError" to true with "fetchFavoritesOffers.rejected"', () => {
    const expectedState = {
      isOffersDataLoading: false,
      originOffers: [],
      citiesData: [],
      offerList: [],
      hasError: true,
      favoriteOffers: [],
      favoritesIsLoading: false,
    };

    const result = offersData.reducer(
      undefined,
      fetchFavoritesOffers.rejected(null, '', undefined)
    );

    expect(result).toEqual(expectedState);
  });
  it('should set "favoritesIsLoading" to false with "postFavoriteOfferAction.fulfilled"', () => {
    const expectedState = {
      isOffersDataLoading: false,
      originOffers: [],
      citiesData: [],
      offerList: [],
      hasError: false,
      favoriteOffers: [],
      favoritesIsLoading: false,
    };

    const result = offersData.reducer(
      undefined,
      fetchFavoritesOffers.fulfilled([], '', undefined)
    );

    expect(result).toEqual(expectedState);
  });
  it('should set "favoritesIsLoading" to true with "postFavoriteOfferAction.pending"', () => {
    const expectedState = {
      isOffersDataLoading: false,
      originOffers: [],
      citiesData: [],
      offerList: [],
      hasError: false,
      favoriteOffers: [],
      favoritesIsLoading: true,
    };

    const result = offersData.reducer(
      undefined,
      fetchFavoritesOffers.pending('', undefined)
    );

    expect(result).toEqual(expectedState);
  });
  it('should set "hasError" to true with "postFavoriteOfferAction.rejected"', () => {
    const expectedState = {
      isOffersDataLoading: false,
      originOffers: [],
      citiesData: [],
      offerList: [],
      hasError: true,
      favoriteOffers: [],
      favoritesIsLoading: false,
    };

    const result = offersData.reducer(
      undefined,
      fetchFavoritesOffers.rejected(null, '', undefined)
    );

    expect(result).toEqual(expectedState);
  });
});
