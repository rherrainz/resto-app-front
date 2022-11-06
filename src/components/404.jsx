import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Container } from "react-bootstrap";

const NotFound = ()=> {
    return (
    <Container className="m3 p5">
        <Helmet>
            <title>Restó App - Todos los Comentarios</title>
        </Helmet>
        <h1>404: Página No Encontrada</h1>
        <Link to="main"><h3>Volver al inicio.</h3></Link>
    </Container>
    );
}

export default NotFound;