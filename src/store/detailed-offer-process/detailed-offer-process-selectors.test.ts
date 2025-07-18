import { NameSpace } from '../../const';
import {
  getDetailedOfferData,
  getIsLoadingDetailedOffer,
  getHasError,
} from './selectors';
import { cardsData, commentsData, offersData } from '../../mock/mock';

describe('DetailedOfferProcess : Selectors', () => {
  const state = {
    [NameSpace.DetailedOffer]: {
      detailedOfferData: {
        detailedOffer: {
          ...offersData[0],
          pointsNearby: [],
        },
        nearbyOffers: cardsData,
        comments: commentsData,
      },
      isLoadingDetailedOffer: false,
      hasError: false,
    },
  };

  it('should return detailedOfferData', () => {
    const detailedOfferData = state[NameSpace.DetailedOffer].detailedOfferData;
    const result = getDetailedOfferData(state);

    expect(result).toEqual(detailedOfferData);
  });

  it('should return isLoadingDetailedOffer', () => {
    const isLoadingDetailedOffer =
      state[NameSpace.DetailedOffer].isLoadingDetailedOffer;
    const result = getIsLoadingDetailedOffer(state);

    expect(result).toEqual(isLoadingDetailedOffer);
  });

  it('should return hasError', () => {
    const hasError = state[NameSpace.DetailedOffer].hasError;
    const result = getHasError(state);

    expect(result).toEqual(hasError);
  });
});
