import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Screens/Home/Home';
import Pricing from './Screens/Pricing/Pricing';
import MedicalUseCase from './Screens/UseCases.jsx/Medical/Medical';
import ConstructionUseCase from './Screens/UseCases.jsx/Constructions/Construction';
import CafeUseCase from './Screens/UseCases.jsx/Cafe/Cafe';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/usecase/medical' element={<MedicalUseCase />} />
          <Route path='/usecase/construction' element={<ConstructionUseCase />} />
          <Route path='/usecase/cafe' element={<CafeUseCase />} />



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
