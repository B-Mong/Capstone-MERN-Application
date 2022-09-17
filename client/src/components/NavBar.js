import React from "react"

function NavBar(props){
    return(
        <header id="NavBar">
            <h1>Placeholder</h1>
            <form id="Search">
                <input type="text"/>
            </form>
            <div id="NavButtons">
                <a href="/">
                    <button>Home</button>
                </a>
                <a href="/cart">
                    <button>Cart</button>
                </a>
            </div>
        </header>
    )
}
export default NavBar