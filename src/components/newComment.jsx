import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const NewComment = () => {

  const style = {
    width: "100%"
  };

  const URL ='https://resto-app-back-production.up.railway.app/comments'

  const [data, setData] = useState({
    name: "",
    email: "",
    comment: "",
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
      name: "",
      email: "",
      comment: "",
    });
    Swal.fire(
       '¡Muchas Gracias!',
        '¡Tu comentario ha sido enviado con éxito!',
        'success'      
    )
  };

  return (
    <Container className="m3 p5 d-flex flex-column align-items-center justify-content-center">
      <Helmet>
        <title>Restó App - Dejanos tu Comentario</title>
      </Helmet>
      <div className="d-flex flex-column align-items-left justify-content-center p-3 m-5">
        <h1>¡Dejanos tu Comentario!</h1>
        
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
            key="email">
            <Form.Label id="form">
              Correo Electrónico:
            </Form.Label>
            <Form.Control
              name="email"
              value={data.email}
              onChange={handleChange}/>
         </Form.Group>
         <Form.Group
            className="pt-3"
            key="comment">
            <Form.Label id="form">
              Deje aquí su comentario: 
            </Form.Label>
            <textarea
              className="input-group-text"
              style={style}
              aria-label="With textarea"
              name="comment"
              value={data.comment}
              onChange={handleChange}/>
         </Form.Group>

        <Button className="mt-3" onClick={handleSubmit}>
          Enviar
        </Button>
      </div>

    </Container>
  );
};

export default NewComment;
