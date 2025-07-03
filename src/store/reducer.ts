import { createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  changeSortingType,
  sortOffers,
  loadOffers,
  requireAuthorization,
  setOffersDataLoadingStatus,
  getFavoritesOffers,
  setIsFavorite,
  setUniqCities,
  setUserData,
  setDetailedOffer,
  clearDetailedOfferData,
  addNewComment,
  setRating,
  setComment,
  setIsCommentPosted,
} from './action';
import { filterOffersByCity } from '../logic/filter-offers';
import { AuthorizationStatus, FIRST_LOAD_CITY, SortTypes } from '../const';
import { sortCurrentOffers } from '../logic/sort-offers';
import { separateFavoritesOffers } from '../logic/separate-favorites-offers';
import { Points, UserData, DetailedOfferData } from '../types/types';
import { nanoid } from 'nanoid';

type InitialState = {
  detailedOfferData: DetailedOfferData | null;
  userData: UserData;
  originOffers: Points;
  currentCity: string;
  offerList: Points;
  sorting: SortTypes;
  favoritesOffers: Points;
  citiesData: string[];
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  isLoadingDetailedOffer: boolean;
  isCommentPosted: boolean;
  comment: {
    rating: number;
    commentText: string;
  };
};
const initialState: InitialState = {
  detailedOfferData: null,
  userData: {
    email: null,
    avatarUrl: '',
    isPro: false,
    name: '',
    token: '',
  },
  originOffers: [],
  currentCity: 'Paris',
  offerList: filterOffersByCity([], FIRST_LOAD_CITY),
  sorting: SortTypes.Popular,
  favoritesOffers: [],
  citiesData: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  isLoadingDetailedOffer: false,
  isCommentPosted: true,
  comment: {
    rating: 0,
    commentText: '',
  },
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.currentCity = action.payload;
    state.sorting = SortTypes.Popular;
    state.offerList = filterOffersByCity(state.originOffers, action.payload);
  });
  builder.addCase(sortOffers, (state, action) => {
    if (action.payload === SortTypes.Popular) {
      state.offerList = filterOffersByCity(
        state.originOffers,
        state.currentCity
      );
      return;
    }
    state.offerList = sortCurrentOffers(state.offerList, action.payload);
  });
  builder.addCase(changeSortingType, (state, action) => {
    state.sorting = action.payload;
  });
  builder.addCase(loadOffers, (state, action) => {
    state.originOffers = action.payload;
    state.offerList = filterOffersByCity(state.originOffers, state.currentCity);
  });
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });
  builder.addCase(setOffersDataLoadingStatus, (state, action) => {
    state.isOffersDataLoading = action.payload;
  });
  builder.addCase(getFavoritesOffers, (state, action) => {
    state.favoritesOffers = separateFavoritesOffers(action.payload);
  });
  builder.addCase(setIsFavorite, (state, action) => {
    state.favoritesOffers = state.originOffers
      .map((offer) => {
        if (offer.id === action.payload) {
          return {
            ...offer,
            isFavorite: !offer.isFavorite,
          };
        }
        return offer;
      })
      .filter((offer) => offer.isFavorite);

    state.originOffers = state.originOffers.map((offer) => {
      if (offer.id === action.payload) {
        return {
          ...offer,
          isFavorite: !offer.isFavorite,
        };
      }
      return offer;
    });

    state.offerList = state.originOffers.filter(
      (offer) => offer.city.name === state.currentCity
    );
  });
  builder.addCase(setUniqCities, (state, action) => {
    state.citiesData = action.payload;
  });
  builder.addCase(setUserData, (state, action) => {
    state.userData = action.payload;
  });
  builder.addCase(setDetailedOffer, (state, action) => {
    state.detailedOfferData = action.payload;
  });
  builder.addCase(clearDetailedOfferData, (state) => {
    state.detailedOfferData = null;
    state.isLoadingDetailedOffer = false;
  });
  builder.addCase(addNewComment, (state, action) => {
    if (state.detailedOfferData) {
      state.detailedOfferData.comments = [
        ...state.detailedOfferData.comments,
        {
          comment: action.payload.comment,
          date: new Date().toISOString(),
          id: nanoid(),
          rating: action.payload.rating,
          user: {
            avatarUrl: state.userData.avatarUrl,
            isPro: state.userData.isPro,
            name: state.userData.name,
          },
        },
      ];
    }
  });
  builder.addCase(setRating, (state, action) => {
    state.comment.rating = action.payload;
  });
  builder.addCase(setComment, (state, action) => {
    state.comment.commentText = action.payload;
  });
  builder.addCase(setIsCommentPosted, (state, action) => {
    state.isCommentPosted = action.payload;
  });
});

export { reducer };
