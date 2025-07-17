import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { DetailedOfferData } from '../../types/types';

export const getDetailedOfferData = (
  state: Pick<State, NameSpace.DetailedOffer>
): DetailedOfferData | null => state[NameSpace.DetailedOffer].detailedOfferData;

export const getIsLoadingDetailedOffer = (
  state: Pick<State, NameSpace.DetailedOffer>
): boolean => state[NameSpace.DetailedOffer].isLoadingDetailedOffer;

export const getHasError = (
  state: Pick<State, NameSpace.DetailedOffer>
): boolean => state[NameSpace.DetailedOffer].hasError;
