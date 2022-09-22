import React from "react"
import { link } from 'react-router-dom';
function ShopBar(props){
    return(
        <div id="InputBar">
            <form action="/additem" method="POST">
                <button name="id" value={props.id}>+</button>
            </form>
            <Link to={`/products/${props.id}`}>
                <button>View</button>
            </Link>
        </div>
    )
}

export default ShopBar