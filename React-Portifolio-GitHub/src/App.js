import './App.css';
import { Summary } from './components/summary/index'
import { Repository } from './components/repository/index'
import styles from './components/styles.module.css'
import { useState } from 'react';
import { mapToRepoObject } from './data/data-utils'
function App() {
  const [listaRepositoriosState, setRepositorios] = useState([])
  const [idSelecionado, setIdSelecionado] = useState(0)
  const [nomeUsuario, setNomeUsuario] = useState('janinelps')

  const handleNomeUsuario = (value) => setNomeUsuario(value);
  const handleBuscar = () => fetchDadosDoUsuario()

  const fetchDadosDoUsuario = () => {
    fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
      .then((resposta) => {
        if (!resposta.ok) {
          return resposta.text().then(text => { throw new Error(text) })
        }
        return resposta.json()
      }).catch(error => {
        return [{ id: 0, full_name: 'ERRO AO CONECTAR NO REPOSITÓRIO', description: JSON.parse(error.message).message }]
      })
      .then((resultado) => {
        const resultadoMapeado = mapToRepoObject(resultado);
        setRepositorios(resultadoMapeado);
      })
  }

  const selecionarProjeto = (id) => {
    console.log(id)
    setIdSelecionado(id)
  }
  return (
    <div className='container'>
      <div className="App">
        <h1>
          Meu portfólio Github!
        </h1>
      </div>
      <div className='grid'>
        <Summary img={`https://github.com/${nomeUsuario}.png`} nome={nomeUsuario} />
        <input type="text" onChange={(event) => handleNomeUsuario(event.target.value)} value={nomeUsuario} />
        <button type='button' onClick={() => handleBuscar()}>Buscar</button>
        <section className={styles.repository} >
            {listaRepositoriosState.map(evento => {
              return (
                <Repository selecionarProjeto={selecionarProjeto} key={evento.id} className={styles.repository} id={evento.id} titulo={evento.titulo} descricao={evento.descricao} destacar={evento.id === idSelecionado} />
              )
            })}
        </section >
      </div >
    </div >
  );
}

export default App;
