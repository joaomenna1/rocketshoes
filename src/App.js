import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobaStyles from './styles/globals';
import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobaStyles />
    </BrowserRouter>
  );
}

export default App;
