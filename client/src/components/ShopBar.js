import React from "react"

function ShopBar(props){
    return(
        <div id="InputBar">
            <form action="/addtocart" method="POST">
                <button name="id" value={props.id}>+</button>
            </form>
            <a href={`/products/${props.id}`}>
                <button>View</button>
            </a>
        </div>
    )
}

export default ShopBar