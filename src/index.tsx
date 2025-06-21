import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store/store';
import {
  loggedHeaderData,
  cardsData,
  commentsData,
  offersData,
  offersNearby,
} from './mocks/mock';
import { cities } from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        loggedHeaderData={loggedHeaderData}
        cardsComments={commentsData}
        cardsData={cardsData}
        cities={cities}
        offersData={offersData}
        offersNearby={offersNearby}
      />
    </Provider>
  </React.StrictMode>
);
