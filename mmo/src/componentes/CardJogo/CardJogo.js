import styles from './Jogo.module.css';
import { JogoPropriedadeItem } from './JogoPropriedadeItem';

export const CardJogo = ({ jogo }) => {
  return (
    <div className={styles['jogo']} key={jogo.id}>
      <div className={styles.thumbnail}>
        <img className={styles.image} src={jogo.thumbnail} alt={jogo.title} />
      </div>
      <h2 className={styles['jogo__title']}>{jogo.title}</h2>
      <button type='button' className={styles['button']}>Mais informações...</button>
      <div className={styles.description}>
        <JogoPropriedadeItem descricaoJogo={jogo.short_description} />
      </div>
    </div>
  );
};

