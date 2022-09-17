import React from "react"

function CartBar(props){
    return(
        <div id="InputBar">
            <form method="POST" action= '/removeitem?_method=DELETE'> 
                <button name="id" value={props.id}>-</button>
            </form>
            <form>
                <input type="number" min="0"/>
            </form>
            <a href={`/products/${props.id}`}>
                <button>View</button>
            </a>
        </div>
    )
}
export default CartBar