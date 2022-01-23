import PropTypes from "prop-types"
import styles from "../styles.module.css"

export const Summary = ({ img, nome }) => {
    return (
        <div className={styles.header}>
            <img className={styles.foto} src={img} alt={nome} />
            <h2 className={styles.nome}>{nome}</h2>
        </div>
    )
}

Summary.propTypes = {
    img: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired
}