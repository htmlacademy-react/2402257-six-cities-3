import {
  detailedOfferProcess,
  setDetailedOffer,
  clearDetailedOfferData,
} from './detailed-offer-process';
import { offersData } from '../../mock/mock';

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
});
