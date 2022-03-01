import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppContext, MyAppContext } from './Context';

ReactDOM.render(
  <React.StrictMode>
    <MyAppContext>
      <App />
    </MyAppContext>
  </React.StrictMode>,
  document.getElementById('root')
);
