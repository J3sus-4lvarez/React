import BarraLeteral from "./BarraLeteral";
import Contenido from "./Contenido";
import ContenidoD from "./ContenidoD";
import './/../Instagram_css/App.css';

export  const Tarea6 = () => {
    return(
       <div className="instagram-contenedor">
        <div className="instagram-barra-lateral">
            <BarraLeteral/>
        </div>
        <div className="instagram-contenido">
            <Contenido/>
        </div>
        <div className="instagram-contenido-derecha">
            <ContenidoD/>
        </div>
       </div>
    )
}
