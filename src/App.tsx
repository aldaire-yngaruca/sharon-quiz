import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Quiz from "./routes/Quiz";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pulga" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
