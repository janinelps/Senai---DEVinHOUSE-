import PropTypes from "prop-types"
import styles from '../styles.module.css'

export const Repository = ({ titulo, descricao, destacar }) => {
    return (
        <div className={styles.repository}>
            <article className={styles.grid}>
                <div>
                    <h3 className={styles.titulo}>{titulo}</h3>
                    {destacar && <span className={styles.destacar}>Projeto em Destaque!!</span>}
                </div>
                <p className={styles.descricao}>{descricao}</p>
            </article>
        </div >

    )
}

Repository.propTypes = {
    titulo: PropTypes.string.isRequired,
    descricao: PropTypes.string,
    destacar: PropTypes.bool
}