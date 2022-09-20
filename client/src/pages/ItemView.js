import React from "react"
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import NavBar from "../components/NavBar"


function ItemView(){

    const [data, setData] = useState(null)
    const {id} = useParams()
    console.log(id)

    useEffect(() => {
        fetch(process.env.REACT_API_URL + `/products/${id}`)
        .then((res) => res.json())
        .then((data) => setData(data.testData))
    }, []);

    return(
      <div id='App'>
        <NavBar/>
        {!data ? 'Loading...': RenderPage(data)}
      </div>
    )
}

function RenderPage(data){
    return(
        <div id="Item">
            <img src={data.img} width={100} height={100}/>
            <h2>{data.name}</h2>
            <p>${data.price}</p>
            <p>{data.description}</p>
        </div>
    )
}

export default ItemView
