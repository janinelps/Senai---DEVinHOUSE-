import styles from './Jogo.module.css';

export const JogoPropriedadeItem = ({ descricaoJogo }) => {

    return (
        <div>
            <div>
                <span>
                    {descricaoJogo}
                </span>
            </div>
        </div>
    );
};