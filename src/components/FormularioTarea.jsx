import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState('')
  const [tareas, setTareas] = useState([]);

  const agregarTareas = (e) => {
    e.preventDefault()
    setTareas([...tareas, tarea]);
    setTarea('')
  };

  const borrarTarea = (nombreTarea) => {
    const tareasFiltradas = tareas.filter((item) => item !== nombreTarea);
    setTareas(tareasFiltradas);
  };

  return (
    <section>
      <Form onSubmit={agregarTareas} className="mb-4">
        <Form.Group className="mb-3 d-flex gap-2">
          <Form.Control
            type="text"
            placeholder="Ingresa una tarea"onChange={(e)=> setTarea(e.target.value)} value={tarea}
          />
          <Button variant="success" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas tareas={tareas} borrarTarea={borrarTarea}></ListaTareas>
    </section>
  );
};

export default FormularioTarea;
