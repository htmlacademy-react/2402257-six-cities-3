import { NameSpace, SortTypes } from '../../const';
import { getSorting } from './selectors';

describe('SortingProcess: Selectors', () => {
  const state = {
    [NameSpace.Sort]: {
      sorting: SortTypes.Popular,
    },
  };

  it('should return sorting', () => {
    const sorting = state[NameSpace.Sort].sorting;
    const result = getSorting(state);

    expect(result).toEqual(sorting);
  });
});
