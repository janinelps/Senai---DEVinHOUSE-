import './App.css';
import { Summary } from './components/summary/index'
import { Repository } from './components/repository/index'
import styles from './components/styles.module.css'
import { useEffect, useState } from 'react';
import {mapToRepoObject} from './data/data-utils'
function App() {
  const [listaRepositoriosState, setRepositorios] = useState([])
  const [idSelecionado] = useState(2)

  useEffect(() => {
    fetch("https://api.github.com/users/janinelps/repos")
        .then((resposta) => resposta.json())
        .then((resultado) => {
            const resultadoMapeado = mapToRepoObject(resultado);
            setRepositorios(resultadoMapeado);
        });
      }, []);

  return (
    <div className='container'>
      <div className="App">
        <h1>
          Meu portfólio Github!
        </h1>
      </div>

      <div className='grid'>
        <Summary img={'https://github.com/janinelps.png'} nome={'NOME'} />

        {listaRepositoriosState.map(evento => {
          return (
            <Repository key={evento.id} className={styles.repository} titulo={`${evento.id} - ${evento.titulo}`} descricao={evento.descricao} destacar={evento.id === idSelecionado} />
          )
        })}
      </div >
    </div >
  );
}

export default App;
