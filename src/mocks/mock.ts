const loggedHeaderData = {
  email: 'gniddddddd@spb.com',
};

const commentsData = [
  {
    id: 'bananzo',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Free XhamsterPro',
      avatarUrl: 'https://mir-avatarok.3dn.ru/_si/0/03342719.jpg',
      isPro: true,
    },
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4,
  },
  {
    id: 'bublik',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'A4 A3',
      avatarUrl:
        'https://www.youloveit.ru/uploads/posts/2013-11/1384443414_youloveit_ru_kartinki_s_kotom_pusheenom05.png',
      isPro: false,
    },
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4,
  },
  {
    id: 'smzhena kurka',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Davif David',
      avatarUrl: 'https://mir-avatarok.3dn.ru/_si/0/92302704.jpg',
      isPro: false,
    },
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4,
  },
  {
    id: 'korniplodi',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Calmarchik Sosisochka',
      avatarUrl: 'https://mir-avatarok.3dn.ru/_si/0/11018642.jpg',
      isPro: true,
    },
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4,
  },
  {
    id: 'pupsiki',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Salam SAlem',
      avatarUrl: 'https://mir-avatarok.3dn.ru/_si/0/42881144.jpg',
      isPro: false,
    },
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4,
  },
  {
    id: 'kirilitsa',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Jibrailll Omal',
      avatarUrl:
        'https://cdnb.artstation.com/p/assets/images/images/024/510/737/large/zyx-mackawy-a9adeb42419075-57cc3f77ecae2.jpg?1582657589',
      isPro: false,
    },
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4,
  },
  {
    id: 'salaxa',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'SALAL KAMAL',
      avatarUrl:
        'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/64edb642419075.57cc3f77e4ec4.png',
      isPro: false,
    },
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4,
  },
];

const cardsData = [
  {
    id: 'bananzo',
    title: 'Salamalekum salaaaaaam',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: true,
    previewImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Macaca_nigra_self-portrait_large.jpg/250px-Macaca_nigra_self-portrait_large.jpg',
  },
  {
    id: 'bublik',
    title: 'Banana Republic Suite',
    type: 'villa',
    price: 300,
    city: {
      name: 'Sverdlovsk',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    isFavorite: false,
    isPremium: true,
    previewImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Pe_qxbisVDvuiRtzPE4Da2u9KQCvkTRQ1w&s',
  },
  {
    id: 'smzhena kurka',
    title: 'Jungle Boogie Bungalow',
    type: 'cottage',
    price: 85,
    city: {
      name: 'Sverdlovsk',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: false,
    previewImage:
      'https://i.pinimg.com/736x/36/aa/52/36aa52b185fab4b891738960ba53aeed.jpg',
  },
  {
    id: 'korniplodi',
    title: 'Primate Paradise Loft',
    type: 'loft',
    price: 180,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    isFavorite: false,
    isPremium: true,
    previewImage: 'https://i.redd.it/xaq1imzl871e1.png',
  },
  {
    id: 'pupsiki',
    title: 'Ape Escape Penthouse',
    type: 'house',
    price: 250,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: true,
    previewImage:
      'https://us-tuna-sounds-images.voicemod.net/b2c4409e-1aeb-4198-b08b-2bfba0dc3825-1682114255851.jpg',
  },
  {
    id: 'kirilitsa',
    title: 'Chimpanzee Chill Zone',
    type: 'cabin',
    price: 150,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: false,
    previewImage:
      'https://i.pinimg.com/736x/05/6a/fb/056afb60b6588403b4dc9b560bffd72a.jpg',
  },
  {
    id: 'salaxa',
    title: 'Like house',
    type: 'big house',
    price: 150,
    city: {
      name: 'Novosibirsk',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: false,
    previewImage:
      'https://i.pinimg.com/736x/05/6a/fb/056afb60b6588403b4dc9b560bffd72a.jpg',
  },
];

export { loggedHeaderData, cardsData, commentsData };
