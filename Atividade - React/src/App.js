import './App.css';
import { Summary } from './components/summary/index'
import { Repository } from './components/repository/index'
import styles from './components/styles.module.css'

function App() {
  const lista_repositorios = [{
    id: 1,
    titulo: "Titulo",
    descricao: "É simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI"
  }, {
    id: 2,
    titulo: "Titulo",
    descricao: "Quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos."
  }, {
    id: 3,
    titulo: "Titulo",
    descricao: " É simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI"
  }, {
    id: 4,
    titulo: "Titulo",
    descricao: "Quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos."
  }, {
    id: 5,
    titulo: "Titulo",
    descricao: "É simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI"
  },
  ]
  return (
    <div className='container'>
      <div className="App">
        <h1>
          Meu portfólio Github!
        </h1>
      </div>

      <div className='grid'>
        <Summary img={'https://github.com/janinelps.png'} nome={'NOME'} />

        <Repository titulo={'Lorem Ipsum'} descricao={'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.'} destacar={true} />
        {lista_repositorios.map(evento => {
          return (
            <article className={styles.repository}>
              <li className={styles.grid} key={evento.id}>
                <p>{evento.id}-{evento.titulo}</p>
                <p>{evento.descricao}</p>
              </li>
            </article >
          )
        })}
      </div >
    </div >
  );
}

export default App;
