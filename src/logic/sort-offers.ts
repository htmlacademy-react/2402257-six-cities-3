import { Points } from '../types/types';
import { SortTypes } from '../const';

const sortCurrentOffers = (offers: Points, sortType: string): Points => {
  switch (sortType) {
    case SortTypes.TopRated:
      return offers.sort((a, b) => b.rating - a.rating);
    case SortTypes.PriceHighToLow:
      return offers.sort((a, b) => b.price - a.price);
    case SortTypes.PriceLowToHigh:
      return offers.sort((a, b) => a.price - b.price);
  }

  return offers;
};

export { sortCurrentOffers };
