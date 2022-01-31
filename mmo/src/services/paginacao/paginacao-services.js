import { useJogo } from '../../contextos/Jogo';


export const Paginacao = () => {
    const { pagina, jogosFiltrados, jogo, setPagina } = useJogo();
    const qtdMaximaPaginas = Math.ceil(jogo.current.length / 10);

    const handlePagAnterior = async () => {
        setPagina((pagAtual) => (pagAtual > 1 ? pagAtual - 1 : 1));
    };

    const handleProxPagina = () => {
        setPagina((pagAtual) => (pagAtual >= qtdMaximaPaginas ? qtdMaximaPaginas : pagAtual + 1));
    };

    return (
        <div>
            <div>
                <h1>Todos os jogo ({jogosFiltrados.length})</h1>
                <div >
                    <button onClick={handlePagAnterior}>
                        {`<`}
                    </button>
                    <span>
                        Página {pagina} de {qtdMaximaPaginas}
                    </span>
                    <button onClick={handleProxPagina}>
                        {`>`}
                    </button>
                </div>
            </div>
        </div >
    );
};
