import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Screens/Home/Home';
import Pricing from './Screens/Pricing/Pricing';

import MedicalUseCase from './Screens/UseCases.jsx/Medical/Medical';
import ConstructionUseCase from './Screens/UseCases.jsx/Constructions/Construction';
import CafeUseCase from './Screens/UseCases.jsx/Cafe/Cafe';

import Schedule from './Screens/Features/Schedule/Schedule';
import Messaging from './Screens/Features/Messaging/Messaging';
import Management from './Screens/Features/Management/Management';

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

          <Route path='/features/scheduling' element={<Schedule />} />
          <Route path='/features/messaging' element={<Messaging />} />
          <Route path='/features/management' element={<Management />} />



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
