import { useState } from "react"; 
import "./Clima.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
// Importa los iconos necesarios
import { WiDaySunny, WiRain, WiCloudy, WiSnow, WiThunderstorm, WiFog } from "react-icons/wi";

export const Tarea5 = () => {
    const [EstadoClima, setEstadoClima] = useState(null); 
    const [error, setError] = useState(null);
    const API = '329333c800402304ffb0c0cfd6820b96';

    const ClimaE = async (event) => {
        event.preventDefault();
        const ciudad = event.target.city.value;
        setEstadoClima(null);
        setError(null);

        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API}&units=metric&lang=es`);
            
            if (!response.ok) {
                throw new Error('Ciudad no encontrada');
            }
    
            const data = await response.json();
            const nuevoEstadoClima = {
                ciudad: ciudad,
                temperature: data.main.temp,
                description: data.weather[0].description,
                icon: obtenerIconoClima(data.weather[0].main)
            };
            setEstadoClima(nuevoEstadoClima);
            iziToast.success({
                title: 'Éxito',
                message: `Clima obtenido para ${ciudad}`,
                position: 'topRight'
            });
        } catch (error) {
            setError(error.message);
            iziToast.error({
                title: 'Error',
                message: error.message,
                position: 'topRight'
            });
        }
    };

    const obtenerIconoClima = (condicion) => {
        switch (condicion.toLowerCase()) {
            case 'clear': return <WiDaySunny />;
            case 'rain': return <WiRain />;
            case 'clouds': return <WiCloudy />;
            case 'snow': return <WiSnow />;
            case 'thunderstorm': return <WiThunderstorm />;
            case 'mist':
            case 'fog': return <WiFog />;
            default: return <WiDaySunny />;
        }
    };

    return (
        <div className="Clima">
            <div className="contenido">
                <h1>Consulta el Clima</h1>
                <form onSubmit={ClimaE}>
                    <input type="text" id="city" placeholder="Ingresa una ciudad" required />
                    <button type="submit">Consultar Clima</button>
                </form>
                <div id="weather">
                    {EstadoClima && (
                        <div className="resultado">
                            <h2>Clima en {EstadoClima.ciudad}</h2>
                            <div className="icono-clima">{EstadoClima.icon}</div>
                            <p className="temperatura">{EstadoClima.temperature} °C</p>
                            <p className="descripcion">{EstadoClima.description}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
