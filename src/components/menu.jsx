import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Container,Table } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";

const Menu = ()=> {
    const [menu, setMenu] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:8080/menu').then((response) => {
         setMenu(response.data.allMenu);
         console.log(response.data.menu);
    });
    }, []);

    return (
    <Container className="m3 p5">
        <Helmet>
            <title>Restó App - Nuestro Menú</title>
        </Helmet>
        <h1>Menu</h1>
        <Table striped bordered hover size="" variant="">
            <thead>
                <tr>
                {/* <th>Ticket id</th> */}
                <th>Tipo</th>
                <th>Plato</th>
                <th>Descripción</th>
                <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                {menu.map((item) => (
                <tr>
                    {/* <td>{item._id}</td> */}
                    <td>{item.type}</td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                </tr>
                ))}
            </tbody>
        </Table>
    </Container>
    );
}

export default Menu;