// import { BrowserRouter, Router } from 'react-router-dom';
import './App.css';
import { Header } from './componentes/Header/Header';
import { Jogos } from './componentes/Jogos/Jogos';
import { Noticia } from './componentes/Noticia/Noticias';
import { JogoProvider } from './contextos/Jogo/JogoProvider';
import { NoticiaProvider } from './contextos/Noticia/NoticiaProvider';

function App() {
  return (
    <>
      <JogoProvider>
        <Header />
        <Jogos />
      </JogoProvider>
      <NoticiaProvider>
        <Noticia />
      </NoticiaProvider>

    </>
  );
}

export default App;
