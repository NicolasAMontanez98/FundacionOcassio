import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/nosotros" component={AboutUs} />
      <Route exact path="/servicios" component={Services} />
      <Footer />
    </Router>
  );
}

export default App;
