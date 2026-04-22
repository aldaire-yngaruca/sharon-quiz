import { useNavigate } from "react-router-dom";
import Appa from "../assets/appa.webp";
import Momo from "../assets/momo.webp";
import Naga from "../assets/naga.webp";
import Pabu from "../assets/pabu.webp";
interface Props {
  score: number;
}

const Result = ({ score }: Props) => {
  const navigate = useNavigate();

  const getMessage = () => {
    if (score <= 3) return "Me decepcionas, no me hables 🙂";
    if (score <= 7) return "Todavía estas en nada 🙃";
    if (score <= 9) return "Muy buen resultado, pero te faltó 🤨";
    return "Perfecto Pulga, sabía que no me decepcionarías! 😌";
  };
  const getResult = () => {
    if (score <= 3) return { text: "Vale por una patada", img: Pabu };
    if (score <= 7) return { text: "Vale por un puñete", img: Momo };
    if (score <= 9) return { text: "Vale por un chicle", img: Naga };
    return { text: "Vale para no dejarte de hablar", img: Appa };
  };
  const result = getResult();

  return (
    <div className="container">
      <h1>🔥 Resultado 🔥</h1>
      <h2>{score} / 10</h2>
      <p className="text-message">{getMessage()}</p>
      <div className="voucher">🎁 {result.text} 🎁</div>
      <img src={result.img} alt="resultado" className="result-img" />
      <p className="text-message">Ya puedes continuar con tu día pulga 😌</p>
      <button className="button-router" onClick={() => navigate("/")}>
        Regresar
      </button>
    </div>
  );
};

export default Result;
