import { NameSpace } from '../../const';
import { getCurrentCity } from './selectors';
describe('CitiesProcess : Selectors', () => {
  const state = {
    [NameSpace.Cities]: {
      currentCity: 'Paris',
    },
  };

  it('should return currentCity', () => {
    const result = getCurrentCity(state);

    expect(result).toEqual(state[NameSpace.Cities].currentCity);
  });
});
