import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Pets } from "./pages/Pets";
import { Contact } from "./pages/Contact";
import { PostNewPets } from "./pages/PostNewPets";
import { EditPet } from "./pages/EditPet";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/*  Colocando um componente entre o BrowserRouter e o Routes, ele será renderizado em todas as rotas */}
      <Routes>
        <Route path="/pets/:species" element={<Pets />} />
        <Route path="/faleconosco" element={<Contact />} />
        <Route path="/cadastro-pets" element={<PostNewPets />} />
        <Route path="/editar-pet/:id" element={<EditPet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
