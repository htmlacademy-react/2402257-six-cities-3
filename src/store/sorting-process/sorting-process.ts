import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, SortTypes } from '../../const';
import { SortProcess } from '../../types/state';
const initialState: SortProcess = {
  sorting: SortTypes.Popular,
};
export const sortingProcess = createSlice({
  name: NameSpace.Sort,
  initialState,
  reducers: {
    changeSortingType: (state, action: { payload: SortTypes }) => {
      state.sorting = action.payload;
    },
  },
});

export const { changeSortingType } = sortingProcess.actions;
