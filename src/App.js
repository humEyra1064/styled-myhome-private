import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import People from "./pages/People";

const App = () => {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" elemen={<Home/>}/>
      <Route path="/people" elemen={<People/>}/>
      <Route path="/contact" elemen={<Contact/>}/>
      <Route path="/login" elemen={<Login/>}/>
      <Route path="*" elemen={<NotFound/>}/>
    </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
