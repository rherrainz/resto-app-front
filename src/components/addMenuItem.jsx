import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Container,Form,Button } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

const AddMenuItem = ()=> {

  
  const URL ='https://resto-app-back-production.up.railway.app/menu/'

    const [data, setData] = useState({
        type: "",
        name: "",
        description: "",
        price: "",
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setData((prevState) => {
          return {
            ...prevState,
            [name]: value,
          };
        });
      };
    
      const handleSubmit = async () => {
        await axios.post(URL, data);
        setData({
            type: "",
            name: "",
            description: "",
            price: "",
        });
        Swal.fire(
          '¡Muchas Gracias!',
           '¡El artículo ha sido agregado con éxito',
           'success'      
       )
      };

    return (
    <Container className="m3 p5 d-flex flex-column align-items-center justify-content-center">
        <Helmet>
            <title>Restó App - Agregar Ítem al Menú</title>
        </Helmet>
        <div className="d-flex flex-column align-items-left justify-content-center p-3 m-5">
        <h1>Agregar Artículo al Menú: </h1>
        <Form.Select
            aria-label="Default select example"
            key="type"
            name="type"
            value={data.type}
            onChange={handleChange}>
                <option selected>Seleccione el tipo de Artículo</option>
                <option value="entrada">Entrada</option>
                <option value="principal">Plato Principal</option>
                <option value="guarniciones">Guarniciones</option>
                <option value="postre">Postre</option>
                <option value="bebidas">Bebidas</option>
         </Form.Select>
        <Form.Group
            className="pt-3"
            key="name">
            <Form.Label id="form">
              Nombre
            </Form.Label>
            <Form.Control
              name="name"
              value={data.name}
              onChange={handleChange}/>
         </Form.Group>
         <Form.Group
            className="pt-3"
            key="description">
            <Form.Label id="form">
              Descripción:
            </Form.Label>
            <Form.Control
              name="description"
              value={data.description}
              onChange={handleChange}/>
         </Form.Group>
         <Form.Group
            className="pt-3"
            key="price"
            >
            <Form.Label id="form">
              Precio:
            </Form.Label>
            <Form.Control
              className="text-center"
              name="price"
              type="number"
              value={data.price}
              onChange={handleChange}/>
         </Form.Group>
         <Button className="mt-3" onClick={handleSubmit}>
          Enviar
        </Button>
        </div>
    </Container>
    );
}

export default AddMenuItem;