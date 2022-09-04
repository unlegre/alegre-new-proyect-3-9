
import './App.css';
import { NavBar } from './components/navbar';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">

        <p>
        Mi app nueva !!!
        
        </p>
        <ItemListContainer greeting={"Bienvenidos a Nuestra App !!! "} />

      </header>
    </div>
  );
}

export default App;
