import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Pages/Main/Main';
import Header from './Pages/Header/Header';
import Filosofia from './Pages/Filosofia/Filosofia';
import Fotos from './Pages/Fotos/Fotos';
import Eventos from './Pages/Eventos/Eventos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Filosofia />
    <Fotos />
    <Eventos />
  </React.StrictMode>
);
