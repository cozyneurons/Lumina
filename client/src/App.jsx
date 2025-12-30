import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedRoutes from "./components/AnimatedRoutes";
import CursorBackground from "./components/CursorBackground";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CursorBackground />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
