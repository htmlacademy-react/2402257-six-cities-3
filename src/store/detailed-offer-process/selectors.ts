import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { DetailedOfferData } from '../../types/types';

export const getDetailedOfferData = (state: State): DetailedOfferData | null =>
  state[NameSpace.DetailedOffer].detailedOfferData;

export const getIsLoadingDetailedOffer = (state: State): boolean =>
  state[NameSpace.DetailedOffer].isLoadingDetailedOffer;

export const getHasError = (state: State): boolean =>
  state[NameSpace.DetailedOffer].hasError;
