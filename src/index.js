import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { RegProvider } from './context/GlobalContext';
import App from './App';

ReactDOM.render(
  <RegProvider> 
  <BrowserRouter> 
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </RegProvider>,
  document.getElementById('root')
);
