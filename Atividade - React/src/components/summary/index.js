import PropTypes from "prop-types"

export const Summary = ({img, nome}) => {
    return (
        <div>
            <img src={img} alt={nome} />
            <h2>{nome}</h2>
        </div>
    )
}

Summary.propTypes = {
    img: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired
}