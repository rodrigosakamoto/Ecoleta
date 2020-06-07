import React from 'react';
import {ToastContainer} from 'react-toastify';
import './App.css';

import Routes from './routes';

function App() {
  return (
    <>
      <Routes />
      <ToastContainer />
    </>
  );
}

export default App;
