import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { CitiesProcess } from '../../types/state';
const initialState: CitiesProcess = {
  currentCity: 'Paris',
};
export const citiesProcess = createSlice({
  name: NameSpace.Cities,
  initialState,
  reducers: {
    changeCity: (state, action: { payload: string }) => {
      state.currentCity = action.payload;
    },
  },
});

export const { changeCity } = citiesProcess.actions;
