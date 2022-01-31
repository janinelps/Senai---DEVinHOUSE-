import React, { useRef } from 'react';
import { useNoticia } from '../../contextos/Noticia/useNoticia';
import { CardJogo } from '../CardJogo';

export const Noticia = () => {
    const elementoTopo = useRef();
    const { noticiaFiltrados } = useNoticia();

    const handleVoltarAoTopo = () => {
        elementoTopo.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div ref={elementoTopo} >
            <div>

                {noticiaFiltrados.length === 0
                    ? 'Nenhum Noticia encontrada.'
                    : noticiaFiltrados.map((noticia) => <CardJogo key={noticia.id} jogo={noticia} />)}
            </div>
            <button onClick={handleVoltarAoTopo}>Voltarrrrrrrrrrr para o topo</button>
        </div>
    );
};
