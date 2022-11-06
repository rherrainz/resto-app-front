import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Container } from "react-bootstrap";

const Menu = ()=> {
    return (
    <Container className="m3 p5">
        <Helmet>
            <title>Restó App - Nuestro Menú</title>
        </Helmet>
        <h1>Menu</h1>
        <Link to="/"><h3>Volver al inicio.</h3></Link>
    </Container>
    );
}

export default Menu;