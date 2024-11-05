import { useState } from "react";
import "./formulario.css";

export const Tarea1 = () => {
    const [nombre, setNombre] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [mensaje, setMensaje] = useState("");

    const mensajeEnvio = (e) => {
        e.preventDefault();

        if (nombre === "Jesus123" && contraseña === "123456") {
            setMensaje("Bienvenido");
        } else {
            setMensaje("Usuario o contraseña incorrectos");
        }
    };

    return (
        <div className="formulario-container">
            <h1 className="formulario-titulo">Iniciar Sesión</h1>
            <form onSubmit={mensajeEnvio} className="formulario">
                <div className="formulario-campo">
                    <label htmlFor="usuario" className="formulario-label">Usuario:</label>
                    <input
                        type="text"
                        id="usuario"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder="Escribe tu usuario"
                        className="formulario-input"
                    />
                </div>
                <div className="formulario-campo">
                    <label htmlFor="contrasena" className="formulario-label">Contraseña:</label>
                    <input
                        type="password"
                        id="contrasena"
                        value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)}
                        placeholder="Escribe tu contraseña"
                        className="formulario-input"
                    />
                </div>
                <button type="submit" className="formulario-btn-submit">Iniciar Sesión</button>
            </form>
            {mensaje && (
                <p className={`formulario-mensaje ${mensaje === "Bienvenido" ? "formulario-mensaje-exito" : "formulario-mensaje-error"}`}>
                    {mensaje}
                </p>
            )}
        </div>
    );
}
