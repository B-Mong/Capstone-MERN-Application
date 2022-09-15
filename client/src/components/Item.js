import React from "react"
import ShoppingBar from "./ShoppingBar"
import CartBar from "./CartBar"


function Item(props){
    return(
        <div id="Card">
            <div id="Item">
                <img src="logo192.png" width={100} height={100}/>
                <h2>{props.name}</h2>
                <p>${props.price}</p>
                <p>{props.description}</p>
                <p>Quantity: 0</p>
            </div>
            {RenderBar(props)}
        </div>

        
    )
}


function RenderBar(props){
    if(props.isCart == 0){
        return (
            <CartBar/>
        )
    }
    else{
        return (
            <SearchViewBar/>
        )
    }
}
export default Item