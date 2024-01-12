import Card from "../components_oriflame/Card";
import Pdata from "./Data.json";

export default function Ori() {
  const poop = Pdata.LeBron;
  const spice = Pdata.Curry

  return (
    <div className="container">
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
      <Card
        key={spice.id}
        firstname={spice.firstname}
        lastname={spice.lastname}
        attack={spice.attack}
        defense={spice.defense}
        stamina={spice.stamina}
        accuracy={spice.accuracy}
        passing={spice.passing}
        handles={spice.handles}
        overall={spice.overall}
      />
    </div>
  );
}
