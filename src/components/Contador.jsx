import { useReducer } from "react";

/**
 * contadorReducer: Es la función reducer que especifica cómo el estado del contador debería cambiar en respuesta a las diferentes acciones.
 * Recibe el estado actual y una acción, y devuelve el nuevo estado.
 * Definimos una función reducer llamada contadorReducer que toma un estado y una acción, y devuelve el nuevo estado basado en la acción.
 */
function contadorReducer(state, action) {
  switch (action.type) {
    case "AUMENTAR":
      return state + 1;
    case "DISMINUIR":
      if (state === 0) {
        // Devolver el estado sin modificar si ya está en 0
        return state;
      }
      // Restar 1 al estado si no está en 0
      return state - 1;
    case "RESETEAR":
      return 0;
    default:
      return state;
  }
}

//  Creamos un componente Contador que utiliza useReducer para manejar el estado del contador.
function Contador() {
  // initialState: Es el estado inicial del contador. para este caso se inicializa en 0, pero podría ser cualquier valor inicial que desees para tu contador.
  const initialState = 0;

  // Uso de useReducer para manejar el estado del contador
  /**
   * const [contador, dispatch]: Aquí se están utilizando destructuración de arreglos para asignar los valores devueltos por useReducer.
   * El contador será el estado actual del contador, mientras que dispatch será la función que se utiliza para enviar acciones al reducer y actualizar el estado del contador.
   */
  const [contador, dispatch] = useReducer(contadorReducer, initialState);

  /**
   * Renderizamos el valor del contador y tres botones: "Aumentar", "Disminuir" y "Resetear".
   * Cada botón ejecuta una función dispatch con un objeto de acción que contiene el tipo de acción que queremos realizar (aumentar, disminuir o resetear el contador). Dependiendo del tipo de acción, el reducer actualiza el estado en consecuencia.
   */
  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => dispatch({ type: "AUMENTAR" })}>Aumentar</button>
      &nbsp;
      <button onClick={() => dispatch({ type: "DISMINUIR" })}>Disminuir</button>
      &nbsp;
      <button onClick={() => dispatch({ type: "RESETEAR" })}>Resetear</button>
    </div>
  );
}

/**
 * En resumen, esta línea de código inicializa el estado del contador utilizando useReducer, donde contador es el estado actual del contador y dispatch es una función que se utiliza para enviar acciones al reducer y actualizar el estado del contador según las reglas definidas en contadorReducer.
 */
export default Contador;
