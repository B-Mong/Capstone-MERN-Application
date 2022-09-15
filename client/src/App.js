import { useEffect, useState } from 'react'
import './App.css';
import Card from './components/Card';
import NavBar from './components/NavBar';

let j = 0

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/test')
      .then((res) => res.json())
      .then((data) => setData(data.testData));
  }, []);
  

  return (
    <div id='App'>
      <NavBar/>
      {!data ? 'Loading...': CreateCards(data)}
    </div>
  );
}


function CreateCards(data){
  let cards = [];

  return(
    <div id='ItemsList'>
      {data.map((d) => {
        return(
          <Card img = {d.images[0]} name = {d.title} price = {d.price} description = {d.description}  isInCart = {j}/>
        )
      })}
    </div>

  )
}

export default App;
