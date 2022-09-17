import React from "react"
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import NavBar from "../components/NavBar"

let test = {id:7, title:"Samsung Galaxy Book", description:"Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched", price:1499, discountPercentage:4.15, rating:4.25, stock:50,brand:"Samsung",category:"laptops",thumbnail:"https://dummyjson.com/image/i/products/7/thumbnail.jpg",images:["https://dummyjson.com/image/i/products/7/1.jpg","https://dummyjson.com/image/i/products/7/2.jpg","https://dummyjson.com/image/i/products/7/3.jpg","https://dummyjson.com/image/i/products/7/thumbnail.jpg"]}
function ItemView(){

    const [data, setData] = useState(null)
    const {id} = useParams()
    console.log(id)

    // useEffect(() => {
    //     fetch(`/${id}`)
    //     .then((res) => res.json())
    //     .then((data) => setData(data.testData))
    // }, []);

    return(
      <div id='App'>
        <NavBar/>
        {RenderPage(test)}
        {/* {!data ? 'Loading...': RenderPage(test)} */}
      </div>
    )
}

function RenderPage(data){
    return(
        <div id="ItemDisplay">
            <div id="Picture">
                <img src={data.images[0]}/> 
            </div>
            <div id="Info">
                <h1>{data.title}</h1>

                <div id="InfoSection">
                    <h2>Rating: </h2>
                    <p>{data.rating}</p>
                </div>
                
                <div id="InfoSection">
                    <h2>Price: </h2>
                    <p>${data.price}</p>
                </div>
                
                <div id="Description">
                    <h2>Description</h2>
                    <p>{data.description}</p>
                </div>

                <form action="/additem" method="POST">
                    <button name="id" value={data.id}>+</button>
                </form>
            </div>
            
           
        </div>
    )
}

export default ItemView
