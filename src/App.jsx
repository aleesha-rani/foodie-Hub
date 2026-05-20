import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="scroll-smooth">

      <Navbar />

      <div id="home">
        <Home />
      </div>

      <div id="menu">
        <Menu />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />

    </div>
  );
};

export default App;