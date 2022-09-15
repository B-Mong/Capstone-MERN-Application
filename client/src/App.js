import { useEffect, useState } from 'react'
import './App.css';
import Item from './components/Item';
import NavBar from './components/NavBar';



let j = 0;

function App() {
  const [routeMessage, setRouteMessage] = useState('')
  //connection to back-end with useEffect
  //doesn't really work yet but we can start making our components
  useEffect(()=>{
    fetch('https://localhost:3001/homepage')
    .then((response)=>response.json())
    //data passed in from back-end
    .then((data)=>setRouteMessage(data))
  },[])
  

  return (
    <div id='App'>
      <NavBar/>
      {Cards()}
    </div>
  );
}


function Cards(){
  let cards = [];
  for(let i = 0; i <12; i++ ){
    cards.push(<Item name = {'test'+i} price = {20.00+i*3} description = 'Description Description Description'  isInCart = {j}/>)
  }
  return <div id='ItemsList'> {cards} </div>
}

export default App;
