import logo from './logo.svg';
import './App.css';
import { Gestion } from './componentes/Gestion';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Gestion></Gestion>
      </header>
    </div>
  );
}

export default App;