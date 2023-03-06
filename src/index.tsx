import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { HashRouter } from 'react-router-dom';
import { App } from './App';
import { GlobalProvider } from './contexts/GlobalProvider/GlobalProvider';

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
