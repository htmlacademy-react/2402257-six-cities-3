import { Points } from '../types/types';

const filterOffersByCity = (offers: Points, city: string): Points =>
  offers.filter((offer) => offer.city.name === city);

export { filterOffersByCity };
