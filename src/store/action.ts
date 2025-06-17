import { createAction } from '@reduxjs/toolkit';
import { SortTypes } from '../const';
export const changeCity = createAction<string>('changeCity');
export const sortOffers = createAction<SortTypes>('sortOffers');
