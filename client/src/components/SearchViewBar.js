import React from "react"

function SearchViewBar(props){
    return(
        <div id="InputBar">
            {/* method='POST' action='/places' */}
            <form action="/addtocart" method="POST">
                <button name="id" value={props.id}>+</button>
            </form>
            <button>View</button>
        </div>
    )
}

export default SearchViewBar