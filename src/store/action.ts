import { createAction } from '@reduxjs/toolkit';
import { Points } from '../types/types';

export const changeCity = createAction<string>('changeCity');
export const fillOffersList = createAction<Points[]>('fillOffersList');
