type FoundedPlacesCount = {
  foundedPlacesCount: number;
  city: string;
};

function PlacesFound({
  foundedPlacesCount,
  city,
}: FoundedPlacesCount): JSX.Element {
  return (
    <b className="places__found">
      {foundedPlacesCount} places to stay in {city}
    </b>
  );
}

export default PlacesFound;
