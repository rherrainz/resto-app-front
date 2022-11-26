import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import logo from "../assets/logo.svg";
import collage from  "../assets/collage.png"

function Main() {

    const divStyle ={
        backgroundImage:`url(${collage}`,
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }

    return (
      <Container classNameName="m-3 p-5 d-flex">
        <Helmet>
          <title>Restó App - Bienvenido!</title>
        </Helmet>
        <main classNameName="container align-items-center p-6">
          <div className="p-3 p-md-5 m-md-3 text-center align-items-center text-dark shadow-sm" style={divStyle}>
            <div className="col-md-12 p-lg-5 mx-auto my-5 bg-light bg-opacity-75">
              <h1 className="display-4 fw-normal">¡Bienvenido a Restó!</h1>
              <p className="lead fw-normal">
                Podrás disfrutar de la mejor comida tradicional de la región.
              </p>
              <img src={logo} style={{height:"150px"}} alt="logo" />
              <br></br>
              <Link className="btn btn-outline-dark shadow-sm" to="/menu">
                Presiona aquí para ver el menú
              </Link>
            </div>      
          </div>
        </main>
      </Container>
    );
}

export default Main;