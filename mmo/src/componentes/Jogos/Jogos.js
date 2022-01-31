import React, { useRef } from 'react';
import { useJogo } from '../../contextos/Jogo/useJogo';
import { CardJogo } from '../CardJogo';

export const Jogos = () => {
    const elementoTopo = useRef();
    const { jogosFiltrados } = useJogo();

    const handleVoltarAoTopo = () => {
        elementoTopo.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div ref={elementoTopo}>
            <div>
                {jogosFiltrados.length === 0
                    ? 'Nenhum jogo encontrado'
                    : jogosFiltrados.map((jogo) => <CardJogo key={jogo.id} jogo={jogo} />)}
            </div>
            <button onClick={handleVoltarAoTopo}>Voltar para o topo</button>
        </div>
    );
};
