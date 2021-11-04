import logo from './logo.svg';
import Navbar from "./Components/Navbar";
import ItemListContainer from "./Components/ItemListContainer";
import ItemCount from "./Components/botones/ItemCount";
import {Itemlist} from "./Components/Itemlist";
import './App.css';
import ItemDetail from './Components/ItemDetailContainer/ItemDetail';

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
          Quinto <code>desafío</code> de React en Coder.
        </p>

        <h3>La web va tomando forma</h3>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         
        </a>
        <img src="https://p4.wallpaperbetter.com/wallpaper/518/184/909/geek-video-games-wallpaper-preview.jpg" />
      </header>
      
      <div>

      <Itemlist />

      </div>

      <div className="item-container">

     <ItemDetail 
     
     className="items"
     name={"Termo Stanley"}
     description={"Termo Stanley disponibles en 3 colores"}
     precio={"$6.000"}
     img={"https://d3ugyf2ht6aenh.cloudfront.net/stores/650/868/products/urfyt1-7831a48faf9f3dad8c15985357908350-640-0.jpg"}/>

     

     
    <ItemDetail 
    className="items"
     name={"Mesa Suskick"}
     description={"Elegante mesa de exteriores"}
     precio={"$12.000"}
     img={"https://cdn2.jysk.com/getimage/wd2.medium/133860"}/>
    
    
    
    <ItemDetail 
    className="items"
     name={"Asus Rog Strix Gaming (usada)"}
     description={"Potente computadora para el trabajo y la diversión"}
     precio={"$180.000"}
     img={"https://www.soscomputacion.com.ar/18633-large_default/notebook-gamer-asus-rog-strix-gaming-intel-i5-9300h-ddr4-8gb-512gb-ssd-nvidia-1650gtx-bfull-hd-windows-10.jpg"}/>
     
     </div>

      <div className="Counts">

      <ItemCount className="co1"/> 

      <ItemCount className="co2"/> 

      <ItemCount className="co3"/> 

      </div>

    </div>
  );
}

export default App;
