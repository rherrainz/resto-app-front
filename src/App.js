import { Route,Routes } from "react-router";
import {Helmet, HelmetProvider} from "react-helmet-async";
import Main from './components/main';
import AllComments from "./components/allComments";
import NewComment from "./components/newComment";
import Header from "./components/header";
import Footer from "./components/footer";
import Menu from "./components/menu";
import AddMenuItem from "./components/addMenuItem";
import NotFound from "./components/NotFound";
import { Container } from "react-bootstrap";


function App() {
  return (
    <HelmetProvider>
      <div className="App container">
        <Helmet>
          <title>Restó App</title>
        </Helmet>
        <Header /> 
        <Container> 
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Main />} />
            <Route path="allcomments" element={<AllComments />} />
            <Route path="newcomment" element={<NewComment />} />
            <Route path="menu" element={<Menu />} /> 
            <Route path="addmenuitem" element={<AddMenuItem />} />
          </Routes>
        </Container> 
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
