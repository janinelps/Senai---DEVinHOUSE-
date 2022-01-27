// import { BrowserRouter, Router } from 'react-router-dom';
import './App.css';
import { Header } from './componentes/Header/Header';
import { Jogos } from './componentes/Jogos/Jogos';
import { Noticia } from './componentes/Noticia/Noticias';
import { JogoProvider } from './contextos/Jogo/JogoProvider';
import { NoticiaProvider } from './contextos/Noticia/NoticiaProvider';
import { Paginacao } from './services/paginacao/paginacao-services';

function App() {
  return (
    <>
      <JogoProvider>

        <Header />
        <Paginacao />
        <Jogos />
      </JogoProvider>

      <NoticiaProvider>
        <Noticia />
      </NoticiaProvider>

    </>
  );
}

export default App;
