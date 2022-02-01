import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router';
import { GlobalStyle } from './themes/GlobalStyles';


function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
