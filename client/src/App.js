import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'

import './App.css'
import Cart from './pages/Cart'
import Shop from './pages/Shop'

let j = 0

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </Router>


    
  );
}

export default App;
