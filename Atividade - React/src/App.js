import './App.css';
import { Summary } from './components/summary/index'
import { Repository } from './components/repository/index'
import styles from './components/styles.module.css'

function App() {
  const lista_repositorios = [{
    id: 1,
    titulo: "Titulo 1 - Lorem Ipsum",
    descricao: "É simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI"
  }, {
    id: 2,
    titulo: "Titulo 2 - Lorem Ipsum",
    descricao: "Quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos."
  }, {
    id: 3,
    titulo: "Titulo 3",
    descricao: " É simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI"
  }, {
    id: 4,
    titulo: "Titulo 4",
    descricao: "Quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos."
  }, {
    id: 5,
    titulo: "Titulo 5",
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


        <ul>
          <Repository titulo={'Lorem Ipsum'} descricao={'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.'} destacar={true} />
          {lista_repositorios.map(evento => {
            return (
              <li className={styles.repository} key={evento.id}>
                <li>{evento.id}-{evento.titulo}</li>
                <li>{evento.descricao}</li>
              </li>
            )
          })}

        </ul >
      </div >
    </div >
  );
}

export default App;
