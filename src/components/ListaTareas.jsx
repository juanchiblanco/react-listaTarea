import ListGroup from "react-bootstrap/ListGroup";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({tareas}) => {
  return (
    <ListGroup>
      {
        tareas.map((item, indice)=> <ItemTarea key={indice} nombreTarea={item} posicion={indice}></ItemTarea>)
      }
    </ListGroup>
  );
};

export default ListaTareas;
