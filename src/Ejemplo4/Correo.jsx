import { useState } from 'react';
import './Correo.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const Tarea4 = () => {
    const [email, setEmail] = useState('');

    const manejarEnvio = (e) => {
      e.preventDefault();
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

      if (emailRegex.test(email)) {
        iziToast.success({
            title: 'OK',
            message: 'Correo válido',
        });
      } else {
        iziToast.error({
          title: 'Error',
          message: 'Por favor, ingresa un correo válido.',
        });
      }
    }

    return (
        <div className="App">
          <h1>Validación de Correo</h1>
          <form onSubmit={manejarEnvio} className="formulario">
            <div className="campo">
              <label htmlFor="email">Correo Electrónico:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Escribe tu correo electrónico"
              />
            </div>
            <button type="submit" className="btn-submit">Enviar</button>
          </form>
        </div>
      );
  
}
