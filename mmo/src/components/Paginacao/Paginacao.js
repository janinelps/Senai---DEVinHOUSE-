import { useMmo } from '../../contexts/Mmo';
import styles from '../Mmo/Mmo.module.css';

export const Paginacao = () => {
    const { pagina, mmoFiltrados, mmo, setPagina } = useMmo();
    const qtdMaximaPaginas = Math.ceil(mmo.current.length / 40);

    const handlePagAnterior = async () => {
        setPagina((pagAtual) => (pagAtual > 1 ? pagAtual - 1 : 1));
    };

    const handleProxPagina = () => {
        setPagina((pagAtual) => (pagAtual >= qtdMaximaPaginas ? qtdMaximaPaginas : pagAtual + 1));
    };

    return (
        <div className={styles.container}>
            <div className={styles.sectionTitle}>
                <h1 className={styles.pageTitle}>Todos os mmo ({mmoFiltrados.length})</h1>
                <div className={styles.pagination}>
                    <button className={styles.pageButton} onClick={handlePagAnterior}>
                        {`<`}
                    </button>
                    <span>
                        Página {pagina} de {qtdMaximaPaginas}
                    </span>
                    <button className={styles.pageButton} onClick={handleProxPagina}>
                        {`>`}
                    </button>
                </div>
            </div>
        </div>
    );
};
