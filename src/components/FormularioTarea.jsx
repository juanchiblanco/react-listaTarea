import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

const FormularioTarea = () => {

    const [tarea, setTarea] = useState('')
    const [tareas, setTareas] = useState([])

    const handleSubmit= (e)=> {
        e.preventDefault()
        setTareas([...tareas, tarea])
        setTarea('')
    }

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex gap-2">
          <Form.Control type="text" placeholder="Ingresa una tarea" onChange={(e)=> setTarea(e.target.value)} value={tarea}/>
          <Button variant="success" type="submit">Enviar</Button>
        </Form.Group>
      </Form>
      <ListaTareas></ListaTareas>
    </section>
  );
};

export default FormularioTarea;
