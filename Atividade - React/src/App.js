import './App.css';
import { Summary } from './components/summary/index'
import { Repository } from './components/repository/index';

function App() {
  return (
    <div className="App">
      <h1>
        Olá, portfolio!
      </h1>
      <Repository />
      <Summary img={'https://github.com/janinelps.png'} nome={'NOME'} />
    </div>
  );
}

export default App;
