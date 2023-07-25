import { Routes, Route, Navigate, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home/Home";
import Payment from "./components/pages/Payment/Payment";
import StrayAnimal from "./components/pages/Animal/UploadAnimal/StrayAnimal";
import OrganisePlantation from "./components/pages/Plant/UploadPlantation/OrganisePlantation";
import Game from "./components/utilities/Game/Game";
import Login from "./components/pages/Login/login.jsx";
import PlatformApp from "./components/pages/Platform";
import Activity from "./components/pages/Activity/Activity.jsx";
import PersonalRecommend from "./components/pages/recommendation/PersonalRecommend";
import Story1 from "./components/pages/Story/Story1";
import Story2 from "./components/pages/Story/Story2";
import Signup from "./components/pages/Signup/Signup";

function App() {
  const isLoggedIn = localStorage.getItem("token") ? true : false;
  console.log(localStorage.getItem("token"));
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <PlatformApp /> : <Navigate to="/signup" />}
          >
            <Route path="/" element={<Home />} />
            {/* <Route path="/plant" element={<Plant />} /> */}
            {/* <Route path="/animal" element={<Animal />} /> */}
            <Route path="/payment" element={<Payment />} />
            <Route path="/strayanimal" element={<StrayAnimal />} />
            <Route path="/game" element={<Game />} />
            <Route
              path="/organiseplantation"
              element={<OrganisePlantation />}
            />
            <Route path="/activity" element={<Activity />} />
            <Route path="/reccomend" element={<PersonalRecommend />} />
            <Route path="/gogreen" element={<Story1 />} />
            <Route path="/helpanimal" element={<Story2 />} />
          </Route>

          <Route path="/auth" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
