import { useNavigate } from "react-router-dom";

export default function Home() {
  const bro = useNavigate();

  return (
    <div className="Homey">
      <section className="FirstAvenger">
        <h1>
          Welcome<br></br> to your nightmare
        </h1>
        <span className="top">Hahahahaha</span>
        <span className="small">
          I'll explain this for the civilians looking at this demo page, this is
          a Gloria from Mordern Family   reference.
        </span>
      </section>
    </div>
  );
}
