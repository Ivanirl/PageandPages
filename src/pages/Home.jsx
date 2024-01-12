import { useNavigate } from "react-router-dom";

export default function Home() {
  const bro = useNavigate();

  return (
    <div className="Homey">
      <section className="FirstAvenger">
        <h1>Welcome<br></br> to your nightmare</h1>
        <span>Hahahahaha</span>
      </section>
    </div>
  );
}
