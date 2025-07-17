import { SortTypes } from '../../const';
import { sortingProcess, changeSortingType } from './sorting-process';

describe('SortingProcess: Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      sorting: SortTypes.Popular,
    };

    const result = sortingProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });
  it('should return default initial state with empty action and undefined', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      sorting: SortTypes.Popular,
    };

    const result = sortingProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should change sorting type', () => {
    const state = {
      sorting: SortTypes.Popular,
    };
    const expectedState = {
      sorting: SortTypes.PriceHighToLow,
    };

    const result = sortingProcess.reducer(
      state,
      changeSortingType(SortTypes.PriceHighToLow)
    );
    expect(result).toEqual(expectedState);
  });
});
