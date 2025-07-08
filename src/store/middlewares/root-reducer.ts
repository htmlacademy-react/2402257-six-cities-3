import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { userProcess } from '../user-process/user-process';
import { citiesProcess } from '../cities-process/cities-process';
import { offersData } from '../offers-data/offers-data';
import { sortingProcess } from '../sorting-process/sorting-process';
import { formProcess } from '../form-process.ts/form-process';
import { favoriteProcess } from '../favorite-process/favorite-process';
import { detailedOfferProcess } from '../detailed-offer-process/detailed-offer-process';
export const rootReducer = combineReducers({
  [NameSpace.Sort]: sortingProcess.reducer,
  [NameSpace.Form]: formProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Cities]: citiesProcess.reducer,
  [NameSpace.Data]: offersData.reducer,
  [NameSpace.Favorites]: favoriteProcess.reducer,
  [NameSpace.DetailedOffer]: detailedOfferProcess.reducer,
});
