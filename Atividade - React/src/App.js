import './App.css';
import { Summary } from './components/summary/index'
import { Repository } from './components/repository/index';

function App() {
  const lista_repositorios = [{
    id: 1,
    titulo: "Titulo 1",
    descricao: "Teste 1"
  }, {
    id: 2,
    titulo: "Titulo 2",
    descricao: "Teste 2"
  }, {
    id: 3,
    titulo: "Titulo 3",
    descricao: "Teste 3"
  }, {
    id: 4,
    titulo: "Titulo 4",
    descricao: "Teste 4"
  }, {
    id: 5,
    titulo: "Titulo 5",
    descricao: "Teste 5"
  }]

  return (
    <div className="App">
      <h1>
        Meu portfólio Github!
      </h1>

      {lista_repositorios.length === 0 && <h1>Nenhum repositório disponível.</h1>}
      {lista_repositorios.map(evento => <p key={evento.id}>{evento.id}-{evento.titulo}-{evento.descricao}</p>
      )}

      <Repository titulo={'Lorem Ipsum'} descricao={'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.'} destacar={true} />

      <Summary img={'https://github.com/janinelps.png'} nome={'NOME'} />
    </div>
  );
}

export default App;
