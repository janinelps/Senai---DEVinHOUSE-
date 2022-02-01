// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { useJogo } from "../../contextos/Jogo/useJogo";
import {
    Container,
    Head,
} from './Header.styles'


export const Header = () => {
    const { setBusca } = useJogo()

    return (
        <>
            <Head>
                <Link to='noticia'>Noticia</Link>
                <Link to='/'>Jogos</Link>
            </Head>
            <Container>
                <input
                    onChange={(evento) => {
                        setBusca(evento.target.value)
                    }}
                    type='text'
                    placeholder='Digite o nome do jogo'
                ></input>
            </Container>
        </>
    )
}