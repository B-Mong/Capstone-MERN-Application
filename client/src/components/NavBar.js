import React from "react"
import {Cart3,Shop} from 'react-bootstrap-icons'

function NavBar(){
    return(
        <header id="NavBar">
            <h1>Placeholder</h1>
            
            <div id="NavButtons">
                <a href="/">
                    <Shop/>
                </a>
                <a href="/cart">
                    <Cart3/>
                </a>
            </div>
        </header>
    )
}
export default NavBar