import './../Instagram_css/Contenido.css';
import imagen1 from './imagen/Imagen 1.jpg';
import imagen2 from './imagen/Imagen 2.jpg';
import imagen3 from './imagen/imagen 3.jpg';
import imagen4 from './imagen/imagen 4.jpg';
import { useState, useEffect } from 'react';
import { FaRegHeart, FaHeart, FaRegComment, FaRegPaperPlane, FaRegBookmark } from 'react-icons/fa';

export default function Contenido(){
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [imagen1, imagen2, imagen3, imagen4];
    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [comentarios, setComentarios] = useState([
        { usuario: 'Anuel', texto: '¡Qué buena foto! 📸✨' },
    ]);
    const [nuevoComentario, setNuevoComentario] = useState('');

    const Likess = () =>{
        if (likes > 0) {
            setLikes(likes - 1);
            setIsLiked(false);
        } else {
            setLikes(likes + 1);
            setIsLiked(true);
        }
    }

    const nextImage = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1 
        );
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const timer = setInterval(nextImage, 8000);
        return () => clearInterval(timer);
    }, []);

    const agregarComentario = (e) => {
        e.preventDefault();
        if (nuevoComentario.trim() !== '') {
            const comentario = {
                usuario: 'Jesus Alvarez',
                texto: nuevoComentario
            };
            setComentarios([...comentarios, comentario]);
            setNuevoComentario('');
        }
    };

    return(
        <div className="contenedor">
            <div className="historias">
                <div className="historias_item">
                    <div className="circulo"></div>
                    <span className="nombre_usuario">Jesus Alvarez</span>
                </div>
                <div className="historias_item">
                    <div className="circulo"></div>
                    <span className="nombre_usuario">Diego Lara</span>
                </div>
                <div className="historias_item">
                    <div className="circulo"></div>
                    <span className="nombre_usuario">Camilo</span>
                </div>
                <div className="historias_item">
                    <div className="circulo"></div>
                    <span className="nombre_usuario">Daniel</span>
                </div>
                <div className="historias_item">
                    <div className="circulo"></div>
                    <span className="nombre_usuario">Juan Uribe</span>
                </div>
                <div className="historias_item">
                    <div className="circulo"></div>
                    <span className="nombre_usuario">Andru Sala</span>
                </div>
                <div className="historias_item">
                    <div className="circulo"></div>
                    <span className="nombre_usuario">Crixo</span>
                </div>
            </div>

            <div className="publicaciones">
                <div className="header-publicacion">
                    <div className="publicaciones_item"></div>
                    <h1>Jesus Alvarez <span className="tiempo">• 23 min</span></h1>
                    <span className="puntos">•••</span>
                </div>

                <div className="carrusel-fotos">
                    <div className="carrusel-container">
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Publicación ${index + 1}`}
                                className={`carrusel-imagen ${index === currentIndex ? 'active' : ''}`}
                            />
                        ))}
                        
                        <button className="carrusel-button prev" onClick={prevImage}>❮</button>
                        <button className="carrusel-button next" onClick={nextImage}>❯</button>
                        
                        <div className="indicadores">
                            {images.map((_, index) => (
                                <span
                                    key={index}
                                    className={`indicador ${index === currentIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentIndex(index)}
                                ></span>
                            ))}
                        </div>
                    </div>
                    
                    <div className="iconos-interaccion">
                        <div className="iconos-izquierda">
                            {isLiked ? (
                                <FaHeart className="icono liked" onClick={Likess} />
                            ) : (
                                <FaRegHeart className="icono" onClick={Likess} />
                            )}
                            <FaRegComment className="icono" onClick={() => setModalVisible(true)} />
                            <FaRegPaperPlane className="icono" />
                        </div>
                        <div className="iconos-derecha">
                            <FaRegBookmark className="icono" />
                        </div>
                    </div>

                    <div className="interaccion-info">
                        <div className="likes">
                            <span>{likes} Me gusta</span>
                        </div>
                        <div className="comentarios">
                            <span className="usuario">{comentarios[0].usuario}</span>
                            <span className="texto-comentario">{comentarios[0].texto}</span>
                        </div>
                        <div className="ver-comentarios">
                            <span onClick={() => setModalVisible(true)}>
                                Ver los {comentarios.length} comentarios
                            </span>
                        </div>
                        <div className="agregar-comentario">
                            <input 
                                type="text" 
                                placeholder="Agregar un comentario..." 
                                value={nuevoComentario}
                                onChange={(e) => setNuevoComentario(e.target.value)}
                            />
                            <button 
                                className="publicar" 
                                onClick={agregarComentario}
                                disabled={nuevoComentario.trim() === ''}
                            >
                                Publicar
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            
            {modalVisible && (
                <div className="modal-comentarios">
                    <div className="modal-overlay" onClick={() => setModalVisible(false)}></div>
                    <div className="modal-contenido">
                        <button 
                            className="cerrar-modal"
                            onClick={() => setModalVisible(false)}
                        >
                            ×
                        </button>
                        <div className="modal-grid">
                            <div className="modal-carrusel">
                                <div className="carrusel-container">
                                    {images.map((img, index) => (
                                        <img
                                            key={index}
                                            src={img}
                                            alt={`Publicación ${index + 1}`}
                                            className={`carrusel-imagen ${index === currentIndex ? 'active' : ''}`}
                                        />
                                    ))}
                                    <button className="carrusel-button prev" onClick={prevImage}>❮</button>
                                    <button className="carrusel-button next" onClick={nextImage}>❯</button>
                                    <div className="indicadores">
                                        {images.map((_, index) => (
                                            <span
                                                key={index}
                                                className={`indicador ${index === currentIndex ? 'active' : ''}`}
                                                onClick={() => setCurrentIndex(index)}
                                            ></span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="modal-comentarios-seccion">
                                <h2>Comentarios</h2>
                                <div className="lista-comentarios">
                                    {comentarios.map((comentario, index) => (
                                        <div key={index} className="comentario">
                                            <span className="usuario">{comentario.usuario}</span>
                                            <span className="texto">{comentario.texto}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
