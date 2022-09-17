import React from "react"
import CartBar from "./CartBar"
import ShopBar from "./ShopBar"


function Card(props){
    return(
        <div id="Card">
            <div id="Item">
                <img src={props.img} width={100} height={100}/>
                <h2>{props.name}</h2>
                <p>${props.price}</p>
                <p>{props.description}</p>
                {/* displays how much is currently in cart */}
                <p>Quantity: 0</p>
            </div>
            {RenderBar(props)}
        </div>

        
    )
}


function RenderBar(props){

    console.log(props.isInCart)
    if(props.isInCart == 0){
        return (
            <CartBar id = {props.id}/>
        )
    }
    else{
        return (
            <ShopBar id = {props.id}/>
        )
    }
}
export default Card