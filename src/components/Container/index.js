import React from "react";

function Container(props) {
    return (
        <div class="container">
            {props.children}
        </div>
    )
}

export default Container;