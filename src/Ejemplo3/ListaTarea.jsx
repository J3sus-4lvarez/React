import { useState } from "react";
import './ListaTarea.css';


export const Tarea3 = () => {
    const [tarea, setTarea] = useState('');
    const [listaTareas, setListaTareas] = useState([]);

    const agregarTarea = () => {
        if (tarea.trim() !== '') {
            setListaTareas([...listaTareas, tarea]);
            setTarea('');
        }
    };

    const eliminarTarea = (indice) => {
        const nuevasTareas = listaTareas.filter((_, i) => i !== indice);
        setListaTareas(nuevasTareas);
    };

    return (
        <div className="App">
            <h1>Lista de Tareas</h1>
            <input
                type="text"
                value={tarea}
                onChange={(e) => setTarea(e.target.value)}
                placeholder="Añadir tarea..."
            />
            <button onClick={agregarTarea} className="btn-add">Agregar Tarea</button>
      
            <ul>
                {listaTareas.map((tarea, index) => (
                    <li key={index}>
                        {tarea} <button onClick={() => eliminarTarea(index)} className="btn-delete">Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
