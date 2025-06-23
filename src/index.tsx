import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import ErrorMessage from './components/error-message/error-message';
import { Provider } from 'react-redux';
import { store } from './store/store';
import {
  loggedHeaderData,
  commentsData,
  offersData,
  offersNearby,
} from './mocks/mock';
import { cities } from './const';
import { fetchOffersAction } from './store/api-actions';

store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App
        loggedHeaderData={loggedHeaderData}
        cardsComments={commentsData}
        cities={cities}
        offersData={offersData}
        offersNearby={offersNearby}
      />
    </Provider>
  </React.StrictMode>
);
