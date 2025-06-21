import { City, Points } from '../types/types';

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

export { getUniqueCities };
