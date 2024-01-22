import Card from "../components_oriflame/Card";
import Pdata from "./Data.json";
import { useNavigate } from "react-router-dom";
import Pseudo from "./NBA_Cards.playercards.json"

export default function Ori() {
  const poop = Pdata.LeBron;

  const send = ()=>{
    date =input.value
  }

  const soap = Pseudo.find(obj => {
    return obj.firstName === "Giannis"
  })

  return (
    <div className="containerr">

      <form className="dataEntry">
        <input></input>
        <button onClick={send}>Search</button>
      </form>

      <Card
        key={poop.id}
        firstname={poop.firstname}
        lastname={poop.lastname}
        attack={poop.attack}
        defense={poop.defense}
        stamina={poop.stamina}
        accuracy={poop.accuracy}
        passing={poop.passing}
        handles={poop.handles}
        overall={poop.overall}
      />
      <div>{soap.PPG}</div>
    </div>
  );
}