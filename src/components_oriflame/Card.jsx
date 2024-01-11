export default function Card(props) {
  return (
    <div className="Card">
      <div className="cont">
        <img />
        <div className="Main">
          <div className="left">
            <span>{props.firstname}</span>
            <span>{props.lastname}</span>
          </div>
          <div className="rite">
            <span>{props.overall}</span>
          </div>
        </div>
        <div className="details">
          <ul className="left">
            <li>
              Attack
              <span>{props.attack}</span>
            </li>
            <li>
              Defense
              <span>{props.defense}</span>
            </li>
            <li>
              Stamina
              <span>{props.stamina}</span>
            </li>
          </ul>
          <ul className="rite">
            <li>
              Accuracy
              <span>{props.accuracy}</span>
            </li>
            <li>
              Passing
              <span>{props.passing}</span>
            </li>
            <li>
                handles
              <span>{props.handles}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
