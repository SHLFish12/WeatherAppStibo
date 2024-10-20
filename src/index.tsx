import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import WeatherApp from './WeatherApp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <WeatherApp />
  </React.StrictMode>
);
