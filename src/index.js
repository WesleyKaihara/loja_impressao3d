import React from 'react';
import ReactDOM from 'react-dom/client';
import './global-styles.css';
import reportWebVitals from './reportWebVitals';
import Rotas from './routes';

import Header from './Components/Header';
import Footer from './Components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Rotas />
    <Header />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
