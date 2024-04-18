import "./App.css";
import Contador from "./components/Contador";
import Contador2 from "./components/Contador2";
import Tareas from "./components/Tareas";
import Cronometro from "./components/Cronometro";
import Grid from "./components/Grid";
import ContadorMejorado from "./components/ContadorMejorado";
import Contador1 from "./components/Contador1";

function App() {
  return (
    <>
      <h1>El Uso del Hook useReduce</h1>
      <Contador />
      <Contador2 />
      <Tareas />
      <Cronometro />
      <Grid />
      <hr />
      <ContadorMejorado />
      <hr />
      <Contador1 />
    </>
  );
}

export default App;
