type FoundedPlacesCount = {
  foundedPlacesCount: number;
};

function PlacesFound({ foundedPlacesCount }: FoundedPlacesCount): JSX.Element {
  return (
    <b className="places__found">
      {foundedPlacesCount} places to stay in Amsterdam
    </b>
  );
}

export default PlacesFound;
