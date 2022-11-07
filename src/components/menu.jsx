import { Helmet } from "react-helmet-async";
import { Container,Table,Button } from "react-bootstrap";
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
          <h1 className="text-center">Nuestro Menú</h1>
          <Container>
            <h2>Entradas</h2>
            <Table striped bordered hover size="" variant="">
              <thead>
                <tr className="text-center">
                  {/* <th>Ticket id</th> */}

                  <th className="col-3">Nombre</th>
                  <th className="col-5">Descripción</th>
                  <th className="col-2">Precio</th>
                  <th className="col-2">Opciones</th>
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
                      <td className='d-grid gap-2 d-md-flex justify-content-md-center'>
                        <Button className='btn btn-success btn-sm'>Editar</Button>
                        <Button className='btn btn-danger btn-sm'>Borrar</Button>
                      </td>
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
                  <th className="col-3">Nombre</th>
                  <th className="col-5">Descripción</th>
                  <th className="col-2">Precio</th>
                  <th className="col-2">Opciones</th>
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
                      <td className='d-grid gap-2 d-md-flex justify-content-md-center'>
                        <Button className='btn btn-success btn-sm'>Editar</Button>
                        <Button className='btn btn-danger btn-sm'>Borrar</Button>
                    </td>
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
                  <th className="col-3">Nombre</th>
                  <th className="col-5">Descripción</th>
                  <th className="col-2">Precio</th>
                  <th className="col-2">Opciones</th>
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
                      <td className='d-grid gap-2 d-md-flex justify-content-md-center'>
                        <Button className='btn btn-success btn-sm'>Editar</Button>
                        <Button className='btn btn-danger btn-sm'>Borrar</Button>
                    </td>
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
                  <th className="col-3">Nombre</th>
                  <th className="col-5">Descripción</th>
                  <th className="col-2">Precio</th>
                  <th className="col-2">Opciones</th>
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
                      <td className='d-grid gap-2 d-md-flex justify-content-md-center'>
                        <Button className='btn btn-success btn-sm'>Editar</Button>
                        <Button className='btn btn-danger btn-sm'>Borrar</Button>
                    </td>
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
                  <th className="col-3">Nombre</th>
                  <th className="col-5">Descripción</th>
                  <th className="col-2">Precio</th>
                  <th className="col-2">Opciones</th>
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
                      <td className='d-grid gap-2 d-md-flex justify-content-md-center'>
                        <Button className='btn btn-success btn-sm'>Editar</Button>
                        <Button className='btn btn-danger btn-sm'>Borrar</Button>
                    </td>
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