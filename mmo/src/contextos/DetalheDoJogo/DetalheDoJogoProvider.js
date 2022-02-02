import { useEffect, useState } from "react"
import { fetchAllJogos } from "../../services/jogo-services";
import { useParams } from "react-router-dom";
import { Formulario } from "../../componentes/Formulario/Formulario";
import { JogoPropriedadeItem } from "../../componentes/CardJogo";
import { Container } from "../../services/services.styles";
import {
    Thumbnail,
    CardTitle,

} from "../../componentes/CardJogo/Jogo.styles";

export const DetalheDoJogoProvider = ({ jogo }) => {

    const [detalheJogo, setDetalheJogo] = useState({});
    const { id } = useParams();

    useEffect(() => {

        (async () => {
            const detalhe = await fetchAllJogos(`/game?id=${id}`);
            setDetalheJogo(detalheJogo => detalheJogo = detalhe)

        })()
    },
        [])

    return (

        <Container key={detalheJogo.id}>
            <Thumbnail >
                <img src={detalheJogo.thumbnail} alt={detalheJogo.title} />
            </Thumbnail>
            <CardTitle>{detalheJogo.title}</CardTitle>
            <JogoPropriedadeItem descricaoJogo={detalheJogo.short_description} />
            <Formulario />

        </Container>
    )
}