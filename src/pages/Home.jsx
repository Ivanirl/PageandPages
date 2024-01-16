import { useNavigate } from "react-router-dom";
import { useState } from "react";

import poop from "../Resources/AIQT4810.JPG"
//import poop2 from ""
import Navbar from "../components_oriflame/Navbar";

export default function Home() {
  const navbar_styles = {
    cursor:"pointer"
  }
  const bro = useNavigate();
  const [menuha, setMenuha] = useState(false)


  return (
    <div className="Homey">
      <img style={navbar_styles} onClick={()=>setMenuha(!menuha)} className={menuha? "poop" : "poopy" } src={poop} alt="nope" />
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
      <section className="SecondAvenger">
      </section>
    </div>
  );
}
