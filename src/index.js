import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import Context from './context/Context'; //Tässä Contextissa on CartState ja lisäys/poisto toiminta

ReactDOM.render(
  <React.StrictMode>
    <Context> {/* Tämän sisällä olevassa App componentissa pääästää käsiksi Contextiin */}
    <App />
    </Context>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
