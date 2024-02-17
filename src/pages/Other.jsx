import Card from "../components_oriflame/Card";
import Pdata from "./Data.json";

import { useState, useEffect } from "react";
import Pseudo from "./NBA_Cards.playercards.json";

export default function Ori() {
  const [stat, getStat] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoadin, setIsLoadin] = useState("")

  const poop = Pdata.LeBron;

  const send = (event) => {
    getStat(event.target.value);
    console.log(stat);
  };

  const sendy = (event) => {
    setIsLoadin("")
  };

  const soap = Pseudo.find((obj) => {
    return obj.firstName.toLowerCase() === stat;
  });
  const tone = ()=>{
    console.log(soap.PPG)
    setIsLoadin("loaded")
  }

  const errors = ()=>{

  }

  const handleSubmit = (event)=>{
    event.preventDefault()
    tone()
  }

  if (isLoadin === "loaded"){
    return (
      <div className="containerr">
      <form className="dataEntry">
        <input
          type="text"
          className="pData"
          onChange={sendy}
          value={stat}
        ></input>
      </form>
      <button className="poise" onClick={tone}>Search</button>

       
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
    </div>
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

    </div>
  );
}
