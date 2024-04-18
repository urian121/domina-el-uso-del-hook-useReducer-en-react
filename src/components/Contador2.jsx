import { useReducer } from "react";

const initialState = { count: 0 };

/**
 * state, el estado de nuestro componente, antes de realizar algun cambio.
 * ation, es un objeto con estos 2 elementos: type y payload
 * - type el nombre del evento que cambiara nuestro estado.
 * - payload, es opcional y puede ser cualquier tipo de dato. Lo podemos utilizar para enviar datos adicionales a nuestro reducer.
 */
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return {
        count: state.count === 0 ? state.count : state.count - 1,
      };
    case "SET_COUNT":
      return { count: action.payload };
    default:
      throw new Error();
  }
}

function Counter2() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setCount = (newCount) => {
    dispatch({ type: "SET_COUNT", payload: newCount });
  };

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment
      </button>{" "}
      &nbsp;
      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrement
      </button>{" "}
      &nbsp;
      <button onClick={() => setCount(10)}>Set Count to 10</button>
    </div>
  );
}

export default Counter2;
