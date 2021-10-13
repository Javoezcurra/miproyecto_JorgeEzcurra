import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sea bienvenido a la primera prueba</h1>
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Segunda <code>clase</code> de React en Coder.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Primer desafio
        </a>
      </header>
    </div>
  );
}

export default App;
