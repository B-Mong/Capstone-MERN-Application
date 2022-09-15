import { useEffect, useState } from 'react'
import './App.css';
import Item from './components/Item';
import NavBar from './components/NavBar';
import { data } from './data.JSON'
let j = 0;

function App() {
  // const [routeMessage, setRouteMessage] = useState('')
  // // data returned from query, e.g. productData.products[0]
  // useEffect(()=>{
  //   fetch(productData)
  //   .then((response)=>response.json())
  //   //data passed in from back-end
  //   .then((data)=>console.log(productData))
  // },[])

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
