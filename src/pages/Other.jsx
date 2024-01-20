import Card from "../components_oriflame/Card";
import Pdata from "./Data.json";
import { useNavigate } from "react-router-dom";

export default function Ori() {
  const poop = Pdata.LeBron;
  const spice = Pdata.Curry;

  const navy = useNavigate();

  return (
    <div className="containerr">
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
    </div>
  );
}
