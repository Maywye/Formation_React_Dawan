import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//On fait appel a la classe ReactDom, en lui demandant de générer le rendu
//d'un composant qui s'appelle Appel
//
const root = ReactDOM.createRoot(document.getElementById('root'));

//React strict mode est utilisé pour détecter les bogues en mode développement
//nous permet d'écrire du code de meilleure qualité
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
