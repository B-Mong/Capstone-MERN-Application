import React from "react"
import {Search,Dash} from 'react-bootstrap-icons'

function CartBar(props){
    return(
        <div id="InputBar">
            <form method="POST" action= '/api/removeitem?_method=DELETE'> 
                <button name="id" value={props.id}><Dash/></button>
            </form>
            <form method="POST" action= {`/api/cart/count/${props.id}?_method=PUT`}>
                <input type="number" name="count" min="0"/>
            </form>
            <a href={`/products/${props.id}`}>
                <Search/>
            </a>
        </div>
    )
}
export default CartBar