import { useNavigate } from "react-router-dom";
import { useState } from "react";

import poop from "../Resources/AIQT4810.JPG"
import poop2 from "../Resources/EXYS3788.JPG"
import Navbar from "../components_oriflame/Navbar";
import Carousel from "../components_oriflame/Carousel";

export default function Home() {
  
  const bro = useNavigate();
  const [menuha, setMenuha] = useState(false)


  return (
    <div className="Homey">
      <img onClick={()=>setMenuha(!menuha)} className={menuha? "poopy" : "poop" } src={poop} alt="nope" />
      <img onClick={()=>setMenuha(!menuha)} className={menuha? "poopy2" : "poop2" } src={poop2} alt="nope" />

      <Navbar toint="ORDER ONLINE" yup={menuha} onyx={()=>{setMenuha(!menuha)}}/>
      <section className="FirstAvenger">
        <div className="con">
          <h1>
            Welcome<br></br> to your nightmare
          </h1>
          <span className="top">Hahahahaha</span>
          <span className="small">A Gloria from Mordern Family reference.</span>
        </div>
      </section>
      <Carousel />
      <section className="SecondAvenger">
        <h1>
          The wicked will be judged with the wrath of Allah.
        </h1>
      </section>
    </div>
  );
}
