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
  hasError: boolean;
  favoriteOffers: Points;
  favoritesIsLoading: boolean;
};

export type SortProcess = {
  sorting: SortTypes;
};

export type FavoritesProcess = {
  favoriteOffers: string[];
  loadedFavorites: Points;
  favoritesIsLoading: boolean;
  hasError: boolean;
};

export type DetailedOfferProcess = {
  detailedOfferData: DetailedOfferData | null;
  isLoadingDetailedOffer: boolean;
  hasError: boolean;
};

export type FormProcess = {
  userComments: CardComment[];
  rating: number;
  commentText: string;
  isCommentPosted: boolean;
};
