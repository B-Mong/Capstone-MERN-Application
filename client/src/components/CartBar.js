import React from "react"

function CartBar(props){
    return(
        <div id="InputBar">
            <form method="POST" action= '/removeitem?_method=DELETE'> 
                <button name="id" value={props.id}>-</button>
            </form>
            <form method="PUT" action= '/changequantity'>
                <input type="number" name="amount" min="0"/>
                <input type="hidden" name="id" value={props.id}/>
            </form>
            <a href={`/products/${props.id}`}>
                <button>View</button>
            </a>
        </div>
    )
}
export default CartBar