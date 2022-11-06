import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Container } from "react-bootstrap";

const NotFound = ()=> {
    return (
    <Container className="m3 p5 d-flex flex-column align-items-center justify-content-center">
        <Helmet>
            <title>Restó App - Pagina No Encontrada</title>
        </Helmet>
        <div className="d-flex flex-column align-items-center justify-content-center p-3 m-5">
            <h1>404: Página No Encontrada</h1>
            <p>Lo sentimos, la página que estás buscando no existe.</p>
        </div>
        <Link to="/" className="btn btn-primary">Volver al Inicio</Link>
        
    </Container>
    );
}

export default NotFound;