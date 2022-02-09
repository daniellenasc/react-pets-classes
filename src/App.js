import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Pets } from "./pages/Pets";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/*  Colocando um componente entre o BrowserRouter e o Routes, ele será renderizado em todas as rotas */}
      <Routes>
        <Route path="/pets/:species" element={<Pets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
