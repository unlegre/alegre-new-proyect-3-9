
import './App.css';
import { NavBar } from './components/navbar';
import ItemListContainer from './containers/ItemListContainer';
import {AiOutlineShoppingCart} from 'react-icons/ai';
// importo container
import CounterContainer from "./Container/CounterContainer";
import ItemDetailContainer from './containers/itemDetailContainer';
//import {products} from "./data/products"  modificacion


function App() {
  return (
    <div className="App">
        <NavBar/>
      <header className="App-header">
        < AiOutlineShoppingCart/>
        <ItemListContainer greeting={"Bienvenidos a Nuestra App !!! "} />
        <ItemDetailContainer/>
        <CounterContainer/>
      </header>
    </div>
  );
}

export default App;
