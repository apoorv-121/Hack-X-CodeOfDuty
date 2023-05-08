import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Plant from "./components/pages/Plant/Plant";
import Home from "./components/pages/Home/Home";
import Header from "./components/layout/Header/Header";
import Animal from "./components/pages/Animal/Animal";
import Payment from "./components/pages/Payment/Payment";
import StrayAnimal from "./components/pages/Animal/UploadAnimal/StrayAnimal";
import OrganisePlantation from "./components/pages/Plant/UploadPlantation/OrganisePlantation";
import Game from "./components/utilities/Game/Game";
import Login from "./components/pages/Login/login.jsx";
import PlatformApp from "./components/pages/Platform";
import Activity from "./components/pages/Activity/Activity.jsx";

function App() {
  const isLoggedIn = localStorage.getItem("token") ? true : false;
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <PlatformApp /> : <Navigate to="/auth" />}
        >
          <Route path="/" element={<Home />} />
          <Route path="/plant" element={<Plant />} />
          <Route path="/animal" element={<Animal />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/strayanimal" element={<StrayAnimal />} />
          <Route path="/game" element={<Game />} />
          <Route path="/organiseplantation" element={<OrganisePlantation />} />
          <Route path="/activity" element={<Activity />} />
        </Route>

        <Route path="/auth" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
