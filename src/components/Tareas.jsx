import { useReducer, useState } from "react";

// Definimos una función reducer llamada tareaReducer que maneja la lógica para agregar y eliminar tareas de la lista.
function tareaReducer(tareas, action) {
  if (action.type === "AGREGAR_TAREA") {
    return [...tareas, action.tarea];
  } else if (action.type === "ELIMINAR_TAREA") {
    return tareas.filter((tarea, index) => index !== action.index);
  } else {
    return tareas;
  }
}

// Componente
function ListaDeTareas() {
  // Estado inicial de las tareas
  const initialState = [];

  /**
   * useReducer(tareaReducer, initialState): Utiliza el hook useReducer de React para gestionar el estado del componente.
   * Toma dos argumentos: 
   * 1. El reducer tareaReducer que define cómo se actualizará el estado en respuesta a las acciones.
   * 2. El estado inicial del initialState que representa el estado inicial de las tareas.

    const [tareas, dispatch]: Utiliza la destructuración de arreglos para asignar dos valores devueltos por useReducer. 
    En este caso, tareas es el estado actual del componente que representa las tareas,
    mientras que la variable dispatch es la función que se utiliza para enviar acciones al reducer y actualizar el estado del componente.
   */

  /**
   * useReducer es un hook de React que administra estados complejos utilizando un reducer y un estado inicial. En [tareas, dispatch], tareas representa el estado actual y dispatch es una función para enviar acciones al reducer y actualizar el estado.
   */
  const [tareas, dispatch] = useReducer(tareaReducer, initialState);

  // Estado local para almacenar la tarea ingresada por el usuario
  const [nuevaTarea, setNuevaTarea] = useState("");

  // Función para manejar el envío del formulario y agregar una nueva tarea
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "AGREGAR_TAREA", tarea: nuevaTarea });
    setNuevaTarea("");
  };

  // Función para manejar la eliminación de una tarea
  const handleDelete = (index) => {
    dispatch({ type: "ELIMINAR_TAREA", index });
  };

  // Renderizar el componente
  return (
    <div>
      <h1>Lista de Tareas</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Agregar nueva tarea"
        />
        &nbsp;
        <button type="submit">Agregar</button>
      </form>
      <ol>
        {tareas.map((tarea, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {tarea} &nbsp;
            <button onClick={() => handleDelete(index)}>Eliminar</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ListaDeTareas;
