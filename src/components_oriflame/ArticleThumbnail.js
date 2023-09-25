import tupac from "../Resources/beautysection.png";

export default function News(props) {
  return (
    <div className="News">
      <div className="container">
        <div className="imgHolder">
          <img src={tupac} />
        </div>
        <div className="txtHolder">
          <span>FEATURE EDITORIAL</span>
          <h1>HOW TO MANAGE OILY SKIN</h1>
        </div>
        <div className="buttonHolder">
          <button>READ MORE</button>
        </div>
      </div>
    </div>
  );
}
