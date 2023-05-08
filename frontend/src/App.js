import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/pages/Home/Home';
import Header from './components/layout/Header/Header';
import Animal from './components/pages/Animal/Animal';
import Payment from './components/pages/Payment/Payment';
import StrayAnimal from './components/pages/Animal/UploadAnimal/StrayAnimal';
import OrganisePlantation from './components/pages/Plant/UploadPlantation/OrganisePlantation';
import Story1 from './components/pages/Story/Story1';
import Story2 from './components/pages/Story/Story2';
import PersonalRecommend from './components/pages/recommendation/PersonalRecommend';


function App() {
  return (
    <div className="App">

      <Header />
      
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/plant' element={<Story1/>} />
        <Route path='/animal' element={<Story2/>} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/strayanimal' element={<StrayAnimal />} />
        <Route path='/organiseplantation' element={<OrganisePlantation />} />
        <Route path='/reccomend' element={<PersonalRecommend/>} />
        
      </Routes>

    </div>
  );
}

export default App;
