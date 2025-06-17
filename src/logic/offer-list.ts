import { Points, City } from '../types/types';

const filterOffersByCity = (offers: Points, city: string): Points =>
  offers.filter((offer) => offer.city.name === city);

function getUniqueCities(data: Points) {
  const seen: { [key: string]: boolean } = {};
  return data.reduce((uniqueCities: City[], item) => {
    const cityName = item.city.name;

    if (!seen[cityName]) {
      seen[cityName] = true;
      uniqueCities.push(item.city);
    }
    return uniqueCities;
  }, []);
}
export { filterOffersByCity, getUniqueCities };
