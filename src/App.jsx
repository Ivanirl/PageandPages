import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Ori from "./pages/Other";
import Home from "./pages/Home";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Ori />}></Route>
        <Route path="/ho" element={<Home />}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
//frend