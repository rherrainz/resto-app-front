import {Navbar,Nav,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';



function Footer() {
    return (
    <Container className="">
        <Navbar bg="light" variant="light fixed-bottom p-1 d-flex">
            <p className="col-md-4 mb-0 text-muted">&copy; 2022 RodDev, Inc</p>
            <Link href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-light text-decoration-none">
            <img src={logo} alt="logo"/>
            </Link>
            <Nav className="justify-content-end fs-6">
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

export default Footer;