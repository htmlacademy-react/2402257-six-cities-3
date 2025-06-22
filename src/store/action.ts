import { createAction } from '@reduxjs/toolkit';
import { SortTypes } from '../const';
import { Points } from '../types/types';

export const changeCity = createAction<string>('changeCity');
export const sortOffers = createAction<SortTypes>('sortOffers');
export const changeSortingType = createAction<SortTypes>('changeSortingType');
export const loadOffers = createAction<Points>('loadOffers');
