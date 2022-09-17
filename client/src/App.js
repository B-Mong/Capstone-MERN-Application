import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import CartView from './pages/CartView'
import ShopView from './pages/ShopView'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<ShopView/>}/>
        <Route path='/cart' element={<CartView/>}/>
      </Routes>
    </Router>


    
  );
}

export default App;
