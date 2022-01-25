import './App.css';
import { Mmo } from './components/Mmo';
import { MmoProvider } from './contexts/Mmo/MmoProvider';

function App() {
  return (
    <>
      <MmoProvider>
        <Mmo />
      </MmoProvider>
    </>
  );
}

export default App;
