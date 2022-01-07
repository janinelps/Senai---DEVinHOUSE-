import PropTypes from "prop-types"

export const Repository = ({titulo, descricao, destacar}) => {
    return <article>
        <h3>{titulo}</h3>
        <span>O que é Lorem Ipsum?</span>
        <p>{descricao}</p>
    </article>
}

Repository.propTypes = {
    titulo: PropTypes.string.isRequired,
    descricao: PropTypes.string,
    destacar: PropTypes.bool
}