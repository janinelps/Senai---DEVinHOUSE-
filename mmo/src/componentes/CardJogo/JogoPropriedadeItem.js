import styles from './Jogo.module.css';

export const JogoPropriedadeItem = ({ descricaoJogo }) => {

    return (
        <div className={styles.jogoDescItem}>
            <div className={styles['jogo__spec-value']}>
                <span className={styles.jogoPropriedadeItem}>
                    {descricaoJogo}
                </span>
            </div>
        </div>
    );
};