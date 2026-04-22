import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="title">Bienvenida</h1>
      <div className="pacman-header">
        <div className="pacman"></div>
        <p className="text-message">
          Hola, pulga, esto es una prueba 100% real. Si no la apruebas, vamos a
          Tener que dejarnos de hablar, así que tómalo en serio. De esto Depende
          de muchas cosas.
          <br />
          PD: No te olvides de tomar captura a los resultados y mandármelos.
          <br />
          <br />
          ¡Suerte!
        </p>
      </div>
      <button className="button-router" onClick={() => navigate("/pulga")}>
        Empezar
      </button>
    </div>
  );
};

export default Home;
