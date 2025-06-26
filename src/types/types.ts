export type City = {
  name: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
};

export type Point = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

export type CardComment = {
  id: string;
  date: string;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  comment: string;
  rating: number;
};

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type OfferCity = {
  name: string;
  location: Location;
};

type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type DetailedOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: OfferCity;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
};

export type OffersNearby = {
  id: number | string;
  title: string;
  rating: number;
  type: string;
  price: number;
  isFavorite: boolean;
  isPremium: boolean;
  previewImage: string;
};

export type Points = Point[];
export type CardComments = CardComment[];

export type AuthData = {
  login: string;
  password: string;
};

export type UserData = {
  email: null | string;
  avatarUrl: string;
  isPro: boolean;
  name: null | string;
  token: string;
};
