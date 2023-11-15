import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Screens/Home/Home';
import Pricing from './Screens/Pricing/Pricing';
import MedicalUseCase from './Screens/UseCases.jsx/Medical/Medical';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/usecase/medical' element={<MedicalUseCase />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
