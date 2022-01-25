import React, { useRef } from 'react';
import { useMmo } from '../../contexts/Mmo/useMmo';
import { Jogo } from '../Jogo';

import styles from './Mmo.module.css';

export const Mmo = () => {
    const elementoTopo = useRef();
    const { mmoFiltrados } = useMmo();

    const handleVoltarAoTopo = () => {
        elementoTopo.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div ref={elementoTopo} className={styles.container}>
            <div>
                {console.log(mmoFiltrados)}
                {mmoFiltrados.length === 0
                    ? 'Nenhum Mmo encontrado'
                    : mmoFiltrados.map((mmo) => <Jogo key={mmo.id} mmo={mmo} />)}
            </div>
            <button onClick={handleVoltarAoTopo}>Voltar para o topo</button>
        </div>
    );
};
