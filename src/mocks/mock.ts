const loggedHeaderData = {
  email: 'gniddddddd@spb.com',
};

const city = {
  title: 'Amsterdam',
  lat: 52.3676,
  lng: 4.9041,
  zoom: 8,
};

const commentsData = [
  {
    id: 'bananzo',
    date: '2019-06-12T14:13:56.569Z',
    user: {
      name: 'Free XhamsterPro',
      avatarUrl: 'https://mir-avatarok.3dn.ru/_si/0/03342719.jpg',
      isPro: true,
    },
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 3.6,
  },
  {
    id: 'bublik',
    date: '2019-12-09T14:13:56.569Z',
    user: {
      name: 'A4 A3',
      avatarUrl:
        'https://www.youloveit.ru/uploads/posts/2013-11/1384443414_youloveit_ru_kartinki_s_kotom_pusheenom05.png',
      isPro: false,
    },
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 2.2,
  },
  {
    id: 'smzhena kurka',
    date: '2019-02-28T14:13:56.569Z',
    user: {
      name: 'Davif David',
      avatarUrl: 'https://mir-avatarok.3dn.ru/_si/0/92302704.jpg',
      isPro: false,
    },
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 3.5,
  },
  {
    id: 'korniplodi',
    date: '2024-07-19T14:13:56.569Z',
    user: {
      name: 'Calmarchik Sosisochka',
      avatarUrl: 'https://mir-avatarok.3dn.ru/_si/0/11018642.jpg',
      isPro: true,
    },
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4.5,
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
    rating: 5,
  },
  {
    id: 'kirilitsa',
    date: '2019-08-08T14:13:56.569Z',
    user: {
      name: 'Jibrailll Omal',
      avatarUrl:
        'https://cdnb.artstation.com/p/assets/images/images/024/510/737/large/zyx-mackawy-a9adeb42419075-57cc3f77ecae2.jpg?1582657589',
      isPro: false,
    },
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 2,
  },
  {
    id: 'salaxa',
    date: '2019-10-20T14:13:56.569Z',
    user: {
      name: 'SALAL KAMAL',
      avatarUrl:
        'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/64edb642419075.57cc3f77e4ec4.png',
      isPro: false,
    },
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 1.4,
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
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: true,
    rating: 4,
    previewImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Macaca_nigra_self-portrait_large.jpg/250px-Macaca_nigra_self-portrait_large.jpg',
  },
  {
    id: 'banaj',
    title: 'PUPSIKI',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.8566,
        longitude: 2.3522,
        zoom: 8,
      },
    },
    location: {
      latitude: 48.8566,
      longitude: 2.3522,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: true,
    rating: 4,
    previewImage:
      'https://cdnn1.img.sputnik.az/img/41701/28/417012809_132:0:1287:1270_1920x0_80_0_0_9b503a56777f76bb9c6c3d845adff98b.jpg',
  },
  {
    id: 'bublik',
    title: 'Banana Republic Suite',
    type: 'villa',
    price: 300,
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.9375,
        longitude: 6.9603,
        zoom: 8,
      },
    },
    location: {
      latitude: 50.9375,
      longitude: 6.9603,
      zoom: 8,
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.2,
    previewImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Pe_qxbisVDvuiRtzPE4Da2u9KQCvkTRQ1w&s',
  },
  {
    id: 'smzhena kurka',
    title: 'Jungle Boogie Bungalow',
    type: 'cottage',
    price: 85,
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.8503,
        longitude: 4.3517,
        zoom: 8,
      },
    },
    location: {
      latitude: 50.8503,
      longitude: 4.3517,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: false,
    rating: 2.2,
    previewImage:
      'https://i.pinimg.com/736x/36/aa/52/36aa52b185fab4b891738960ba53aeed.jpg',
  },
  {
    id: 'korniplodi',
    title: 'Primate Paradise Loft',
    type: 'loft',
    price: 180,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.5511,
        longitude: 9.9937,
        zoom: 8,
      },
    },
    location: {
      latitude: 53.5511,
      longitude: 9.9937,
      zoom: 8,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.7,
    previewImage: 'https://i.redd.it/xaq1imzl871e1.png',
  },
  {
    id: 'kurochka',
    title: 'Yacht Gold Club',
    type: 'yacht',
    price: 180,
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.2277,
        longitude: 6.7735,
        zoom: 8,
      },
    },
    location: {
      latitude: 51.2277,
      longitude: 6.7735,
      zoom: 8,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.7,
    previewImage:
      'https://dasart.ru/userdata/image/CQ/8e/CQ8egJJl5DLsGKwv.webp',
  },
  {
    id: 'new-card-0',
    title: 'City View Apartment',
    type: 'apartment',
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
      latitude: 52.385,
      longitude: 4.895,
      zoom: 8,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.2,
    previewImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Pe_qxbisVDvuiRtzPE4Da2u9KQCvkTRQ1w&s',
  },
  {
    id: 'new-card-1',
    title: 'Luxury Loft',
    type: 'loft',
    price: 220,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.8566,
        longitude: 2.3522,
        zoom: 8,
      },
    },
    location: {
      latitude: 48.862,
      longitude: 2.345,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.8,
    previewImage:
      'https://cdnn1.img.sputnik.az/img/41701/28/417012809_132:0:1287:1270_1920x0_80_0_0_9b503a56777f76bb9c6c3d845adff98b.jpg',
  },
  {
    id: 'new-card-2',
    title: 'Modern Studio',
    type: 'studio',
    price: 95,
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.9375,
        longitude: 6.9603,
        zoom: 8,
      },
    },
    location: {
      latitude: 50.945,
      longitude: 6.975,
      zoom: 8,
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.5,
    previewImage:
      'https://i.pinimg.com/736x/36/aa/52/36aa52b185fab4b891738960ba53aeed.jpg',
  },
  {
    id: 'new-card-3',
    title: 'Chic Penthouse',
    type: 'penthouse',
    price: 310,
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.8503,
        longitude: 4.3517,
        zoom: 8,
      },
    },
    location: {
      latitude: 50.855,
      longitude: 4.36,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.9,
    previewImage: 'https://i.redd.it/xaq1imzl871e1.png',
  },
  {
    id: 'new-card-4',
    title: 'Seaside Villa',
    type: 'villa',
    price: 280,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.5511,
        longitude: 9.9937,
        zoom: 8,
      },
    },
    location: {
      latitude: 53.545,
      longitude: 10.005,
      zoom: 8,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.6,
    previewImage:
      'https://dasart.ru/userdata/image/CQ/8e/CQ8egJJl5DLsGKwv.webp',
  },
  {
    id: 'new-card-5',
    title: 'Downtown Cottage',
    type: 'cottage',
    price: 110,
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.2277,
        longitude: 6.7735,
        zoom: 8,
      },
    },
    location: {
      latitude: 51.235,
      longitude: 6.785,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: false,
    rating: 3.9,
    previewImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Macaca_nigra_self-portrait_large.jpg/250px-Macaca_nigra_self-portrait_large.jpg',
  },
  {
    id: 'new-card-6',
    title: 'Riverside Apartment',
    type: 'apartment',
    price: 130,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.365,
      longitude: 4.685,
      zoom: 8,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.1,
    previewImage:
      'https://cdnn1.img.sputnik.az/img/41701/28/417012809_132:0:1287:1270_1920x0_80_0_0_9b503a56777f76bb9c6c3d845adff98b.jpg',
  },
  {
    id: 'new-card-7',
    title: 'Historic Loft',
    type: 'loft',
    price: 180,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.8566,
        longitude: 2.3522,
        zoom: 8,
      },
    },
    location: {
      latitude: 48.851,
      longitude: 2.348,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.3,
    previewImage:
      'https://i.pinimg.com/736x/36/aa/52/36aa52b185fab4b891738960ba53aeed.jpg',
  },
  {
    id: 'new-card-8',
    title: 'Garden Studio',
    type: 'studio',
    price: 100,
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.9375,
        longitude: 6.9603,
        zoom: 8,
      },
    },
    location: {
      latitude: 50.942,
      longitude: 6.955,
      zoom: 8,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.0,
    previewImage: 'https://i.redd.it/xaq1imzl871e1.png',
  },
  {
    id: 'new-card-9',
    title: 'Executive Penthouse',
    type: 'penthouse',
    price: 350,
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.8503,
        longitude: 4.3517,
        zoom: 8,
      },
    },
    location: {
      latitude: 50.848,
      longitude: 4.345,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.7,
    previewImage:
      'https://dasart.ru/userdata/image/CQ/8e/CQ8egJJl5DLsGKwv.webp',
  },
  {
    id: 'new-card-10',
    title: 'Lakeside Villa',
    type: 'villa',
    price: 290,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.5511,
        longitude: 9.9937,
        zoom: 8,
      },
    },
    location: {
      latitude: 53.557,
      longitude: 9.985,
      zoom: 8,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.4,
    previewImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Macaca_nigra_self-portrait_large.jpg/250px-Macaca_nigra_self-portrait_large.jpg',
  },
  {
    id: 'new-card-11',
    title: 'Urban Cottage',
    type: 'cottage',
    price: 120,
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.2277,
        longitude: 6.7735,
        zoom: 8,
      },
    },
    location: {
      latitude: 51.223,
      longitude: 6.765,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: false,
    rating: 3.8,
    previewImage:
      'https://cdnn1.img.sputnik.az/img/41701/28/417012809_132:0:1287:1270_1920x0_80_0_0_9b503a56777f76bb9c6c3d845adff98b.jpg',
  },
  {
    id: 'new-card-12',
    title: 'Central Apartment',
    type: 'apartment',
    price: 160,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.362,
      longitude: 4.682,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.5,
    previewImage:
      'https://i.pinimg.com/736x/36/aa/52/36aa52b185fab4b891738960ba53aeed.jpg',
  },
  {
    id: 'new-card-13',
    title: 'Artistic Loft',
    type: 'loft',
    price: 200,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.8566,
        longitude: 2.3522,
        zoom: 8,
      },
    },
    location: {
      latitude: 48.859,
      longitude: 2.36,
      zoom: 8,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.2,
    previewImage: 'https://i.redd.it/xaq1imzl871e1.png',
  },
  {
    id: 'new-card-14',
    title: 'Cozy Studio',
    type: 'studio',
    price: 90,
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.9375,
        longitude: 6.9603,
        zoom: 8,
      },
    },
    location: {
      latitude: 50.932,
      longitude: 6.95,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: false,
    rating: 3.7,
    previewImage:
      'https://dasart.ru/userdata/image/CQ/8e/CQ8egJJl5DLsGKwv.webp',
  },
  {
    id: 'new-card-15',
    title: 'Skyline Penthouse',
    type: 'penthouse',
    price: 320,
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.8503,
        longitude: 4.3517,
        zoom: 8,
      },
    },
    location: {
      latitude: 50.847,
      longitude: 4.358,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.9,
    previewImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Macaca_nigra_self-portrait_large.jpg/250px-Macaca_nigra_self-portrait_large.jpg',
  },
  {
    id: 'new-card-16',
    title: 'Modern Villa',
    type: 'villa',
    price: 270,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.5511,
        longitude: 9.9937,
        zoom: 8,
      },
    },
    location: {
      latitude: 53.549,
      longitude: 10.002,
      zoom: 8,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.3,
    previewImage:
      'https://cdnn1.img.sputnik.az/img/41701/28/417012809_132:0:1287:1270_1920x0_80_0_0_9b503a56777f76bb9c6c3d845adff98b.jpg',
  },
  {
    id: 'new-card-17',
    title: 'Quaint Cottage',
    type: 'cottage',
    price: 105,
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.2277,
        longitude: 6.7735,
        zoom: 8,
      },
    },
    location: {
      latitude: 51.23,
      longitude: 6.78,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: false,
    rating: 3.6,
    previewImage:
      'https://i.pinimg.com/736x/36/aa/52/36aa52b185fab4b891738960ba53aeed.jpg',
  },
  {
    id: 'new-card-18',
    title: 'Canal View Apartment',
    type: 'apartment',
    price: 170,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.358,
      longitude: 4.668,
      zoom: 8,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.6,
    previewImage: 'https://i.redd.it/xaq1imzl871e1.png',
  },
  {
    id: 'new-card-19',
    title: 'Luxury Villa Suite',
    type: 'villa',
    price: 330,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.8566,
        longitude: 2.3522,
        zoom: 8,
      },
    },
    location: {
      latitude: 48.853,
      longitude: 2.347,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.8,
    previewImage:
      'https://dasart.ru/userdata/image/CQ/8e/CQ8egJJl5DLsGKwv.webp',
  },
];

