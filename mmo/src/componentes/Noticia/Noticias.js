import React, { useRef } from 'react';
// import { Link } from 'react-router-dom';
import { useNoticia } from '../../contextos/Noticia/useNoticia';
import { CardJogo } from '../CardJogo';

import styles from './Noticia.module.css';

export const Noticia = () => {
    const elementoTopo = useRef();
    const { noticiaFiltrados } = useNoticia();

    const handleVoltarAoTopo = () => {
        elementoTopo.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div ref={elementoTopo} className={styles.container}>
            <div>
                {console.log(noticiaFiltrados + "AQUI NOTICIA")}
                {noticiaFiltrados.length === 0
                    ? 'Nenhum Noticia encontrado'
                    : noticiaFiltrados.map((noticia) => <CardJogo key={noticia.id} jogo={noticia} />)}
            </div>
            <button onClick={handleVoltarAoTopo}>Voltar para o topo</button>
        </div>
    );
};
