import { useState } from "react";

const PASSWORD = "310395";

export default function PasswordModal({ onSuccess }: any) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // 👈 evita recarga

    if (input === PASSWORD) {
      onSuccess();
    } else {
      setError("Contraseña incorrecta");
    }
  };

  return (
    <div className="container">
      <div>
        <h2>Alto ahí velocista!</h2>
        <p className="text-message">Ahora necesitas la contraseña 🤨</p>
        <p className="text-message">Ya sabes a quién pedírsela</p>
        <br />

        <form onSubmit={handleSubmit}>
          <input
            className="modal-input"
            type="password"
            name="new-password"
            placeholder="Ingresa la contraseña"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError("");
            }}
          />

          {error && <p style={{ color: "red" }}>{error}</p>}

          <br />

          <button type="submit" className="button-router">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
