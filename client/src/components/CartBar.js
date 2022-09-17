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
            <button>View</button>
        </div>
    )
}
export default CartBar