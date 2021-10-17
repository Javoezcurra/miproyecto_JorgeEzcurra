import logo from './logo.svg';
import Navbar from "./Components/Navbar";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Nerdoverse</h1>
        <h2>Tu lugar de compras Geeks!</h2>
        

        <Navbar />

        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Segundo <code>desafío</code> de React en Coder.
        </p>

        <h3>La web va tomando forma</h3>

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
