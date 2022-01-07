import './App.css';
import { Summary } from './components/summary/index'
import { Repository } from './components/repository/index';

function App() {
  return (
    <div className="App">
      <h1>
        Olá, portfolio!
      </h1>
      <Repository titulo={'Lorem Ipsum'} descricao={'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.'} destacar={true} />

      <Summary img={'https://github.com/janinelps.png'} nome={'NOME'} />
    </div>
  );
}

export default App;
