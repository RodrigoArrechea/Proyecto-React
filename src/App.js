import "./App.css";

// IMPORTANDO COMPONENTES
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemList/ItemListContainer";

function App() {
  return (
    <>
      <div>
        <header className="App-header">
          <NavBar />
        </header>
        <ItemListContainer text="Bienvenidos a nuestra tienda" />
      </div>
    </>
  );
}

export default App;