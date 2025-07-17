import {
  detailedOfferProcess,
  setDetailedOffer,
  clearDetailedOfferData,
} from './detailed-offer-process';
import { offersData } from '../../mock/mock';
import { fetchDetailedOffersDataAction } from '../api-actions';

describe('DetailedOfferProcess: Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      detailedOfferData: null,
      isLoadingDetailedOffer: false,
      hasError: false,
    };

    const result = detailedOfferProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      detailedOfferData: null,
      isLoadingDetailedOffer: false,
      hasError: false,
    };

    const result = detailedOfferProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set detailed offer data', () => {
    const state = {
      detailedOfferData: null,
      isLoadingDetailedOffer: false,
      hasError: false,
    };

    const expectedState = {
      detailedOfferData: {
        detailedOffer: { ...offersData[0], pointsNearby: [] },
        nearbyOffers: [],
        comments: [],
      },
      isLoadingDetailedOffer: false,
      hasError: false,
    };

    const result = detailedOfferProcess.reducer(
      state,
      setDetailedOffer({
        detailedOffer: { ...offersData[0], pointsNearby: [] },
        nearbyOffers: [],
        comments: [],
      })
    );

    expect(result).toEqual(expectedState);
  });

  it('should clear detailed offer data', () => {
    const state = {
      detailedOfferData: {
        detailedOffer: { ...offersData[0], pointsNearby: [] },
        nearbyOffers: [],
        comments: [],
      },
      isLoadingDetailedOffer: true,
      hasError: false,
    };
    const expectedState = {
      detailedOfferData: null,
      isLoadingDetailedOffer: false,
      hasError: false,
    };

    const result = detailedOfferProcess.reducer(
      state,
      clearDetailedOfferData()
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "hasError" to false, "detailedOfferData" and "isLoadingDetailedOffer" to false with "fetchDetailedOffersDataAction.fulfilled"', () => {
    const state = {
      detailedOfferData: null,
      isLoadingDetailedOffer: true,
      hasError: true,
    };
    const expectedState = {
      detailedOfferData: {
        detailedOffer: { ...offersData[0], pointsNearby: [] },
        nearbyOffers: [],
        comments: [],
      },
      isLoadingDetailedOffer: false,
      hasError: false,
    };

    const result = detailedOfferProcess.reducer(
      state,
      fetchDetailedOffersDataAction.fulfilled(
        {
          detailedOffer: { ...offersData[0], pointsNearby: [] },
          nearbyOffers: [],
          comments: [],
        },
        '',
        undefined
      )
    );

    expect(result).toEqual(expectedState);
  });
  it('should set "isLoadingDetailedOffer" to true with "fetchDetailedOffersDataAction.pending"', () => {
    const state = {
      detailedOfferData: null,
      isLoadingDetailedOffer: false,
      hasError: false,
    };
    const expectedState = {
      detailedOfferData: null,
      isLoadingDetailedOffer: true,
      hasError: false,
    };

    const result = detailedOfferProcess.reducer(
      state,
      fetchDetailedOffersDataAction.pending('', undefined)
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "hasError" to true, "isLoadingDetailedOffer" to false with "fetchDetailedOffersDataAction.rejected"', () => {
    const state = {
      detailedOfferData: null,
      isLoadingDetailedOffer: true,
      hasError: false,
    };
    const expectedState = {
      detailedOfferData: null,
      isLoadingDetailedOffer: false,
      hasError: true,
    };

    const result = detailedOfferProcess.reducer(
      state,
      fetchDetailedOffersDataAction.rejected(null, '', undefined)
    );

    expect(result).toEqual(expectedState);
  });
});
