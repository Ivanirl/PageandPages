import Card from "../components_oriflame/Card";
import kin from "./Data.json";

export default function Ori() {
  return (
    <div className="container">
      <Card
        key={kin.id}
        firstname={kin.firstname}
        lastname={kin.lastname}
        attack={kin.attack}
        defense={kin.defense} 
        stamina={kin.stamina}
        accuracy={kin.accuracy  }
        passing={kin.passing}
        handles={kin.handles}
        overall={kin.overall}
      />
    </div>
  );
}
