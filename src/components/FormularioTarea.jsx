import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";

const FormularioTarea = () => {

    const [tarea, setTarea] = useState('')
    const tareasLocalStorage = JSON.parse(localStorage.getItem('listaTareas')) || []
    const [tareas, setTareas] = useState(tareasLocalStorage)

    useEffect(()=>{
      //todas las lineas que escriba aqui se ejecuten en montaje y actualizacion del componente
      console.log('desde UseEffect')
      localStorage.setItem('listaTareas', JSON.stringify(tareas))
    }, [tareas])

    const handleSubmit= (e)=> {
        e.preventDefault()
        setTareas([...tareas, tarea])
        setTarea('')
    }

    const borrarTarea= (nombreTarea)=>{
      const tareasFiltradas = tareas.filter((item)=> item !== nombreTarea)
      //actualizar el estado tarea
      setTareas(tareasFiltradas)
    }

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex gap-2">
          <Form.Control type="text" placeholder="Ingresa una tarea" onChange={(e)=> setTarea(e.target.value)} value={tarea}/>
          <Button variant="success" type="submit">Enviar</Button>
        </Form.Group>
      </Form>
      <ListaTareas tareas={tareas} borrarTarea={borrarTarea}></ListaTareas>
    </section>
  );
};

export default FormularioTarea;
