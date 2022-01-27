// import { BrowserRouter, Router } from 'react-router-dom';
import './App.css';
import { Jogos } from './componentes/Jogos/Jogos';
import { Noticia } from './componentes/Noticia/Noticias';
import { JogoProvider } from './contextos/Jogo/JogoProvider';
import { NoticiaProvider } from './contextos/Noticia/NoticiaProvider';

function App() {
  return (
    <>
      <NoticiaProvider>
        <Noticia />
      </NoticiaProvider>
      <JogoProvider>
        <Jogos />
      </JogoProvider>
    </>
  );
}

export default App;
