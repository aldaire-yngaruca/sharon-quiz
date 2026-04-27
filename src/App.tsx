import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./routes/Home";
import Quiz from "./routes/Quiz";
import { useState } from "react";
import PasswordModal from "./components/ModalPassword";

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleSuccess = () => {
    setIsAuthenticated(true);
    navigate("/");
  };

  if (!isAuthenticated) {
    return <PasswordModal onSuccess={handleSuccess} />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pulga" element={<Quiz />} />
    </Routes>
  );
}

export default AppWrapper;
