import picy from "../Resources/IMG_E8511 (2).JPG";

export default function Card(props) {
  return (
    <div className="Card">
      <div className="cont">
        <img className="Face" alt="Baby LeeGM" src={picy} />
        <div className="Main">
          <div className="left">
            <span className="first">{props.firstname}</span>
            <span className="last">{props.lastname}</span>
          </div>
          <div className="rite">
            <span>{props.overall}</span>
          </div>
        </div>
        <div className="details">
          <ul className="left">
            <li>
              <span className="digit">{props.attack}</span>
              Attack
            </li>
            <li>
              <span className="digit">{props.defense}</span>
              Defense
            </li>
            <li>
              <span className="digit">{props.stamina}</span>
              Stamina
            </li>
          </ul>
          <ul className="rite">
            <li>
              <span className="digit">{props.accuracy}</span>
              Accuracy
            </li>
            <li>
              <span className="digit">{props.passing}</span>
              Passing
            </li>
            <li>
              <span className="digit">{props.handles}</span>
              handles
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
