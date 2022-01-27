import { useJogo } from "../../contextos/Jogo/useJogo";

export const Header = () => {
    const { setBusca } = useJogo()

    return (
        <div>
            <input
                onChange={(evento) => {
                    setBusca(evento.target.value)
                }}
                type='text'
                placeholder='Digite o nome do jogo'
            ></input>
        </div>
    )
}