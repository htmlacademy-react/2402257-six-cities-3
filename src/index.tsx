import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { loggedHeaderData, cardsData } from './mock';
import { cities } from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      loggedHeaderData={loggedHeaderData}
      cardsData={cardsData}
      cities={cities}
    />
  </React.StrictMode>
);
