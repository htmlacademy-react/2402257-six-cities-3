import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import ErrorMessage from './components/error-message/error-message';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { commentsData, offersData, offersNearby } from './mocks/mock';
import { cities } from './const';
import { fetchOffersAction, checkAuthAction } from './store/api-actions';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App
        cardsComments={commentsData}
        cities={cities}
        offersData={offersData}
        offersNearby={offersNearby}
      />
    </Provider>
  </React.StrictMode>
);
