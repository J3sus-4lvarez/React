import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Tarea1 } from './Ejemplo1/formulario';
import { Tarea2 } from './Ejemplo2/like';
import { Tarea3 } from './Ejemplo3/ListaTarea';
import { Tarea4 } from './Ejemplo4/Correo';
import { Tarea5 } from './Ejercicio5/Clima';
import { Tarea6 } from './Instagram/App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Tarea6 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
