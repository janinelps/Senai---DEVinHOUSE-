import { Link } from 'react-router-dom';
import { JogoPropriedadeItem } from './JogoPropriedadeItem';

export const CardJogo = ({ jogo }) => {
  return (
    <div key={jogo.id}>
      <div >
        <img src={jogo.thumbnail} alt={jogo.title} />
      </div>
      <h2 >{jogo.title}</h2>
      <Link to={`detalhe/${jogo.id}`} >
        <button type='button'>Mais informações...</button>
      </Link>
      <div >
        <JogoPropriedadeItem descricaoJogo={jogo.short_description} />
      </div>
    </div >
  );
};

