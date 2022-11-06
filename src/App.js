import { Route,Routes } from "react-router";
import {Helmet, HelmetProvider} from "react-helmet-async";
import Main from './components/main';
import AllComments from "./components/allComments";
import NewComment from "./components/newComment";
import Header from "./components/header";
import Footer from "./components/footer";
import Menu from "./components/menu";
import EditMenu from "./components/editMenu";
import NotFound from "./components/404";


function App() {
  return (
    <HelmetProvider>
      <div className="App container">
        <Helmet>
          <title>Restó App</title>
        </Helmet>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="allcomments" element={<AllComments />} />
          <Route path="newcomment" element={<NewComment />} />
          <Route path="menu" element={<Menu />} />
          <Route path="editmenu" element={<EditMenu />} />
          <Route path="*" element={NotFound} />
        </Routes>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
