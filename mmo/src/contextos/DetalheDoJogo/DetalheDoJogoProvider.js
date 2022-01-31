import { useEffect, useRef, useState } from "react"
import { DetalheDoJogoContext } from "./DetalheDoJogoContext";
import { fetchAllJogos } from "../../services/jogo-services";
import { Link, useParams } from "react-router-dom";
import { Formulario } from "../../componentes/Formulario/Formulario";
import { JogoPropriedadeItem } from "../../componentes/CardJogo";

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

        <div key={detalheJogo.id}>
            <div >
                <img src={detalheJogo.thumbnail} alt={detalheJogo.title} />
            </div>
            <h2>{detalheJogo.title}</h2>
            <JogoPropriedadeItem descricaoJogo={detalheJogo.short_description} />
            <Formulario />

        </div>
    )
}