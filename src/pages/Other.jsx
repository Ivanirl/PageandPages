import Card from "../components_oriflame/Card";
import Pdata from "./Data.json";

import { useState, useEffect } from "react";
import Pseudo from "./NBA_Cards.playercards.json";

export default function Ori() {
  const [stat, getStat] = useState("");
  const [updated, setUpdated] = useState(stat);
  const [isLoadin, setIsLoadin] = useState(false)

  const poop = Pdata.LeBron;

  const send = (event) => {
    getStat(event.target.value);
    console.log(stat);
  };

  // const sendHelper = () => {
  //   setUpdated(stat);
  //   soap;
  // };
  //

  const soap = Pseudo.find((obj) => {
    return obj.firstName === stat;
  });
  const tone = ()=>{
    console.log(soap.PPG)
    setIsLoadin(true)
  }

  useEffect(()=>{

  })

  if (isLoadin){
    return (
      <Card
      key={poop.id}
      firstname={soap.firstName}
      lastname={soap.lastName}
      attack={poop.attack}
      defense={poop.defense}
      stamina={poop.stamina}
      accuracy={poop.accuracy}
      passing={poop.passing}
      handles={poop.handles}
      overall={poop.overall}
    />
    )
  }

  return (
    <div className="containerr">
      <form className="dataEntry">
        <input
          type="text"
          className="pData"
          onChange={send}
          value={stat}
        ></input>
      </form>
      <button className="poise" onClick={tone}>Search</button>

       <div>{stat}</div>
    </div>
  );
}
