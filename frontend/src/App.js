import { Routes, Route } from "react-router-dom";
import "./App.css";
import Plant from "./components/pages/Plant/Plant";
import Home from "./components/pages/Home/Home";
import Header from "./components/layout/Header/Header";
import Animal from "./components/pages/Animal/Animal";
import Payment from "./components/pages/Payment/Payment";
import StrayAnimal from "./components/pages/Animal/UploadAnimal/StrayAnimal";
import OrganisePlantation from "./components/pages/Plant/UploadPlantation/OrganisePlantation";
import Game from "./components/utilities/Game/Game";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plant" element={<Plant />} />
        <Route path="/animal" element={<Animal />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/strayanimal" element={<StrayAnimal />} />
        <Route path="/game" element={<Game />} />
        <Route path="/organiseplantation" element={<OrganisePlantation />} />
      </Routes>
    </div>
  );
}

export default App;
