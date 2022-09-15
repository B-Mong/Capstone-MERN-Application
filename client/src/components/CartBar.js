import React from "react"
function CartBar(props){
    return(
        <div id="InputBar">
            <button>-</button>
            <button>+</button>
            <form>
                <input type="number" min="0"/>
            </form>
            <button>View</button>
        </div>
    )
}
export default CartBar