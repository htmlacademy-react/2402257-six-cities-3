import WelcomeScreen from '../../pages/main/welcome-screen';

type AppScreenProps = {
  welcomeScreenData: {
    foundedPlacesCount: number;
    email: string;
    favoritePlacesCount: number;
  };
  cardsData: {
    id: number | string;
    title: string;
    type: string;
    price: number;
    isFavorite: boolean;
    isPremium: boolean;
    previewImage: string;
  }[];
};

function App({ welcomeScreenData, cardsData }: AppScreenProps): JSX.Element {
  return (
    <WelcomeScreen
      welcomeScreenData={welcomeScreenData}
      cardsData={cardsData}
    />
  );
}

export default App;
