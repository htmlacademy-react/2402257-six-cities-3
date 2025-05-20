import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { welcomeScreenData, cardData } from './mock';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App welcomeScreenData={welcomeScreenData} cardData={cardData} />
  </React.StrictMode>
);
