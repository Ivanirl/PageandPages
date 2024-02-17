import Card from "../components_oriflame/Card";

import { useState, useEffect } from "react";
import Pseudo from "./NBA_Cards.playercards.json";

export default function Ori() {
  const [stat, getStat] = useState("");
  const [isLoadin, setIsLoadin] = useState("");


  const send = (event) => {
    getStat(event.target.value);
    console.log(stat);
  };

  const sendy = (event) => {
    setIsLoadin("");
  };

  const soap = Pseudo.find((obj) => {
    return obj.firstName.toLowerCase() === stat;
  });

  const tone = () => {
    if (soap) {
      setIsLoadin("loaded");
    } else if (!soap) {
      setIsLoadin("error");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    tone();
  };

  if (isLoadin === "error") {
    return (
      <div className="containerr">
        <form className="dataEntry" onSubmit={handleSubmit}>
          <input
            type="text"
            className="pData"
            onChange={sendy}
            value={stat}
          ></input>
        </form>
        <button className="poise" onClick={tone}>
          Search
        </button>
        <span className="err">errorrrrrrrrrrrrrr</span>
      </div>
    );
  }

  if (isLoadin === "loaded") {
    return (
      <div className="containerr">
        <form className="dataEntry" onSubmit={handleSubmit}>
          <input
            type="text"
            className="pData"
            onChange={sendy}
            value={stat}
          ></input>
        </form>
        <button className="poise" onClick={tone}>
          Search
        </button>

        <Card
          firstname={soap.firstName}
          lastname={soap.lastName}
          attack={soap.PPG}
          defense={soap.RPG}
          stamina={soap.GPL}
          passing={soap.APG}
        />
      </div>
    );
  }

  return (
    <div className="containerr" >
      <form className="dataEntry" onSubmit={handleSubmit}>
        <input
          type="text"
          className="pData"
          onChange={send}
          value={stat}
        ></input>
      </form>
      <button className="poise" onClick={tone}>
        Search
      </button>
    </div>
  );
}
