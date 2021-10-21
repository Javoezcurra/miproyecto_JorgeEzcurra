import logo from './logo.svg';
import Navbar from "./Components/Navbar";
import ItemListContainer from "./Components/ItemListContainer";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Nerdoverse</h1>

        <Navbar />

        <h2>Tu lugar de compras Geeks!</h2>
        


        <ItemListContainer 
        
        bienvenida={"Bienvenidos al multiverso nerd!"}
        bienvenida2={"El nerdoverse esta repleto de misterios!"}
          
        />

        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Cuarto <code>desafío</code> de React en Coder.
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
