import {Navbar,Nav,Container} from 'react-bootstrap';
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';


function Footer() {
    return (
    <>
        <Navbar bg="dark" variant="dark fixed-bottom container">
            <Container>
            <p className="col-md-4 mb-0 text-muted">&copy; 2022 RodDev, Inc</p>
            <Link href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-light text-decoration-none">
            <FontAwesomeIcon icon={faUtensils} className="light" />
            </Link>
            <Nav className="justify-content-end">
                <Link className='nav-link' to="/">Home</Link>
                <Link className='nav-link' to="newcomment">Dejar Comentario</Link>
                <Link className='nav-link' to="allcomments">Comentarios</Link>
                <Link className='nav-link' to="menu">Menú</Link>
                <Link className='nav-link' to="menu">Editar Menú</Link>
            </Nav>
            </Container>
        </Navbar>
    </>
    );
}

export default Footer;