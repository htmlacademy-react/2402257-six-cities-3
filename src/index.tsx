import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { welcomeScreenData, cardsData } from './mock';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App welcomeScreenData={welcomeScreenData} cardsData={cardsData} />
  </React.StrictMode>
);
