import styles from './Jogo.module.css';

const COLOR_MAP = {
  fire: '#ff8744',
  grass: '#436147',
  rock: '#727272',
  water: '#80C5F8',
  electric: '#F5E443',
  ground: '#6C400D',
  psychic: '#D3A9E7',
  ice: '#006CBB',
  flying: '#8B8B8B',
  bug: '#15994A',
  poison: '#765757',
};

export const Jogo = ({ mmo }) => {
  return (
    <div className={styles['jogo']} key={mmo.id}>
      <div className={styles.thumbnail}>
        <img className={styles.image} src={mmo.main_image} alt={mmo.title} />
      </div>
      <h2 className={styles['jogo__title']}>{mmo.title}</h2>
      <div className={styles.description}>
        <MmoPropertiesItem title="short_description:" property={mmo.short_description} />
        <MmoPropertiesItem title="article_content:" property={mmo.article_content} />
      </div>
    </div>
  );
};

const MmoPropertiesItem = ({ title, property }) => {
  return (
    <div className={styles.jogoDescItem}>
      <span className={styles['jogo__spec-title']}>{title}</span>
      <div className={styles['jogo__spec-value']}>
        <span key={property} className={styles.mmoPropertyItem} style={{ color: COLOR_MAP[property] }}>
          {property}
        </span>
        )
      </div>
    </div>
  );
};
