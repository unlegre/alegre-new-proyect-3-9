
import './App.css';
import { NavBar } from './components/navbar';
import ItemListContainer from './containers/ItemListContainer';
import {AiOutlineShoppingCart} from 'react-icons/ai';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">

        <p>
        </p>
        < AiOutlineShoppingCart />
        <ItemListContainer greeting={"Bienvenidos a Nuestra App !!! "} />
    
      </header>
    </div>
  );
}

export default App;
