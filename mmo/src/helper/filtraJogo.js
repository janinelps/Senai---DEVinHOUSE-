export const filtrarListaPorTermoDeBusca = (lista, termo) => {
    return lista.filter((jogo) => {
        return new RegExp(termo, 'ig').test(jogo.name);
    });
};

export const filtrarListaPorPagina = (lista, pagina) => {
    const QTD_ITENS = 40;
    return lista.slice(pagina * QTD_ITENS - QTD_ITENS, pagina * QTD_ITENS);
};
