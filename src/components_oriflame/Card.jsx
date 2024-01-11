

export default function Card(props) {
  return (
    <div className="Card">
      <div className="cont">
        <img alt="Baby LeeGM"/>
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
              Attack
              <span className="digit">{props.attack}</span>
            </li>
            <li>
              Defense
              <span className="digit">{props.defense}</span>
            </li>
            <li>
              Stamina
              <span className="digit">{props.stamina}</span>
            </li>
          </ul>
          <ul className="rite">
            <li>
              Accuracy
              <span className="digit">{props.accuracy}</span>
            </li>
            <li>
              Passing
              <span className="digit">{props.passing}</span>
            </li>
            <li>
                handles
              <span className="digit">{props.handles}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
