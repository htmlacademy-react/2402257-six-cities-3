import { store } from '../store/store.js';
import { AuthorizationStatus, SortTypes } from '../const';
import { CardComment, UserData } from './types.js';
import { Points } from './types.js';
import { DetailedOfferData } from './types.js';
export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData;
};

export type CitiesProcess = {
  currentCity: string;
};

export type OffersData = {
  isOffersDataLoading: boolean;
  originOffers: Points;
  citiesData: string[];
  offerList: Points;
};

export type SortProcess = {
  sorting: SortTypes;
};

export type FavoritesProcess = {
  favoriteOffers: string[];
};

export type DetailedOfferProcess = {
  detailedOfferData: DetailedOfferData | null;
  isLoadingDetailedOffer: boolean;
};

export type FormProcess = {
  userComments: CardComment[];
  rating: number;
  commentText: string;
  isCommentPosted: boolean;
};
