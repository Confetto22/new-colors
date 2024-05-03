import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Testimonials from "./components/testimonials/Testimonials";
import OverSeer from "./components/overseer/Overseer";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <OverSeer />
      <hr className="secDivide" />
      <About />
      <hr className="secDivide" />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
