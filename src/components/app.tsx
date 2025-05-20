import WelcomeScreen from '../pages/welcome-screen';

type AppScreenProps = {
  welcomeScreenData: {
    foundedPlacesCount: number;
    email: string;
    favoritePlacesCount: number;
  };
  cardData: {
    // id: string;
    title: string;
    type: string;
    price: number;
    // city: {
    //   name: string;
    //   location: {
    //     latitude: number;
    //     longitude: number;
    //     zoom: number;
    //   };
    // };
    // location: {
    //   latitude: number;
    //   longitude: number;
    //   zoom: number;
    // };
    isFavorite: boolean;
    isPremium: boolean;
    // rating: number;
    previewImage: string;
  };
};

function App({ welcomeScreenData, cardData }: AppScreenProps): JSX.Element {
  return (
    <WelcomeScreen welcomeScreenData={welcomeScreenData} cardData={cardData} />
  );
}

export default App;
