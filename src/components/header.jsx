import { Navbar, Nav, Container } from 'react-bootstrap';
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

function Header() {
    return (
    <>
        <Navbar bg="dark" variant="dark fixed-top container">
            <Container>
            <Link to="/" className='navbar-brand'>
                <FontAwesomeIcon icon={faUtensils} className="light" />
            </Link>
            <Nav className="me-auto">
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

export default Header;