import { Helmet } from "react-helmet-async";
import { Container,Table } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";

const Menu = ()=> {
    const [menu, setMenu] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:8080/menu').then((response) => {
         setMenu(response.data.allMenu);
    });
    }, []);

    return (
      <Container className="m3 p5 d-flex flex-column align-items-center justify-content-center">
        <Helmet>
          <title>Restó App - Nuestro Menú</title>
        </Helmet>
        <div className="d-flex flex-column align-items-left justify-content-center p-3 m-5">
          <h1>Nuestro Menú</h1>
          <Container>
            <h2>Entradas</h2>
            <Table striped bordered hover size="" variant="">
              <thead>
                <tr className="text-center">
                  {/* <th>Ticket id</th> */}

                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody>
                {menu
                  .filter((item) => item.type === "entrada")
                  .map((filteredItem) => (
                    <tr>
                      {/* <td>{item._id}</td> */}
                      <td>{filteredItem.name}</td>
                      <td>{filteredItem.description}</td>
                      <td className="text-end">$ {filteredItem.price}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Container>
          <Container>
            <h2>Platos Principales</h2>
            <Table striped bordered hover size="" variant="">
              <thead>
                <tr className="text-center">
                  {/* <th>Ticket id</th> */}
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody>
                {menu
                  .filter((item) => item.type === "principal")
                  .map((filteredItem) => (
                    <tr>
                      {/* <td>{item._id}</td> */}
                      <td>{filteredItem.name}</td>
                      <td>{filteredItem.description}</td>
                      <td className="text-end">$ {filteredItem.price}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Container>
          <Container>
            <h2>Guarniciones</h2>
            <Table striped bordered hover size="" variant="">
              <thead>
                <tr className="text-center">
                  {/* <th>Ticket id</th> */}
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody>
                {menu
                  .filter((item) => item.type === "guarniciones")
                  .map((filteredItem) => (
                    <tr>
                      {/* <td>{item._id}</td> */}
                      <td>{filteredItem.name}</td>
                      <td>{filteredItem.description}</td>
                      <td className="text-end">$ {filteredItem.price}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Container>
          <Container>
            <h2>Postres</h2>
            <Table striped bordered hover size="" variant="">
              <thead>
                <tr className="text-center">
                  {/* <th>Ticket id</th> */}
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody>
                {menu
                  .filter((item) => item.type === "postre")
                  .map((filteredItem) => (
                    <tr>
                      {/* <td>{item._id}</td> */}
                      <td>{filteredItem.name}</td>
                      <td>{filteredItem.description}</td>
                      <td className="text-end">$ {filteredItem.price}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Container>
          <Container>
            <h2>Bebidas</h2>
            <Table striped bordered hover size="" variant="">
              <thead>
                <tr className="text-center">
                  {/* <th>Ticket id</th> */}
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody>
                {menu
                  .filter((item) => item.type === "bebidas")
                  .map((filteredItem) => (
                    <tr>
                      {/* <td>{item._id}</td> */}
                      <td>{filteredItem.name}</td>
                      <td>{filteredItem.description}</td>
                      <td className="text-end">$ {filteredItem.price}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Container>
        </div>
      </Container>
    );
}

export default Menu;