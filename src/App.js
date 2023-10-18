import logo from './logo.svg';
import './App.css';
import { Gestion } from './componentes/Gestion';
import { Tareas } from './componentes/Tareas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* Ejercicio con hook memo */}
        {/* <Tareas/> */}

        {/* Ejercicio con metodo memo para componentes */}
        <Gestion></Gestion>

      </header>
    </div>
  );
}

export default App;