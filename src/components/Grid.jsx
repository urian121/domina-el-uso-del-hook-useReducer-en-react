import { useReducer } from "react";

// El valor inicial separado, ya que lo usaremos en más de un sitio
const initialView = "grid";

// función reductora. recibe:
// - el estado actual
// - la acción que le enviamos con `dispatch`
function reducer(state, action) {
  // aquí toda la lógica para controlar el estado según la `action` recibida
  switch (action.type) {
    case "reset":
      // hacer algo si hemos pasado `type: 'reset'` en `dispatch`
      return initialView;
    case "change":
      // Cambiar entre 'list' y 'grid'
      return state === "grid" ? "list" : "grid";
    default:
      return state;
  }
}

const Grid = () => {
  // ya dentro del componente
  const [view, dispatch] = useReducer(reducer, initialView);

  return (
    <div>
      <p>La vista actual es: {view}</p>
      <button onClick={() => dispatch({ type: "reset" })}>Reset vista</button>
      <button onClick={() => dispatch({ type: "change" })}>
        Cambiar vista
      </button>
    </div>
  );
};

export default Grid;
