import { useEffect, useReducer } from "react";

const initialState = {
  segundos: 0,
  isRunning: false,
};

const reducer = (state, action) => {
  if (action.type === "INCREMENTAR_SEGUNDOS") {
    return { ...state, segundos: state.segundos + 1 };
  } else if (action.type === "TOGGLE_IS_RUNNING") {
    return { ...state, isRunning: !state.isRunning };
  } else if (action.type === "REINICIAR") {
    return { ...initialState };
  } else {
    return state;
  }
};

function Cronometro() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let intervalId;

    if (state.isRunning) {
      intervalId = setInterval(() => {
        dispatch({ type: "INCREMENTAR_SEGUNDOS" });
      }, 100); // Cambiado a 100ms para que avance rápido
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [state.isRunning]);

  const iniciarDetenerCronometro = () => {
    dispatch({ type: "TOGGLE_IS_RUNNING" });
  };

  const reiniciarCronometro = () => {
    dispatch({ type: "REINICIAR" });
  };

  // Formatear los segundos en HH:MM:SS
  const formatearTiempo = () => {
    const horas = Math.floor(state.segundos / 3600);
    const minutos = Math.floor((state.segundos % 3600) / 60);
    const segundosRestantes = state.segundos % 60;

    const formatoHoras = horas.toString().padStart(2, "0");
    const formatoMinutos = minutos.toString().padStart(2, "0");
    const formatoSegundos = segundosRestantes.toString().padStart(2, "0");

    return `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`;
  };

  return (
    <div>
      <p>Tiempo transcurrido:</p>
      <p>
        <strong
          style={{
            fontSize: "80px",
            fontFamily: "Courier, sans-serif",
            color: "#fff",
          }}>
          {formatearTiempo()}
        </strong>
      </p>
      <button onClick={iniciarDetenerCronometro}>
        {state.isRunning ? "Detener" : "Iniciar"}
      </button>
      <button onClick={reiniciarCronometro}>Reiniciar</button>
    </div>
  );
}

export default Cronometro;
