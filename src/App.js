import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import DefaultLayout from "./components_oriflame/Layout";

import Oriflame from "./pages/Oriflame";
import Filler from "./pages/filler";
import Filler2 from "./pages/filler2";

function App() {
  const location = useLocation()

  return (
    <DefaultLayout>
      <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Oriflame />}></Route>
        <Route path="/filler" element={<Filler />}></Route>
        <Route path="/filler2" element={<Filler2 />}></Route>
      </Routes>
      </AnimatePresence>
    </DefaultLayout>
  );
}

export default App;
