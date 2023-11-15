import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Screens/Home/Home';
import Pricing from './Screens/Pricing/Pricing';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pricing' element={<Pricing />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
