import { useEffect, useState } from 'react'
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
    <div className="App">
      <h1>WE UP</h1>
      <h1>{routeMessage}</h1>
    </div>
  );
}

export default App;
