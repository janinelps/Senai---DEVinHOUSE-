import { useEffect, useRef, useState } from 'react';

import { fetchAllJogos } from '../../services/jogo-services';
import { NoticiaContext } from './NoticiaContext';

export const NoticiaProvider = ({ children }) => {
    // const [termoBusca, setTermoBusca] = useState('');
    // const [noticiaFiltrados, setNoticiaFiltrados] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [noticia, setNoticia] = useState([]);

    useEffect(() => {

        (async () => {
            const lista = await fetchAllJogos('latestnews');
            setNoticia((l) => l = lista)
        })();
    }
        // eslint-disable-next-line
        , []);

    console.log(noticia)
    return (
        <NoticiaContext.Provider value={{ noticiaFiltrados: noticia, pagina, setPagina }}>
            {children}
        </NoticiaContext.Provider>
    );
};
