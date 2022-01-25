import { useEffect, useRef, useState } from 'react';
import { filtrarListaPorPagina, filtrarListaPorTermoDeBusca } from '../../helper/mmo';
import { fetchAllMmo } from '../../services/mmo-services';
import { MmoContext } from './MmoContext';

export const MmoProvider = ({ children }) => {
    const [termoBusca, setTermoBusca] = useState('');
    const [mmoFiltrados, setMmoFiltrados] = useState([]);
    const [pagina, setPagina] = useState(1);
    const mmo = useRef([]);

    useEffect(() => {
        // IIFE Imediately Invoked Function Expression
        (async () => {
            const lista = await fetchAllMmo();
            mmo.current = lista;
            console.log(lista)
            setMmoFiltrados(filtrarListaPorPagina(mmo.current, pagina));
        })();
        // :)
        //eslint-disable-next-line
    }, []);

    useEffect(() => {
        setMmoFiltrados(filtrarListaPorTermoDeBusca(mmo.current, termoBusca));
    }, [termoBusca]);

    useEffect(() => {
        setMmoFiltrados(filtrarListaPorPagina(mmo.current, pagina));
    }, [pagina]);

    return (
        <MmoContext.Provider value={{ setTermoBusca, mmo, mmoFiltrados, pagina, setPagina }}>
            {children}
        </MmoContext.Provider>
    );
};
