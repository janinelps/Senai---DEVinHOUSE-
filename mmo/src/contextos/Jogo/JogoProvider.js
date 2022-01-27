import { useEffect, useRef, useState } from 'react';
import { filtrarListaPorPagina, filtrarListaPorTermoDeBusca } from '../../helper/filtraJogo';
import { fetchAllJogos } from '../../services/jogo-services';
import { JogoContext } from './JogoContext';

export const JogoProvider = ({ children }) => {
    const [termoBusca, setTermoBusca] = useState('');
    const [jogosFiltrados, setJogosFiltrados] = useState([]);
    const [pagina, setPagina] = useState(1);
    const jogo = useRef([]);

    useEffect(() => {

        (async () => {

            const lista = await fetchAllJogos('games');

            jogo.current = lista;
            setJogosFiltrados(filtrarListaPorPagina(jogo.current, pagina));
        })();
    }
        // eslint-disable-next-line
        , []);

    useEffect(() => {
        setJogosFiltrados(filtrarListaPorTermoDeBusca(jogo.current, termoBusca));
    }, [termoBusca]);

    useEffect(() => {
        setJogosFiltrados(filtrarListaPorPagina(jogo.current, pagina));
    }, [pagina]);

    return (
        <JogoContext.Provider value={{ setTermoBusca, jogo, jogosFiltrados, pagina, setPagina }}>
            {children}
        </JogoContext.Provider>
    );
};
