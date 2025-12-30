import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedRoutes from "./components/AnimatedRoutes";
import ParticleBackground from "./components/ParticleBackground";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ParticleBackground />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
