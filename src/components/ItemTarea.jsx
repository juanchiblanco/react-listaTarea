import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({nombreTarea, posicion}) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">{posicion+1}. {nombreTarea}<Button variant="danger">Borrar</Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
