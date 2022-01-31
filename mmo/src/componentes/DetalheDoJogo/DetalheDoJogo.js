import { useRef } from "react";


export const DetalheDoJogo = () => {
    const elementoTopo = useRef();

    const handleVoltarAoTopo = () => {
        elementoTopo.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <div>
                <button onClick={handleVoltarAoTopo}>Voltar para o topo</button>
            </div>
        </div>
    )

}