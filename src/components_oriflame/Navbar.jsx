

export default function Navbar({ toint, yup, onyx }) {
  return (
    <div className="Navbar">
      <div className="container">
        <button className={yup ? "rite" : "left"} onClick={onyx}></button>
        <div className="right">
          <span className={yup ? "blue" : " "}>{toint}</span>
        </div>
      </div>
    </div>
  );
}