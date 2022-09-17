import React from "react"

function ShopBar(props){
    return(
        <div id="InputBar">
            <form action="/addtocart" method="POST">
                <button name="id" value={props.id}>+</button>
            </form>
            <button>View</button>
        </div>
    )
}

export default ShopBar