const offersData = [
  {
    id: 'bananzo',
    title: 'Salamalekum salaaaaaam',
    type: 'apartment',
    price: 12345,
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: true,
    rating: 3.5,
    description:
      'Bright apartment with canal views near Central Station. Recently renovated with designer furniture.',
    bedrooms: 1,
    goods: ['Wi-Fi', 'Heating', 'Kitchen', 'Coffee machine', 'Baby seat'],
    host: {
      name: 'Anna Vander',
      avatarUrl: 'https://i.pravatar.cc/150?img=12',
      isPro: true,
    },
    images: [
      'https://images.unsplash.com/photo-1554995207-c18c203602cb',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
    ],
    maxAdults: 2,
  },
  {
    id: 'bublik',
    title: 'Banana Republic Suite',
    type: 'villa',
    price: 300,
    city: {
      name: 'Cologne',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.2,
    description:
      'Luxury villa with private garden and sauna. Perfect for family gatherings and special events.',
    bedrooms: 4,
    goods: ['Pool', 'Sauna', 'Jacuzzi', 'Fireplace', 'BBQ', 'Dishwasher'],
    host: {
      name: 'Thomas Veld',
      avatarUrl: 'https://i.pravatar.cc/150?img=31',
      isPro: true,
    },
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf',
      'https://images.unsplash.com/photo-1574362848149-11496d93a7c7',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
      'https://images.unsplash.com/photo-1615529162924-f8605388463a',
    ],
    maxAdults: 8,
  },
  {
    id: 'smzhena kurka',
    title: 'Jungle Boogie Bungalow',
    type: 'cottage',
    price: 85,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: false,
    rating: 2.2,
    description:
      'Cozy eco-friendly cottage with botanical garden. Ideal for nature lovers and creative souls.',
    bedrooms: 1,
    goods: ['Terrace', 'Garden', 'Bicycle rental', 'Workspace'],
    host: {
      name: 'Luna Green',
      avatarUrl: 'https://i.pravatar.cc/150?img=44',
      isPro: false,
    },
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f',
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
      'https://images.unsplash.com/photo-1576941089067-2de3c901e126',
    ],
    maxAdults: 2,
  },
  {
    id: 'korniplodi',
    title: 'Primate Paradise Loft',
    type: 'loft',
    price: 180,
    city: {
      name: 'Paris',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.7,
    description:
      'Industrial-chic loft in converted warehouse. High ceilings and original architectural details.',
    bedrooms: 2,
    goods: [
      'High ceilings',
      'Art studio',
      'Sound system',
      'Smart home',
      'Designer furniture',
    ],
    host: {
      name: 'David Rot',
      avatarUrl: 'https://i.pravatar.cc/150?img=23',
      isPro: true,
    },
    images: [
      'https://images.unsplash.com/photo-1505873242700-f289a29e1e0f',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
      'https://images.unsplash.com/photo-1598928636135-d146006ff4be',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6',
    ],
    maxAdults: 4,
  },
  {
    id: 'kalnazka',
    title: 'Salamalekum salaaaaaam',
    type: 'apartment',
    price: 12345,
    city: {
      name: 'Brussels',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: true,
    rating: 3.5,
    description:
      'Bright apartment with canal views near Central Station. Recently renovated with designer furniture.',
    bedrooms: 1,
    goods: ['Wi-Fi', 'Heating', 'Kitchen', 'Coffee machine', 'Baby seat'],
    host: {
      name: 'Anna Vander',
      avatarUrl: 'https://i.pravatar.cc/150?img=12',
      isPro: true,
    },
    images: [
      'https://images.unsplash.com/photo-1554995207-c18c203602cb',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
    ],
    maxAdults: 2,
  },
];

const offersNearby = cardsData.slice(0, 3);

export {
  loggedHeaderData,
  cardsData,
  commentsData,
  city,
  offersData,
  offersNearby,
};
