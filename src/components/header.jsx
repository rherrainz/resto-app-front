import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

function Header() {
    return (
    <Container>
        <Navbar bg="light" variant="light fixed-top p-2">
            
            <Link to="/" className='navbar-brand'>
                <img src={logo} alt="logo"/>
            </Link>
            <Nav className="me-auto">
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="newcomment">Dejar Comentario</Link>
                <Link className='nav-link' to="allcomments">Comentarios</Link>
                <Link className='nav-link' to="menu">Menú</Link>
                <Link className='nav-link' to="addmenuitem">Agregar Item al Menú</Link>
            </Nav>
            
        </Navbar>
    </Container>
    );
}

export default Header;