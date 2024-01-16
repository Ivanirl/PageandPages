import { useNavigate } from "react-router-dom";

import Navbar from "../components_oriflame/Navbar";

export default function Home() {
  const bro = useNavigate();

  return (
    <div className="Homey">
      <Navbar />
      <section className="FirstAvenger">
        <div className="con">
          <h1>
            Welcome<br></br> to your nightmare
          </h1>
          <span className="top">Hahahahaha</span>
          <span className="small">A Gloria from Mordern Family reference.</span>
        </div>
      </section>
    </div>
  );
}
